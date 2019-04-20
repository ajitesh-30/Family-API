const neode = require('./src/index')

const instance = neode.fromEnv()
    .with({
        Movie: {
            title: 'string',

            updatedAt: 'number',

            point: 'point',
            releasedAt: 'datetime',

            directorRel: {
                type: 'relationship',
                relationship: 'DIRECTED',
                direction: 'in',
                target: 'Director',
                alias: 'director',

                eager: true,

                properties: {
                    salary: 'float',
                },
            },
            // actorRels: {
            //     type: 'relationships',
            //     relationship: 'ACTED_IN',
            //     direction: 'in',
            //     target: 'Person',
            //     alias: 'actor',

            //     eager: true,
            // },

            // directorNode: {
            //     type: 'node',
            //     relationship: 'DIRECTED',
            //     direction: 'in',
            //     target: 'Person',

            //     eager: true,
            // },
            // actorNodes: {
            //     type: 'nodes',
            //     relationship: 'ACTED_IN',
            //     direction: 'in',
            //     target: 'Person',

            //     eager: true,
            // },
        },

        Actor: { 
            name: "string",
            movies: {
                type: 'nodes',
                relationship: 'ACTED_IN',
                direction: 'out',
                target: 'Movie',
                alias: 'movie',
                eager: true,
            }
        },
        Director: { name: "string" },
        Person: { 
            name: "string",
            movies: {
                type: 'relationships',
                relationship: 'ACTED_IN',
                direction: 'out',
                target: 'Movie',
                alias: 'movie',
                eager: true,
            }
        },
    })





    // console.log('..')
    // console.log('')
    // console.log('')
    // console.log(instance.model('Movie').relationship('director'))
    // console.log('')
    // console.log('')

    // import First from './src/Services/First'

    // First(instance, instance.model('Movie'), 'title', 'Matrix, The')
    //     // .then(res => {
    //     //     return res.toJson();
    //     // })
    //     .then(res => {
    //         console.log(res)
    //     })
    //     .catch(e => {
    //         console.log(e)
    //     })
    
    
console.clear()
    
const Movie = instance.model('Movie');

        
// import FindAll from './src/Services/FindAll'
// FindAll(instance, instance.model('Movie'), {title: 'Cloud Atlas'}, { title: 'ASC' }, 1, 0)

// import FindById from './src/Services/FindById'
// FindById(instance, Movie, 2081)


// import FindWithinDistance from './src/Services/FindWithinDistance'
// FindWithinDistance(instance, Movie, 'location', { latitude:51.568535, longitude:-1.772232 }, 1000, {}, {}, 10, 0)


instance.first('Movie', {title: 'Cloud Atlas'})
    // .then(res => {
    //     return res.toJson();
    // })
    // .then(res => {
    //     return res.first();
    // })
    .then(res => {
        return res.toJson()
    })
    .then(json => console.log( json ) )
    .catch(e => {
        console.log(e)
    })







