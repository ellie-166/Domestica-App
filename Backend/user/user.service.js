const con = require('../../Backend/config/connect');


module.exports = {
    create: (data,callback) =>{
        con.query(
            `insert into user_details(full_name, Email_address, Phone_No, Home_address, user_password, ID_type, ID_number)
            values(?,?,?,?,?,?,?)`,
            [
                data.full_name,
                data.Email_address,
                data.Phone_No,
                data.Home_address,
                data.user_password,
                data.ID_type,
                data.ID_number
            ],
            (error,results, fields) =>{
                if(error){
                return callback(error);
                }
                return callback(null, results);
            }
        );
    },
    getUsers: callback => {
        con.query(
            `select id, full_name, Email_address, Phone_NO, Home_address, ID_type, ID_number from
            user_details `,
            [],
            (error, results, fields) => {
                if(error){
                    return callback (error);
                }
                return callback(null, results);
            }
        );
    },

    
    etUserByUserid: (id, callback) => {
        con.query(
            `select id, full_name, Email_address, Phone_NO, Home_address, ID_type, ID_number from
            user_details where id=? `,
            [id],
            (error, results, fields) => {
                if(error){
                    return callback (error);
                }
                return callback(null, results[0]);
            }
        );
    },
    updateUsers: (data, callback) => {
        con.query(
            `update registeration set full_name=?, Email-address=?, Phone_No=?, Home_address=?,user_password=?, ID_type=?, ID_number=? where id=?`,
            [
                data.full_name,
                data.Email_address,
                data.Phone_No,
                data.Home_address,
                data.user_password,
                data.ID_type,
                data.ID_number,
                data.id
            ],
            (error, results, fields) => {
                if(error) {
                    callback(error);
                }
                return callback(null, results)
            }
        )
    },
    deleteUsers: (data, callback) => {
        con.query(
            `delete from user_details where id=?`,
        )
        [data.id],
        (error, results, field)=>{
            if (error) {
                return callback(error)
            } 
            return callback(null, results[0]);
        }
    }
};

