# PROJET 14 - Faites passer une librairie jQuery vers React

## Clonage depuis le GitHub
` https://github.com/Litibe/React__OCR_P14-HRNet.git `

!! PENSEZ BIEN A BASCULER SUR LA BRANCHE 'REACT' !!
La branche master est simplement le fork depuis le projet d'OCR

## LANCEMENT DES PROJETS
### Lancement projet JQuey
Pour lancer le projet JQuery: installer l'extension LiveServer dans visual studio code

Nom : Live Server
ID : ritwickdey.LiveServer
Description : Launch a development local Server with live reload feature for static & dynamic pages
Version : 5.7.9
Serveur de publication : Ritwick Dey
Lien de la Place de marché pour VS : https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer

Puis lancer le live server. Le chargement ouvrivra l'ancienne version HRnet sur le port 5500
`http://localhost:5500 `

### Lancement projet React
Vous devez avoir au préalable NodeJs sur votre machine (https://nodejs.org/en/download/) et git (https://git-scm.com/downloads)
Ouvrer un terminal dans le dossier de votre choix
Ensuite : 
`git clone https://github.com/Litibe/React__OCR_P14-HRNet.git` pour cloner

`cd React__OCR_P14-HRNet` pour aller dans le dossier du projet

`git checkout react` pour aller sur la branche contenant le projet sous React.

` npm i ` pour installer les dépendances nécesssaires au dossier (uniquement pour le fonctionnement de réact, pas de librairie extérieur utilisée)

` npm start ` pour lancer react en serveur de développement sur `http://localhost:3000 `.

`npm run build` pour réaliser le serveur de production puis ` serve -s build` pour le lancer sur  `http://localhost:3000 `.

### Modification des DATAS
Est présents dans le dossier public, un dossier Data permettant l'intégration de données dans les DropDown Menu et un fichier json d'exemple pour importer des données dans le tableau.