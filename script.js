// new branch named test
$(function() {
	var p1Btn = $('#p1Btn');
	var p2Btn = $('#p2Btn');
	var resetBtn = $('#resetBtn');
	var displayScore = $('#displayScore');
	var numInput = $('input');
	var p1Score = 0;
	var p2Score = 0;
	var p1Display = $('#p1Display');
	var p2Display = $('#p2Display');
	var winningScore = 5;
	var gameOver = false;
	var con = $('.congratulation');
	var main = $('#main');

	function scoreAdder(pScore, pDisplay) {
		return function() {
			console.log(pScore);
			if (!gameOver) {
				pScore++;
				pDisplay = pDisplay.text(pScore);
				if (pScore === winningScore) {
					pDisplay.addClass('winner');
					gameOver = !gameOver;
					animatedBounce(pDisplay);
				}
			}
			scoreReset();
		};
		// create another reset function is scoreAdder
		function scoreReset() {
			pScore === 5 ? (pScore = 0) : 0;
			// if (pScore === 5) {
			// 	pScore = 0;
			// }
		}
	}
	// bug...
	p1Btn.on('click', scoreAdder(p1Score, p1Display));
	p2Btn.on('click', scoreAdder(p2Score, p2Display));
	function animatedBounce(player) {
		$(player).addClass('animated flash');
		$(con).addClass('appear');
	}
	// move reset into scoreAdder?
	function reset() {
		p1Score = 0;
		p2Score = 0;
		p1Display.text(0);
		p2Display.text(0);
		p1Display.removeClass('winner');
		p2Display.removeClass('winner');
		con.removeClass('appear');
		if (gameOver) {
			gameOver = !gameOver;
		}
	}
	resetBtn.on('click', function() {
		reset();
	});
	numInput.on('change', function() {
		displayScore.text(numInput.val());
		winningScore = Number(numInput.val());
		reset();
	});
});
