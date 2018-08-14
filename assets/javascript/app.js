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
		'<div class="row"><div class="col"><h2>About Me</h2></div></div><div class="row"><div class="col"><img src="assets/images/headshot.jpg" alt="Photo of Matthew Brennecke" id="headshot" class="img-responsive"/><p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>	<p>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p></div></div>'
		)
	}
	
	function portfolio() {
		$(".body-container").empty();
		$(".body-container").append(
		'<div class="row"><div class="col-sm"><img src="assets/images/words.jpg" alt="words" class="image img-responsive" /><h2 class="portfolio-p"><a href="https://mbrennecke.github.io/Word-Guess-Game/">Word Guess Game</a></h2></div>	<div class="col-sm"><img src="assets/images/rpg.jpg" alt="RPG game" class="image img-responsive" />	<h2 class="portfolio-p"><a href="https://mbrennecke.github.io/unit-4-game/">Fantasy Card Game</a></h2></div>			<div class="col-sm"></div></div><div class="row"><div class="col-sm"><img src="assets/images/qa.jpg" alt="trivia game" class="image img-responsive" /><h2 class="portfolio-p"><a href="https://mbrennecke.github.io/TriviaGame/">Trivia Game</a></h2></div>	<div class="col-sm"><img src="assets/images/rutgers.jpg" alt="Rutgers info widget" class="image img-responsive" /><h2 class="portfolio-p"><a href="#">Rutgers info widget</a></h2></div>	<div class="col-sm"></div></div><div class="row">	<div class="col-sm"><img src="assets/images/rock-paper-scissors.jpg" alt="rock paper scissors" class="image img-responsive" /><h2 class="portfolio-p"><a href="#">Rock Paper Scissors</a></h2></div><div class="col-sm"></div><div class="col-sm"></div></div>'
		
		)
	}
	about();
});