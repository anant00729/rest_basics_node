const my_sql = require('mysql')
const _m = require('moment')
const con = my_sql.createConnection({
    host : 'localhost',
    user : 'root',
    database : 'test',
    password : ''
})


module.exports = {_m , con}
