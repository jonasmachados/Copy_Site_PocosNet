var imagensNews = ["img/propagandaNews1.png", "img/propagandaNews2.png", "img/propagandaNews3.png"];
var imagematualNews = 0;

function trocaimagemNews() {
 imagematualNews = (imagematualNews + 1) % 3;
document.querySelector('.imgPropagandaNews img'). src = imagensNews[imagematualNews];
}
setInterval(trocaimagemNews, 1500);