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
			previouseCard= 0 ;
			moveCount = 0 ;
		var restart = document.getElementsByClassName ('restart');
			modal = document.getElementById('myModal');
			span = document.getElementsByClassName('close')[0];

			// console.log (restart); just to see if restart works
			restart[0].addEventListener ('click', function (){
				location.reload();

			})
		// console.log("It's loaded!") to check if this works
		const cards = ['fa-diamond','fa-diamond', 'fa-paper-plane-o','fa-paper-plane-o', 'fa-anchor', 'fa-anchor', 'fa-bolt', 'fa-bolt', 'fa-cube', 'fa-cube', 'fa-leaf', 'fa-leaf', 'fa-bicycle', 'fa-bicycle',
		 'fa-bomb','fa-bomb' ]; 
		var shuffleCards = shuffle (cards);
		// console.log (shuffleCards); to check if this works
		let cardElements = document.getElementsByClassName('symbols');
		// console.log (cardElements); to check if this works
		for (i=0; i < cardElements.length; i++ ) {
			cardElements[i].className = shuffleCards[i]+ ' fa symbols';
		
		}

		// initialising popup 

		function popup() {
	    				modal.style.display = "flex";
	    				document.getElementById('p1').innerHTML = 'You did it in '+ moveCount+ ' moves'  + ' and ' + seconds+ ' seconds.';
		}

		// Closing popup by clicking x
		span.onclick = function closeX () {
	    					modal.style.display = "none";
						}

		// function close popup by clicking any where
		window.onclick = function(event) {
	    					if (event.target == modal) {
	        					modal.style.display = "none";
	    					}
						}

		// Stopwatch initialisation
		let stopWatch = document.getElementById ('timer');
			time = 0;
			seconds=0
		
		// start time time
		function startTime () {
			time = setInterval ( function (){
				seconds++;
				stopWatch.innerHTML = seconds + ' s';
			}, 1000); 
		}

		// stop the time function
		function stopTime ()	{
			clearInterval (time);
		}
		
		let displayCards = document.getElementsByClassName ('card');       
			console.log (displayCards);

		// Click Event
		function cardClick () {
	 		currentCard = this;
	 		currentCard.removeEventListener ('click', cardClick); 
	 		console.log (currentCard);

	 		// updating move counts
	 		let countMoves = document.getElementById ('moves');

	 		moveCount++ ;
	 		countMoves.innerHTML= moveCount;
	 		console.log(countMoves);

	 		// star ranking;
	 		if ( moveCount === 20) {
	 			var removeStar = document.getElementById('star3');
				removeStar.style.display = 'none';
	 		} else if (moveCount ===30) {
	 			var removeStarTwo = document.getElementById ('star2');
	 			removeStarTwo.style.display = 'none';
	 			}

	 		// start  stopwatch at the first click.
	 		if ( moveCount ===1) {
	 			startTime ();
	 		}

	 		currentCard.classList.add('open', 'show');

	 		if (previouseCard) {
	 			
	 			// matching cards
	 			if (currentCard.innerHTML === previouseCard.innerHTML) {
	 				currentCard.classList.add('match');
	 				previouseCard.classList.add('match');
	 				matchedCards.push(currentCard,previouseCard);
	 				
	 				// console.log ('match'); this line here for just test purpose
	 				previouseCard = null ;

	 				// check if won 
	 				if (cards.length === matchedCards.length) {
	 					
	 					// stopping stopwatch 
	 						stopTime();

	 					// calling popup function 
	 						popup ();
							
	 				}
	 			
	 			} else {
	 				// when cards are not matched
	 				setTimeout (function(){
	 					currentCard.classList.remove ('open', 'show');	
	 					previouseCard.classList.remove ('open', 'show');
	 					currentCard.addEventListener ('click', cardClick);
	 					previouseCard.addEventListener ('click', cardClick);
	 					previouseCard = null ;
	 				}, 500);
	 				
	 			}

	 		} else {
	 			previouseCard = currentCard ;	
	 			openedCards.push(this);	
	 		}
		
	 	} 
	 		
	 		// event listener function 
	 	for (i=0; i < displayCards.length; i++) {
			displayCards[i].addEventListener('click', cardClick);

		}
		
	 }
