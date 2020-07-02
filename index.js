const express = require('express');
const app = express();
const busyParser = require('body-parser')
var fs = require('fs');
var http = require('http');
require('dotenv').config();
const cors = require('cors');
const authentication = require('./middleware/authenticate');
const mongoose = require('mongoose');
const { MongoURL } = require('./config');

console.log(MongoURL);

//Role..........
//Normal User -> 0
//Admin -> 1
//Super Admin -> 2

//Database connection...
const connection = mongoose.connect(MongoURL, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true });
connection.then(success => {
    console.log("Database Connected")
}).catch(err => {
    console.log(err)
})

//Middleware for cors..
app.use(cors());

//Import Custom Routes...
const Auth = require('./routes/auth/auth');
const superUser = require('./routes/superUser/superUser');
const admin = require('./routes/admin/admin');
const Ulip = require('./routes/User/Ulip');
const cover = require('./routes/User/cover');
const life = require('./routes/User/life');
const occupation = require("./routes/User/occupation");
const risk = require('./routes/User/risk');
const health = require('./routes/User/health');
const meta = require('./routes/User/metaData');
const profile = require('./routes/User/profile');
const redis = require("redis");
//Import middleware..

const REDIS_PORT = process.env.PORT || 6379

// const client = redis.createClient(REDIS_PORT)
const client = redis.createClient('redis://effpv.netlify.com:6379');

app.use(busyParser.json())
app.use(busyParser.urlencoded({ extended: false }))


app.get('/', function (req, res, next) {
    res.sendFile(__dirname + '/index.html');
});


app.get('/ChacheClean/:tagId/:like', function (req, res) {
    var key = req.params.tagId;
    var like = req.params.like
    console.log("chal rha ha")

    if (key != "false") {
        res.send("Chache Clean  " + key +
            "<a href='/'>  GO Back </a>"
        );
        client.del(key)
    }
    else if (like != false) {
        console.log("chal rha ha like")
        client.keys('*', function (err, keys) {
            if (err) return console.log(err);
            console.log("KEYS", keys)
            if (keys.length > 0) {
                // like getDetailOccupat
                const matches = keys.filter(v => v.substring(0, like.length) == like)
                if (matches.length > 0) {
                    client.del(matches);
                    res.send("Chache Clean  " + like +
                        "<a href='/'>  GO Back </a>"
                    );
                }
            }
        })
        // client.del([]);
    }
})
// client.del(`${key}`)



// Start
// app.use('/auth', Auth);

// app.use((req, res, next) => {

//     console.log("API", res.socket._httpMessage.connection._httpMessage.socket._httpMessage.req.originalUrl)
//     if (req.headers.token) {
//         authentication(req, res, (isAuth) => {

//             if (!isAuth) {

// end

//All Auth User....
app.use('/ulip', Ulip);
app.use('/cover', cover);
app.use('/life', life);
app.use('/occupation', occupation);
app.use('/risk', risk);
app.use('/health', health);
app.use('/meta', meta)
app.use('/profile', profile);
// Start

// if (isAuth && (req.user.role === "1" || req.user.role === "2")) {

//     //Only Admin....
//     app.use('/admin', admin);

//     if (isAuth && req.user.role === "2") {

//         //Only Super User....
//         app.use('/superUser', superUser);
//         console.log("Auth", req.headers.token);
//     }
//                 }
//                 next();
//             } else {
//                 res.status(400).send({ message: "Unauthorized User" })
//             }
//         })
//     }
// })
// end

// let handleRequest = (request, response) => {
//     response.writeHead(200, {
//         'Content-Type': 'text/html'
//     });
//     fs.readFile('./index.html', null, function (error, data) {
//         if (error) {
//             response.writeHead(404);
//             respone.write('Whoops! File not found!');
//         } else {
//             response.write(data);
//         }
//         response.end();
//     });
// };

// http.createServer(handleRequest).listen(3000);




app.listen(process.env.SERVER_PORT, (err, success) => {
    console.log("Server Connected ");


});