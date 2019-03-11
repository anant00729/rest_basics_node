// define only url 
const express = require('express')
const _c = require('../controllers/home')
const _r = express.Router()

_r.get('/sp_sc', _c.sp_Sch)
_r.get('/comming_soon', _c.comming_soon)
_r.get('/now_showing', _c.getNowShowing)

module.exports = _r


