require("dotenv").config();
const express = require('express');
var conn = require('./config/connect');
app = express();
const userRouter = require('./user/user.router');

app.use(express.json());

app.use("/Backend/user", userRouter);
conn.connect(function(err){
    if(err) throw err;
    console.log('database connected!');
})
app.listen(process.env.APP_PORT,()=>{
    console.log("port is running on PORT: ", process.env.APP_PORT);
});

