
const {_m , con} = require('../sqlcon')

exports.getNowShowing = (req,res,next) => {
    // 2000
    res.json({
        status : true,
        message : 'Now Showing Success'
    })
}

exports.u_dob = (req,res,next) => {
    // 2000
    con.query("SELECT * FROM user", (err, row, fields) => {
        let array_new=[]
        let date = new Date()
            row.map((_r,i) => {
                let dob = _m(date).format('YYYY-MM-DD hh:mm:s')
                con.query(`UPDATE user SET DOB = '${dob}' WHERE id = ${_r.id}`, (err, row, fields) => {
                    _r.DOB = dob
                })
                array_new.push(_r);
        })
    
        res.json({ student : array_new})
    })
}


exports.i_user = async (req,res,next) => {
    // 2000
    try {
        let row = await con.query(`INSERT INTO user (name) values ('Anant')`)
        res.status(200).json(row)

    }catch(err){
        res.status(200).json(err)
    }

    // res.json({
    //     status : true,
    //     message : 'comming soon Success'
    // })
}

exports.d_user = async (req,res,next) => {
    // 2000
    // try {
    //     let row = await con.query(`SELECT * FROM user`)
    //     res.status(200).json(row)




    // }catch(err){
    //     res.status(200).json(err)
    // }


    con.query(`SELECT * FROM user`, (err, result, fields)=> {
        res.status(200).json(result)
    })

    // res.json({
    //     status : true,
    //     message : 'comming soon Success'
    // })
}