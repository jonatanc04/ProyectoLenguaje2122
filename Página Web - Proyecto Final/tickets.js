import {getMovies} from './firebase.js';

var films;

await getMovies().then(function(value) { films = value; });
const imgFilm = document.getElementById('cartel');
const priceFilm = document.getElementById('price') 
imgFilm.src = films[0].url;
priceFilm.src = films[0].price;

console.log(priceFilm.src);