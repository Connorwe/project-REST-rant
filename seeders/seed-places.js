const db = require('../models')

db.Place.create([{
    name: 'Do-nuts',
    city: 'Seattle',
    state: 'WA',
    cuisines: 'Sweets',
    pic: '/images/donut.jpg',    //need to add pictures
    founded: 1989
}, {
    name: 'Coding Cat Cafe',
    city: 'Phoenix',
    state: 'AZ',
    cuisines: 'Coffee, Bakery',
    pic: '/images/drink.jpg',
    founded: 2020
}])
.then(() => {
    console.log('Success!')
    process.exit()
})
.catch(err => {
    console.log('Failure!', err)
    process.exit()
})
