const express = require('express');

//Importation de nos fonctions pour nos programmes P1 et P2
//P1
const noboDivision = require('./functionDivision');

//P2
const dateDifference = require('./functionDate');

// Création du router

const router = express.Router();

// La page d'accueil (test)
router.get('/', function (req, res) {
    console.log('Hello World et Hello Nobo');
    res.send('Hello World et Hello Nobo');
});

// Route pour le programme 'P1' avec récupérations des paramatres chaine de caracteres str et nombre nbr en entrée
router.get('/api/p1/:str/:nbr', noboDivision);

// Routes pour le programme 'P2'
router.get('/api/p2/:date_start', dateDifference);
router.get('/api/p2/:date_start/:date_end', dateDifference);

module.exports = router;