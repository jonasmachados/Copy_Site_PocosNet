var imagensNews2 = ["img/propagandaNews4.png", "img/propagandaNews5.png"];
var imagematualNews2 = 0;

function trocaimagemNews2() {
 imagematualNews2 = (imagematualNews2 + 1) % 2;
document.querySelector('.imgPropagandaNews2 img'). src = imagensNews2[imagematualNews2];
}
setInterval(trocaimagemNews2, 1500);