// var express = require('express');
// var router = express.Router();

import express from 'express'
import content from './indexHTML'



const router = express.Router()
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'Express',
    content
  });
});

module.exports = router
