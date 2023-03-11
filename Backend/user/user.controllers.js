const{create, getUserByUserid, getUsers, updateUsers, deleteUsers} = require('./user.service');
const{genSaltSync, hashSync} = require('bcrypt');

module.exports= {
    createUser: (req, res) => {
        const body = req.body;
        const salt = genSaltSync(10)
        body.user_password = hashSync(body.user_password, salt)
        create(body,(err, results) => {
            if(err){
                console.log(err);
                return res.status(500).json({
                    success:0,
                    message: "Database connection error!"
                });
            }
            return res.status(200).json({
                success: 1,
                 data: results
            });
         });
       },
       getUserByUserid: (req, res) =>{
        const id = req.params.id;
        getUserByUserid (id,(err, results) =>{
            if(err){
                console.log(err);
                return;
            }
            if (!results){
                return res.json({
                    success:0,
                    message: "Record not found"
                });
            }
            return res.json({
                success:1,
                data: results
            });
        });
       },
       getUsers: (req, res)=>{
        getUsers((err, results)=>{
            if(err) {
                console.log(err);
                return;
            }
            return res.json({
                success: 1,
                message: results
            });
        });
       },
       updateUsers: (req, res) => {
        const body  = req.body;
        const salt = genSaltSync(10)
        body.password = hashSync(body.password, salt);
        updateUsers(body, (err, results)=>{
            if(err){
                console.log(err);
                return;
               }
               return this.res.json({
                success:1,
                message: "Updated succesfully!"
             });
        });
       },
       deleteUsers: (req, res) => {
        const data = req.body;
        deleteUsers(data, (err, results) =>{
            if (err) {
                console.log(err);
                return;
            }
            if(!results) {
                return res.json({
                    succes: 0,
                    message: "Record not found"
                });
            }
            return res.json({
                success:1,
                message: "user deleted successfully"
            });
        });

       }
    };
      