const express = require('express');

// Création du router

const router = express.Router();

// La page d'accueil (test)
router.get('/', function (req, res) {
    res.send('Hello World et Hello Nobo')
});

// Routes pour le programme 'P1' avec récupérations des paramatres chaine de caracteres str et nombre nbr en entrée
router.get('/api/p1/:str/:nbr', function (req, res) {
    const str = req.params.str;
    const nbr = Number(req.params.nbr);
    res.send(`Salut ${str} et Hello nombre ${nbr}`)
});
// Routes pour le programme 'P2'
router.get('/api/p2/:date_start/:date_end', function (req, res) {
    const date_start = req.params.date_start;
    const date_end = req.params.date_end;
    res.send(`Salut ${date_start} et Hello date de fin ${date_end}`)
});

module.exports = router;