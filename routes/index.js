
/*
import express from 'express'
import content from './indexHTML'

const router = express.Router()
router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'Express',
    content
  })
})
*/


import express from 'express'
const router = express.Router()
router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'Express'
  })
})

module.exports = router
