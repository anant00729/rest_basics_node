// define only url 
const express = require('express')
const _c = require('../controllers/user')
const _r = express.Router()

_r.get('/u_dob', _c.u_dob)
_r.get('/i_user', _c.i_user)
_r.get('/d_user', _c.d_user)

module.exports = _r


