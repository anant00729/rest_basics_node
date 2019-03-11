const {
    _m,
    con
} = require('../sqlcon')


class InsertValues {
    constructor(b) {
        this.t_n = b.t_n
        this.i_q = b.i_q
    }



    static get Builder() {
        class Builder {
            constructor() {}

            tableName(t_n) {
                this.t_n = t_n;
                return this;
            }
            singleInsert(_us_d) {

                let keys = ''
                let values = ''

                Object.keys(_us_d[0]).map((_x, i) => {
                    // _x[o] // value
                    // _x // key

                    keys += _x + ","
                    values += "'" + _us_d[0][_x] + "',"

                })
                keys.slice(0, -1)
                values.slice(0, -1)
                let i_q = `INSERT INTO ${this.t_n} (${keys}) VALUES (${values})`
                // 'INSERT INTO user (key, key , key) values (value, value, value)'

                // con.query(i_q, (err, row, fields) => {
                //     let array_new=[]
                //     let date = new Date()
                //         row.map((_r,i) => {
                //             let dob = _m(date).format('YYYY-MM-DD hh:mm:s')
                //             con.query(`UPDATE user SET DOB = '${dob}' WHERE id = ${_r.id}`, (err, row, fields) => {
                //                 _r.DOB = dob
                //             })
                //             array_new.push(_r);
                //     })
                
                //     res.json({ student : array_new})
                // })






                this.i_q = i_q;
                return this;
            }

            build() {
                return new InsertValues(this);
            }
        }
        return Builder;
    }
}


module.exports = {
    InsertValues
}