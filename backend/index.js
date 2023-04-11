const express = require("express")
const app = express()
const mongoose = require("mongoose")
const dotenv = require("dotenv")
var cors = require("cors");

app.use(express.json())


const authRoute = require("./routes/auth")

dotenv.config()

mongoose.connect(process.env.MONGO_URL,
    { useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(()=>console.log("DB connection success"))
    .catch((err)=> console.log(err))


app.use("/api/auth", authRoute);

app.listen(5000,()=>{
    console.log("backend server is up")
})