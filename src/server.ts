import express from 'express';
import bodyParser from 'body-parser';
import methodOverride from 'method-override';
import mongoose from 'mongoose';
import { Mongo } from './database';

require('paint-console');

const mongo = new Mongo();
mongo.dbConnect();

const app: express.Application = express();
const router: express.Router = express();

app.use(methodOverride());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(3000, () => {
  console.log('App is listening on port 3000!');
});
