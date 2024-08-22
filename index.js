const express = require('express');
const app=express();
require('dotenv').config()
const port=process.env.PORT||5000
const connection=require('./config/database.js')
const schoolRoute=require('./routes/school.js')

app.use(express.json());
app.use('/api/v1',schoolRoute)

connection.query('SELECT 1',function (err) {
   if(err) throw err;
   console.log('Connected');
   app.listen(port,console.log("Server is running"))
 }
);


