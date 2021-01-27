# installation de Babel ES 6,7,8
* vérifier la version node js et npm
puis 
* npm init
* npm install --save-dev babel-cli babel-preset-env

* Ajouter dans le jSon la ligne de code qui suit : 
"build": "babel --no-babelrc src -w -d js --preset=env"

* Puis cibler le dossier "SRC" et commande :npm run build

* Nota bene : pour installer le CLI faire d'abord npm init pour le package.json

**Javascript**