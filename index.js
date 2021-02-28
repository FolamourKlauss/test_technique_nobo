const express = require('express');
const app = express();
const PORT = 4242;


// Le router
const router = require('./app/router');

// branchement du router à notre application
app.use(router);

// lancement du serveur
app.listen(PORT,  () => {
    console.log(`Listening on ${PORT}`);
});