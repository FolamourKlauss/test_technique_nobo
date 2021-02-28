//Fonction de vérification et de division utilisant les paramètres de l'url en entrée (programme P1)

function noboDivision (req, res) {
    const str = req.params.str;
    let nbr = req.params.nbr;

// Test verification que la valeur entrée est bien un nombre puis conversion de la valeur en type integer
    if (isNaN(nbr)) {
        res.status(500).send(`Attention la valeur ${nbr} que vous avez entré en second paramètre de l'url n'est pas un nombre`);
       
    } else {
        nbr = Number(nbr); // conversion de la valeur en type number
        if (nbr >= 0 && nbr <=20) {

            console.log(`Super la valeur ${nbr} est bien comprise entre 0 et 20`);

            const strLength = str.length; // obtention du nombre de caractères
            const result = strLength / nbr; //division longueur chaine de caracteres / nombre en entrée
            
            console.log(`Super ! Voici le résultat de la division entre le nombre de caractères compris venant de votre mot ${str} et votre nombre ${nbr} : (${strLength}) / (${nbr}) = ${result}`);

            res.send(`Super ! Voici le résultat de la division entre le nombre de caractères compris venant de votre mot ${str} et votre nombre ${nbr} : (${strLength}) / (${nbr}) = ${result}`);

        } else {
            res.status(501).send(`Dommage la valeur ${nbr} n'est pas comprise entre 0 et 20`);

        }
    }
}

module.exports = noboDivision;
