const router = require('express').Router()

router.get('/', (req, res) => {
      ((places) => {
          res.render('places/index', { places })
      })
})
  
module.exports = router

