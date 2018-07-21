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
	let openedCards	 = 	[];
		matchedCards = 	[];
		currentCard  = 	[];
		previouseCard= null ;
		moveCount = 0 ;
		var relod = document.getElementsByClassName ('restart');
		console.log (relod); 
		relod[0].addEventListener ('click', function (){
			location.reload();

		})
	console.log("It's loaded!")
	const cards = ['fa-diamond','fa-diamond', 'fa-paper-plane-o','fa-paper-plane-o', 'fa-anchor', 'fa-anchor', 'fa-bolt', 'fa-bolt', 'fa-cube', 'fa-cube', 'fa-leaf', 'fa-leaf', 'fa-bicycle', 'fa-bicycle',
	 'fa-bomb','fa-bomb' ]; 
	var shuffleCards = shuffle (cards);
	console.log (shuffleCards);
	let cardElements = document.getElementsByClassName('symbols');
	console.log (cardElements);
	for (i=0; i < cardElements.length; i++ ) {
		cardElements[i].className = shuffleCards[i]+ ' fa symbols';
	
	}

	// Click Event
	let displayCards = document.getElementsByClassName ('card');       
		console.log (displayCards);
		for (i=0; i < displayCards.length; i++) {
		displayCards[i].addEventListener('click', function () {
 		currentCard = this;
 		console.log (currentCard);
 		//previouseCard = openedCards[0];
 		moveCount++ ;
 		if ( moveCount === 21) {
 			var removeStar = document.getElementById('star3');
			removeStar.style.display = 'none';
 		}
 		currentCard.classList.add('open', 'show');

 		if (previouseCard) {
 			
 			
 			if (currentCard.innerHTML === previouseCard.innerHTML) {
 				currentCard.classList.add('match');
 				previouseCard.classList.add('match');
 				matchedCards.push(currentCard,previouseCard);
 				// resetting openedCards = [];
 				console.log ('match');
 				previouseCard = null ;
 				// check if won 
 				if (cards.length === matchedCards.length) {
 					//alert ('You have won the game') ;
 					if (confirm("You have won the game \nDo you want to play again")) {
    					txt = "You pressed OK!";
    					location.reload();
					} else {
    					txt = "You pressed Cancel!";
					}
 				}
 			
 			} else {
 				setTimeout (function(){
 					currentCard.classList.remove ('open', 'show');	
 					previouseCard.classList.remove ('open', 'show');
 					previouseCard = null ;
 				}, 500);
 				
 				
 				//resetting openedCards = [];

 			}

 		} else {
 			previouseCard = currentCard ;	
 			openedCards.push(this);	
 		}


 		
 	});

	}

	
 }
