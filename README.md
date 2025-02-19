# Projet test_technique_nobo

Faire une application Express JS qui répond aux features suivantes :
* Faire un programme qui réponds à l’énoncé en Annexe 1
* Faire des tests unitaires qui permettent de tester le programme en Annexe 1 en lançant la
commande mocha
* Faire une route accessible à l’adresse: GET http://localhost:4242/api/p1 avec les paramètres de l’url
qui sont les entrées de la fonction
* **Bonus 2**: Faire les 3 points précédents pour le programme en Annexe 2

*Vous pouvez laisser votre imagination proposer d’autres features, à condition que ces dernières soient
évidemment fonctionnelles.*

# Rendu

Le rendu doit se faire dans ces exactes conditions:
* Le rendu doit se trouver sur un repo github privé
* Le rendu doit être partagé avec nobo-dev
* Le rendu une fois téléchargé doit pouvoir se lancer avec les commandes suivantes: npm install &&
npm start

**ATTENTION**: Tout rendu qui ne répond pas à ces conditions ne sera pas étudié. Tout projet qui ne répond
pas aux conditions de la section “Projet” ne sera pas retenu.


## Test des programme P1 et P2

Dans le terminal :

mocha

Cette commande lancera les scénarios de tests suivants :
- p1Test.js pour le programme P1
- p2Test.js pour le programme P2

### Règle du programme P1:
* Je prends en entrée une chaîne de caractère et un nombre entre 0 et 20
* Mes entrées sont toutes obligatoires
 Mes entrées se nomment str et nbr
* Je donne en sortie le résultat de la division entre la longueur de ma chaîne de caractère et mon
nombre

#### INFORMATIONS SUR LE PROGRAMME P1
* Fonction noboDivision() dans test_technique_nobo/app/functionDivision.js
* Route http://localhost:4242/api/p1/**ChaineDeCaractère**/**NombreEntre0et20Inclus**

##### CODES ERREURS PROGRAMME P1
* 500 : Valeur second paramètre n'est pas un nombre
* 501 : Valeur second paramètre Non compris entre 0 et 20

### Règle du programme P2:
* Je prends en entrée une date de début et une date de fin
* La date de début est obligatoire
* Mes entrées se nomment date_start et date_end
* Je donne en sortie le nombre de jour entre le 1er jour du mois de la date de début et la date de
début + le nombre de jour entre le dernier jour du mois de la date de fin et la date de fin
Exemple: entrées: date_start = “2020-06-10”, date_end = “2020-07-25”, sortie: 15 jours

#### INFORMATIONS SUR LE PROGRAMME P2

* Fonction dateDifference() dans test_technique_nobo/app/functionDate.js
* 2 Routes : 
http://localhost:4242/api/p2/**{dateDeDepart}**/**{dateDeFin}**
http://localhost:4242/api/p2/**{dateDeDepart}**

##### CODES ERREURS PROGRAMME P2
* 504 : Format YYYY-MM-DD non respecté pour le premier paramètre
* 505 : Format YYYY-MM-DD non respecté pour le seconde paramètre

