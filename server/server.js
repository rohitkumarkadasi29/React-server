const express = require ("express");
const mongoose = require ("mongoose");
const bodyParser = require ("body-parser");
const passport = require("passport");
const cors = require('cors');


const users = require("./Routes/Api/user");

const app = express() ;


app.use(cors())

// Bodyparser middleware
app.use(
    bodyParser.urlencoded({
        extended: false
    })
);

app.use(bodyParser.json());

// DB Config
const db = require("./config/keys").mongoURI ;

// Connect to MongoDB
mongoose.connect(
    db,
    { useNewUrlParser: true }
)
.then(() => console.log("mongoDB successfully connected"))
.catch(err => console.log(err));

//Password middleware
app.use(passport.initialize());

//passport config
require("./config/passport") (passport) ;

//route
app.use("/api/users", users);

const port = process.env.PORT || 5000 ;     // process.env.port is Heroku's port if you choose to deploy the app there

app.listen(port, () => console.log(`server up and running on port ${port} !`));



