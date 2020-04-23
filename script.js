$(function() {
	var p1Btn = $('#p1Btn');
	var p2Btn = $('#p2Btn');
	var resetBtn = $('#resetBtn');
	var displayScore = $('#displayScore');
	var numInput = $('input');
	var p1Score = 0;
	var p2Score = 0;
	var p1Display = $('#p1Display');
	var p2Display = $('#p1Display');
	var winningScore = 5;
	var gameOver = false;
	var con = $('.congratulation');

	// var p1Display = $('#p1Display').text();
	// var p2Display = $('#p2Display').text();
	p1Btn.on('click', function() {
		// console.log(p1Display, p1Score);
		if (!gameOver) {
			p1Score++;
			p1Display = $('#p1Display').text(p1Score);
			if (p1Score === winningScore) {
				p1Display.addClass('winner');
				gameOver = !gameOver;
				animatedBounce(p1Display);
			}
		}
	});
	p2Btn.on('click', function() {
		if (!gameOver) {
			p2Score++;
			p2Display = $('#p2Display').text(p2Score);
			if (p2Score === winningScore) {
				p2Display.addClass('winner');
				gameOver = !gameOver;
				animatedBounce(p2Display);
			}
		}
	});
	function animatedBounce(player) {
		$(player).addClass('animated flash');
		$(con).addClass('appear');
	}

	function reset() {
		// console.log(p1Score, p2Score);
		console.log(p1Display, p2Display);
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
		numInput.val('');
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
