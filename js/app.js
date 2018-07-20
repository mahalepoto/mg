// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}



window.onload = function () { 
	console.log("It's loaded!")
	const cards = ['fa-diamond','fa-diamond', 'fa-paper-plane-o','fa-paper-plane-o', 'fa-anchor', 'fa-anchor', 'fa-bolt', 'fa-bolt', 'fa-cube', 'fa-cube', 'fa-leaf', 'fa-leaf', 'fa-bicycle', 'fa-bicycle',
	 'fa-bomb','fa-bomb' ]; 
	var shuffleCards = shuffle (cards);
	console.log (shuffleCards);
	var cardElements = document.getElementsByClassName('symbols');
	console.log (cardElements);
	for (i=0; i < cardElements.length; i++ ) {
		cardElements[i].className = shuffleCards[i]+ ' fa symbols';
	}
}
