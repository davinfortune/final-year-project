var passport = require("passport"),
    bodyParser = require("body-parser"),
    LocalStrategy = require("passport-local"),
    passportLocalMongoose = require("passport-local-mongoose");
const mongoose = require('mongoose');

mongoose.connect('<yourdatabase>', {
    dbName: 'klepto',
    useNewUrlParser: true,
    useUnifiedTopology: true
}, err => err ? console.log(err) : 
    console.log('Connected to Klepto database'));
  
// Schema for users of app
const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    country: {
        type: String,
        required: true,
    },
    telephone: {
        type: String,
        required: true,
    },
});
const User = mongoose.model('users', UserSchema);
User.createIndexes();
var currentUser = null;
  
// For backend and express
const express = require('express');
const app = express();
const cors = require("cors");

console.log("App listen at port 5000");
app.use(express.json());
app.use(cors());
app.get("/dbtest", (req, resp) => {
  
    resp.send("App is Working");
    // You can check backend is working or not by 
    // entering http://localhost:3000/dbtest
      
    // If you see App is working means
    // backend working properly
});
  
app.post("/register", async (req, resp) => {
    try {
        const user = new User(req.body);
        let result = await user.save();
        result = result.toObject();
        if (result) {
            delete result.password;
            resp.send(req.body);
            console.log(result);
        } else {
            console.log("User is already registered");
        }
  
    } catch (e) {
        resp.send("Something Went Wrong");
    }
});

app.post('/login', (req,res) =>{
    var username = req.body.username;
    var password = req.body.password;

    User.findOne({username: username, password: password}, (err,user) => {
        if(err){
            console.log(err);
            return res.status(500).send();
        }

        if(!user){
            return res.status(404).send();
        }
        currentUser = user;
        return res.send(user);
    });
});

app.get('/currentUser', (req,res) =>{
    if(currentUser != null){
        return res.send(currentUser);
    } else {
        return res.send("no user");
    }
});


app.listen(5000);

