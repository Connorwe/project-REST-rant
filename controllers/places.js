const router = require('express').Router()

router.get('/new', (req, res) => {
  res.render('places/new')
})

router.get('/', (req, res) => {
  let places = [{
    name: 'Dough-nuts eatery',
    city: 'Seattle',
    state: 'WA',
    cuisines: 'donuts',
    pic: '/images/donut.jpg'
  }, {
    name: 'Lava-Lamp cafe',
    city: 'Phoenix',
    state: 'AZ',
    cuisines: 'Drinks, Bakery',
    pic: '/images/drink.jpg'
  }]
  
res.render('places/index', {places}) 
})
      

module.exports = router

