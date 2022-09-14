const express = require('express'); // on importe express (voir server.js)
const path = require('path');
const app = express();
const server = require('http').Server(app);
const mongoSanitize = require("express-mongo-sanitize"); // npm install express-mongo-sanitize
const helmet = require("helmet");//permet de protéger les headers
require('dotenv').config(); //permet de manier des données sensibles de manières sécurisées

const SauceRoutes = require('./routes/sauce');
const userRoutes = require('./routes/User');
const mongoose = require('mongoose');

const { $where } = require('./models/sauce');
mongoose.connect(process.env.DB_KEY,
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));
  
app.use((req,res,next) => { // CORS signifie « Cross Origin Resource Sharing
  res.setHeader('Access-Control-Allow-Origin', '*'); // on autorise toutes les origines 
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization'); // on autorises certains headers
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS'); // on donne les methodes 
  next();
});
app.use(express.json());
app.use('/api/sauces', SauceRoutes);
app.use('/images', express.static(path.join(__dirname, 'images')));
app.use('/api/auth', userRoutes);
app.use(mongoSanitize());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
module.exports = app; // on exporte la constante pour qu'on puisse s'en servir partout

//SECURITY
//Dotenv / helmet / jswt / validation-input / 