const con = require('../../Backend/config/connect');


module.exports = {
    create: (data,callback) =>{
        con.query(
            `insert into user_details(full_name, Email_address, Home_address, user_password, ID_type, ID_number)
            values(?,?,?,?,?,?)`,
            [
                data.full_name,
                data.Email_address,
                data.Home_address,
                data.user_password,
                data.ID_type,
                data.ID_number
            ],
            (error,results,fields) =>{
                if(error){
                return callback(error)
                }
                return callback(null,results)
            }
        );
    }
};

