const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://mongo:27017/kingdoms", { useNewUrlParser: true });

app.get('/', (req, res) => res.send('Begin of Kingdoms War API Running'));

app.use('/users', require('./routes/users'));

app.listen(4000, () => console.log('Server running on port 4000'));
