//load dotenv file for enviroment variables
import dotenv from 'dotenv';
dotenv.config();
//load express for http requests
import express from 'express';
import Router from './routes'; 

const app: express.Application = express();
const PORT = process.env.PORT || 5000;

//favicon middleware
app.get('/favicon.ico', (req, res) => {
    res.sendFile(__dirname + '/favicon.ico')
});

//CORS middleware 
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, x-backspan-token, Content-Type, Accept');

    next();
})

// Body parser middleware 
app.use(express.json());
app.use(express.urlencoded({ extended: true }))


//Use the routes that we defined in the ./routes.js file
app.use('/', Router)

app.options('*', (req, res) => {
    res.status(400).json({ error: "Route not found" })
});

app.all('*', (req, res) => {
    res.status(404).json({ error: "Route not found" })
});


var server = app.listen(PORT, () => { console.log("Example app listening at port %s", PORT) })