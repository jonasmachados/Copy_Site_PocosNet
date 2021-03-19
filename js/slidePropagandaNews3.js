var imagensNews3 = ["img/propagandaNews6.png", "img/propagandaNews7.png", "img/propagandaNews8.png"];
var imagematualNews3 = 0;

function trocaimagemNews3() {
 imagematualNews3 = (imagematualNews3 + 1) % 3;
document.querySelector('.imgPropagandaNews3 img'). src = imagensNews3[imagematualNews3];
}
setInterval(trocaimagemNews3, 1500);