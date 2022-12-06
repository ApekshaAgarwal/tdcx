const functions = require("firebase-functions");

const express = require('express')
const bodyParse = require('body-parser');
const cors = require('cors');
const PORT = 3000;
const app = express()
const mongo =  require('./db/mongo')
const appRouter = require('./routes')

const urlEncodedParser = bodyParse.urlencoded({extended:false});

app.use(cors());
app.use(express.json());
app.use(urlEncodedParser);
app.use(bodyParse.json());

app.use((req, res, next)=>{
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Authorization, Token");
    if (req.method === "OPTIONS") {
        res.header('Access-Control-Allow-Methods', "POST, GET");
        return res.status(200).json({});
    }
    next();
})

// Router Path
app.use('/', appRouter);


app.use('*', function (req, res, next) {
    res.status(404);
    res.json({
        'error': {
            'message': 'Page Not Found'
        }
    })
});


mongo.mongoConnection((connectData)=>{
    if (connectData.success) {
        app.listen(PORT, function () {
            console.log(`Server is up on ${PORT}`)
            global.mongoDB = connectData.client;
        })
    } else {
        console.log("Mongo Connection Error", connectData.error)
    }
})


exports.app = functions.https.onRequest(app)
