import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";


const app = express();

app.use(bodyParser.json({limit: "30mb", extended: true})); // set image post user is 30mb max
app.use(bodyParser.urlencoded({limit: "30mb", extended: true})); // set image post user is 30mb max
app.use(cors());

// CONNECTION INTO MONGODB
const CONNECTION_URL = 'mongodb+srv://Rendaks_:Rendi2001@cluster0.yy5k4id.mongodb.net/?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true});