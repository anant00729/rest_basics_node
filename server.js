const express = require('express')

const {
    serverCallback
} = require('./port.js')
const _u_r = require('./routes/user')
const my_sql = require('mysql')
const i_q_builder = require('./sql/sql_insert')

const app = express();

app.use('/user', _u_r)

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => serverCallback(PORT))


const h = require('./building')

const _us_d = [{
    name: 'Anant',
    dob: '1996-12-09',
}];


console.log('i_q_builder', i_q_builder)

let name = 'Anant'

console.log('name.slice(0, -1); :', name.slice(0, -1));



const i_d = new i_q_builder.InsertValues.Builder()
.tableName('user')
.singleInsert(_us_d)
.build()

console.log('i_d', i_d)

// console.log('keys', keys)
// console.log('values', values)




// let res = new Inser.Builder()
//     .tableName('')
//     .singleInsert({})    
//     .build()

//console.log('house :', house);



// const con = my_sql.createConnection({
//     host : 'localhost',
//     user : 'root',
//     database : 'test',
//     password : ''

// })



// app.get('/products/:name/:age', (req,res, next) => {

//     // DB query

//     console.log('req.params', req.params)


//     let data = {
//         name : req.params.name,
//         age : req.params.age
//     }
//     res.json(data)
// })


//con.query("INSERT INTO user(name) values ('ajit')", res)

// const res = (err, row, fields) => {
//     let array_new=[]
//         row.map((_r,i) => {
//             array_new.push(_r);
//     })

//     return array_new
// }


// app.get('/home', (req,res,next) =>{
//     con.query("SELECT * FROM user", (err, row, fields) => {
//         let array_new=[]
//             row.map((_r,i) => {
//                 array_new.push(_r);
//         })

//         res.json({ student : array_new})
//     })
// })


// app.get('/i_date', (req,res,next) =>{
//     con.query("SELECT * FROM user", (err, row, fields) => {
//         let array_new=[]
//         let date = new Date()
//             row.map((_r,i) => {
//                 let dob = _m(date).format('YYYY-MM-DD')
//                 con.query(`UPDATE user SET DOB = '${dob}' WHERE id = ${_r.id}`, (err, row, fields) => {
//                     _r.DOB = dob
//                 })
//                 array_new.push(_r);
//         })

//         res.json({ student : array_new})
//     })
// })



// let _h = h.House

// // let house = new _h.Builder()
// //     .buidWindow(2)
// //     .buidDoors(4)
// //     .buidRooms(6)
// //     .build()




// Server <- USerRouter <- UserContrller
// Server ->