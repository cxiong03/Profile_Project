require('dotenv').config()
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDb...'))
    .catch(err => console.log('Could not connect to MongoDb, err'))

app.use(express.json())
// app.use(express.urlencoded({ extended: true}));
app.use(cors());
app.use('/', express.static('public'));

const profileRouters = require('./routes/profiles')
app.use('/profiles', profileRouters)

app.listen(3000,() => console.log('Server Started'));