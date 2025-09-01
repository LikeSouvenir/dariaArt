import express from "express";
import * as db from "./db.js";

const app = express()

app.use(express.json())
app.use(function (req, res, next) {
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
        res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers', 'application/json');
        next();
    }
)

app.get('/', (req, res) => {
    db.check()
        .then(response => {
            console.log("response is work, file = index.html");
            res.status(200).send(response + "index.js");
        })
        .catch(error => {
            console.log("error isn't work, file = index.html");
            res.status(500).send(error);
        })
})

app.post('/getExamples', (req, res) => {
    db.getExamples(req.body.email).then((result) => {
        // console.log(typeof(result));
        res.status(200).send(result);
    }).catch(error => {
        console.log("error isn't work, file = index.html : " + error);
        res.status(500).send("error - bad email");
    });
})

app.listen(process.env.PORT, () => {
    console.log(`App running on the port ${process.env.PORT}.`)
})