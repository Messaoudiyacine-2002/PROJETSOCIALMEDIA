const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const cors = require("cors");
require("dotenv").config();
//const AuthRoute = require("./Routes/AuthRoute.js");
//const UserRoute = require("./Routes/UserRoute.js");
//const PostRoute = require("./Routes/PostRoute.js");

//const social=require("./Routes/index")
require("./config/db").connect();
// Routes

const app = express();

// routes
const AuthRoute = require("./controllers/AuthController");
const UserRoute = require("./controllers/UserController");
const PostRoute = require("./controllers/PostController");
const UploadRoute= require ("./routes/UploadRoute.js");
const ChatRoute= require ("./controllers/ChatController");
const MessageRoute= require ("./controllers/MessageController");



// middleware
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
// to serve images inside public folder
app.use(express.static('public')); 
app.use('/images', express.static('images'));


dotenv.config();


app.use('/auth', AuthRoute);
app.use('/user', UserRoute)
app.use('/posts', PostRoute)
app.use('/upload', UploadRoute)
app.use('/chat', ChatRoute)
app.use('/message', MessageRoute)

app.listen(process.env.PORT, () =>
  console.log(`Listening at ${process.env.PORT}`)
)  

