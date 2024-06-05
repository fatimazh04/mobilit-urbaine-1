const bodyParser = require("body-parser")
const express = require("express")
const { default: mongoose } = require("mongoose")
const app=express()
const path=require("path")


app.use(bodyParser.json())
app.use(express.static('public'))
app.use(bodyParser.urlencoded({
    extended:true
}))

mongoose.connect('mongodb://localhost:27017/mydb',{
    useNewUrLParser: true,
    useUnifiedTopoLogy:true
});

var db = mongoose.connection;

db.on('error',()=>console.log("Error in connecting in database"));
db.once('open',()=>console.log("Connected to database"));

app.post("/signup",(req,res)=>{
    var name = req.body.name;
    var email = req.body.email;
    var dateN = req.body.dateN;
    var password = req.body.password;

    var data = {
        "name": name,
        "email": email,
        "dateN": dateN,
        "password": password
    }

    db.collection('users').insertOne(data,(err,collection)=>{
        if(err){
            throw err;
        }
        console.log("Record inserted sucessfully");
    })

    return res.redirect('signin.html')
})

app.get("/",(req,res)=>{
    res.set({
        "Allow-acces-Allow-Origin": '*'
    })
    return res.redirect("home.html")
}).listen(3000)

console.log("port connected");
