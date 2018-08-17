$(document).ready(function() {

//Event listner for nav links
	$(".nav-item").on("click", function(event) {
		var clicked = event.target.id;
		var addToA = $(this);
		var addToSpan;
		$(".sr-only").text("")
		$("a").removeClass("active");
		$("span").removeClass("sr-only");
		$("#data-view").empty();
		
		switch(clicked) {
			case "about":
				$(this).addClass("active");
				$("#about-span").addClass("sr-only");
				$("#about-span").text("(current)");
				about();
				break;
			case "portfolio":
				$(this).addClass("active");
				$("#portfolio-span").addClass("sr-only");
				$("#portfolio-span").text("(current)");
				portfolio();
				break;
			default:
				break;
		}
	});
	
	function about() {
		$(".body-container").empty();
		$(".body-container").append(
		'<div class="row">' + 
		'<div class="col">' +
		'<h2>About Me</h2>' + 
		'</div></div>' +
		'<div class="row">' +
		'<div class="col">' +
		'<img src="assets/images/headshot.jpg" alt="Photo of Matthew Brennecke" id="headshot" class="img-responsive"/>' +
		'<p>I am working towards a career in full stack development, but enjoy the creativity of front end and the logic of backend design. Strong HTML, CSS, and Javascript/jQuery skills leveraged to make complex back end for clean front end applications in my portfolio. </p>' +
		'<p>I bring a Bachelor’s Degree in Computer Information Systems as well as several technical certifications. When challenged with a stressful environment I am able to tap deep reserves and rise above.</p>' +
		'<p>My years in technical support have given me a strong troubleshooting ability and determined tenacity that I am able to bring to bear on bug fixing and problem solving when developing an application. </p>' +
		'</div></div>'
		)
	}
	
	function portfolio() {
		$(".body-container").empty();
		$(".body-container").append(
		'<div class="row">' +
			'<div class="col-sm">' +
			'<img src="assets/images/words.jpg" alt="words" class="image img-responsive" />' +
			'<h2 class="portfolio-p">' + 
			'<a href="https://mbrennecke.github.io/Word-Guess-Game/">Word Guess Game</a>' + 
			'</h2></div>' +
			'<div class="col-sm">' +
			'<img src="assets/images/rpg.jpg" alt="RPG game" class="image img-responsive" />' +
			'<h2 class="portfolio-p">' +
			'<a href="https://mbrennecke.github.io/unit-4-game/">Fantasy Card Game</a>' + 
			'</h2></div>' +
			'<div class="col-sm"></div>' +
			'</div><div class="row">' +
			'<div class="col-sm">' + 
			'<img src="assets/images/qa.jpg" alt="trivia game" class="image img-responsive" />' + 
			'<h2 class="portfolio-p">' + 
			'<a href="https://mbrennecke.github.io/TriviaGame/">Trivia Game</a></h2>' + 
			'</div>	<div class="col-sm">' + 
			'<img src="assets/images/giftastic.jpg" alt="Giftastic" class="image img-responsive" />' +
			'<h2 class="portfolio-p">' +
			'<a href="https://mbrennecke.github.io/Giftastic/">Giftastic</a>' +
			'</h2></div>' +
			'<div class="col-sm">' +
			'</div></div>' + 
			'<div class="row">' +
			'<div class="col-sm">' +
			'<img src="assets/images/train.jpg" alt="model train" class="image img-responsive" />' +
			'<h2 class="portfolio-p">' +
			'<a href="https://mbrennecke.github.io/train-scheduler/">Train Schedule</a>' +
			'</h2></div>' +
			'<div class="col-sm">' +
			'<img src="assets/images/rock-paper-scissors.jpg" alt="rock paper scissors" class="image img-responsive" />' +
			'<h2 class="portfolio-p">' +
			'<a href="#">Rock Paper Scissors</a>' + 
			'</h2></div>' + 
			'<div class="col-sm"></div></div>'
		
		)
	}
	about();
});