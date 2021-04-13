// function changePicture(){
//   document.getElementById('img1').src="./image1_2.jpg";
// }

// dans la fonction on passe en paramètre (image) elle s'applique a tous
// les éléments du document déclenchés au survol de la souris
// la valeur src permet de traiter la variable de manière générique
// de cette façon, ici la fonction renvoie une source : qui concatène le chemin local
// de élément et + son id  et + l'extension qui est _2.jpeg
function changePicture(toto){
document.getElementById(toto).src = "./img/" + toto + "_2.jpg";
}

// function changePicture(test){
//  document.getElementById(test).src= test + '_2.jpg';
// }
