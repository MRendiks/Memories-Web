
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from './routes/posts.js';

const app = express();

app.use(bodyParser.json({limit: "30mb", extended: true})); // set image post user is 30mb max
app.use(bodyParser.urlencoded({limit: "30mb", extended: true})); // set image post user is 30mb max
app.use(cors());

// CONNECTION INTO MONGODB
const CONNECTION_URL = 'mongodb+srv://Rendaks_:Rendi2001@cluster0.yy5k4id.mongodb.net/?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

// tanda () adalah function di NODE.js

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));

mongoose.set('useFindAndModify', false);