const express = require('express')
const {serverCallback} = require('./port.js')
const _h_r = require('./routes/home')

const app = express();

app.use('/home',_h_r)

app.get('/home', (req,res,next) =>{
    res.json({
        status : true,
        message : 'App Home'
    })

})


const PORT = process.env.PORT || 4000;
app.listen(PORT, () => serverCallback(PORT))


// app.get('/products/:name/:age', (req,res, next) => {

//     // DB query

//     console.log('req.params', req.params)


//     let data = {
//         name : req.params.name,
//         age : req.params.age
//     }
//     res.json(data)
// })






