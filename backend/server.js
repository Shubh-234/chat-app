const express = require("express");
const dotenv = require("dotenv");

const authRoutes = require('./routes/authRoutes')
dotenv.config();
const PORT = process.env.PORT;


const app = express();

app.get('/',(req,res)=> {
    res.send("Hello there");
})

app.use('/api/auth',authRoutes);

//checking commit 
app.listen(PORT,()=> console.log(`Server is running on port ${PORT}`));