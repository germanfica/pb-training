// Crear Pakimanes
var cauchin = new Pakiman("Cauchin", 100, 80);
cauchin.cargarImagen("images/vaca.png");
cauchin.mostrar();

var pokacho = new Pakiman("Pokacho", 80, 50);
pokacho.cargarImagen("images/pollo.png");
pokacho.mostrar();

var ceuro = new Pakiman("Ceuro", 120, 40);
ceuro.cargarImagen("images/cerdo.png");

console.log(cauchin, pokacho, ceuro);
