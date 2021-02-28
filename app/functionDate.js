

//importation de Dayjs pour la gestion des dates
const dayjs = require('dayjs');
//import dayjs from 'dayjs' // ES 2015
dayjs().format()

//Fonction de vérification et des opérations avec les dates en paramètres de l'url (programme P2)
function dateDifference(req, res) {

    //Verification que le format entré est bien une date de type YYYY-MM-DD
    const dateReg = /^\d{4}([-])\d{2}\1\d{2}$/;

    if (req.params.date_start.match(dateReg)) {
        var date_start = req.params.date_start;
        console.log(date_start);
        //Récupération du 1er jour du mois par transformation des deux derniers chiffres
        let firstDayOfTheMonth = `${date_start.substring(0, date_start.length - 2)}` + `01`;
        console.log(firstDayOfTheMonth);

        //Conversion des dates format dayjs
        date_start = dayjs(date_start);
        firstDayOfTheMonth = dayjs(firstDayOfTheMonth);

        // donne la différence du 1er jour du mois à date_start en nombre de jours
        const numberOfdaysFromStart = Number(date_start.diff(firstDayOfTheMonth, 'day')); 
        console.log(`nombre de jours entre date_start et premier jour du mois = ${numberOfdaysFromStart}`)

        if (req.params.date_end) {
            if (req.params.date_end.match(dateReg)) {
                var date_end = req.params.date_end;
                console.log(date_end);
                //Récupération du nombre de jours dans le mois pour la date de fin
                const date_endDaysInMonth = String(dayjs(date_end).daysInMonth());

                //Récupération du dernier jour du mois par transformation des deux derniers chiffres
                let lastDayOfTheMonth = `${date_end.substring(0, date_end.length - 2)}` + date_endDaysInMonth;
                console.log(lastDayOfTheMonth);

                //Conversion des dates format dayjs
                date_end = dayjs(date_end);
                lastDayOfTheMonth = dayjs(lastDayOfTheMonth);

                // donne le nombre de jours entre date_end et le dernier jour du mois de date_end
                const numberOfdaysFromEnd = Number(lastDayOfTheMonth.diff(date_end, 'day'));
                console.log(`nombre de jours entre date_end et dernier jour du mois = ${numberOfdaysFromEnd}`);

                // Addition des deux différentiels trouvés

                const result = numberOfdaysFromStart + numberOfdaysFromEnd;

                console.log(`Voici le résultat ${result}`)

                res.send(`Voici le résultat en ayant date_start et date_end en paramètre ${result}`);

            } else {
                //Cas où format YYYY-MM-DD non respecté pour le second paramètre date_end
                console.error('Format YYYY-MM-DD non respecté');
                res.status(505).send(`La valeur rentrée en second paramètre (date de fin) ${req.params.date_end} n'est pas au format attendue YYYY-MM-DD`)
            }

        } else {

            res.send(`Voici le résultat avec uniquement date_start ${numberOfdaysFromStart}`);

        }
    } else {

        console.error('Format YYYY-MM-DD non respecté');
        res.status(504).send(`La valeur rentrée ${req.params.date_start} n'est pas au format attendue YYYY-MM-DD`)
    };
    
    
};

module.exports = dateDifference;