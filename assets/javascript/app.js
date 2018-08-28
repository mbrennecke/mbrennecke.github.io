$(document).ready(function() {
	

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDpr5S5eaKzkMFysw5-pp6yO9YKAbY6REw",
    authDomain: "portfolio-contacts-930d4.firebaseapp.com",
    databaseURL: "https://portfolio-contacts-930d4.firebaseio.com",
    projectId: "portfolio-contacts-930d4",
    storageBucket: "",
    messagingSenderId: "601663076640"
  };
  firebase.initializeApp(config);

	var database = firebase.database();


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
			case "contact":
				$(this).addClass("active");
				$("#contact-span").addClass("sr-only");
				$("#contact-span").text("(current)");
				contact();
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
		'<div class="col main">' +
		'<img src="assets/images/headshot.jpg" alt="Photo of Matthew Brennecke" id="headshot" class="img-responsive"/>' +
		'<p>I am working towards a career in full stack development, but enjoy the creativity of front end and the logic of backend design. Strong HTML, CSS, and Javascript/jQuery skills leveraged to make complex back end for clean front end applications in my portfolio. </p>' +
		'<p>I offer an educationally diverse background culminating in a Bachelors Degree in Computer Information Technology with a minor in Business Informatics.</p>' +
		'<p>My demonstrated work ethic, professional experience, strong attention to detail, and ability to produce top quality results in deadline driven environments will allow me to succeed in any organization. My years in technical support have given me a strong troubleshooting ability and determined tenacity that I am able to bring to bear on bug fixing and problem solving when developing an application.</p>' +
		'</div></div>'
		);
	}
	
	function portfolio() {
		$(".body-container").empty();
		$(".body-container").append(
		'<div class="row">' +
			'<div class="col-sm">' +
			'<a href="https://mbrennecke.github.io/Group-Project-1/" target="_blank"><img src="assets/images/beer-buddies.jpg" alt="Beer Bound" class="image img-responsive" /></a>' + 
			'<h2 class="portfolio-p">' +
			'<a href="https://mbrennecke.github.io/Group-Project-1/" target="_blank">Beer Bound</a>' + 
			'<br/>' +
			'<a href="https://github.com/mbrennecke/Group-Project-1" class="repo" target="_blank">-Github Repo-</a>' +
			'</h2></div>' +
			'<div class="col-sm">' +
			'<a href="https://mbrennecke.github.io/unit-4-game/" target="_blank"><img src="assets/images/rpg.jpg" alt="RPG game" class="image img-responsive" /></a>' +
			'<h2 class="portfolio-p">' +
			'<a href="https://mbrennecke.github.io/unit-4-game/" target="_blank">Fantasy Card Game</a>' +
			'<br/>' +
			'<a href="https://github.com/mbrennecke/unit-4-game" class="repo" target="_blank">-Github Repo-</a>' +
			'</h2></div>' +
			'<div class="col-sm">' +
			'<a href="https://github.com/mbrennecke/liri-node-app" target="_blank"><img src="assets/images/liri.jpg" alt="Liri cmd" class="image img-responsive" /></a>' +
			'<h2 class="portfolio-p">' +
			'<a href="https://github.com/mbrennecke/liri-node-app" target="_blank">Liri node app</a>' +
			'<br/>' +
			'<a href="https://github.com/mbrennecke/liri-node-app" class="repo" target="_blank">-Github Repo-</a>' +
			'</h2></div>' +
			'</div><div class="row">' +
			'<div class="col-sm">' + 
			'<a href="https://mbrennecke.github.io/TriviaGame/" target="_blank"><img src="assets/images/qa.jpg" alt="trivia game" class="image img-responsive" /></a>' +
			'<h2 class="portfolio-p">' + 
			'<a href="https://mbrennecke.github.io/TriviaGame/" target="_blank">Trivia Game</a>' +
			'<br/>' +
			'<a href="https://github.com/mbrennecke/TriviaGame" class="repo" target="_blank">-Github Repo-</a>' +
			'</h2>' + 
			'</div>	<div class="col-sm">' + 
			'<a href="https://mbrennecke.github.io/Giftastic/" target="_blank"><img src="assets/images/giftastic.jpg" alt="Giftastic" class="image img-responsive" /></a>' +
			'<h2 class="portfolio-p">' +
			'<a href="https://mbrennecke.github.io/Giftastic/" target="_blank">Giftastic</a>' +
			'<br/>' +
			'<a href="https://github.com/mbrennecke/Giftastic" class="repo" target="_blank">-Github Repo-</a>' +
			'</h2></div>' +
			'<div class="col-sm">' +
			'</div></div>' + 
			'<div class="row">' +
			'<div class="col-sm">' +
			'<a href="https://mbrennecke.github.io/train-scheduler/" target="_blank"><img src="assets/images/train.jpg" alt="model train" class="image img-responsive" /></a>' +
			'<h2 class="portfolio-p">' +
			'<a href="https://mbrennecke.github.io/train-scheduler/" target="_blank">Train Schedule</a>' +
			'<br/>' +
			'<a href="https://github.com/mbrennecke/train-scheduler" class="repo" target="_blank">-Github Repo-</a>' +
			'</h2></div>' +
			'<div class="col-sm">' +
			'<a href="https://mbrennecke.github.io/Word-Guess-Game/ target="_blank"><img src="assets/images/words.jpg" alt="words" class="image img-responsive" /></a>' +
			'<h2 class="portfolio-p">' + 
			'<a href="https://mbrennecke.github.io/Word-Guess-Game/ target="_blank">Word Guess Game</a>' + 
			'<br/>' +
			'<a href="https://github.com/mbrennecke/Word-Guess-Game" class="repo" target="_blank">-Github Repo-</a>' +
			'</h2></div>' + 
			'<div class="col-sm"></div></div>'
		
		);
	}
	
	function contact() {
		$(".body-container").empty();
		$(".body-container").append(
			'<div class="row">' +
			'<div class="col">' +
			'<h2>Contact</h2>' +
			'</div></div>' +
			'<div class="row">' +
			'<div class="col">' +
			'<form>' +
			 '<div class="form-group">' +
			'<label for="name">Name:</label>' +
			'<input type="text" class="form-control" id="name" placeholder="John Smith"></div>' +
			'<div class="form-group">' +
			'<label for="email">Email:</label>' +
			'<input type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="example@gmail.com"></div>' +
			'<div class="form-group">' +
			'<label for="message">Message:</label>' +
			'<textarea class="form-control" id="message" rows="5"></textarea></div>' +
			'<button type="submit" class="btn btn-primary" id="btn-submit">Submit</button>' +
			'</form></div></div>'
		);
	}
	
	$(document).on("click", "#btn-submit", function(event) {
		event.preventDefault();
		var name = $("#name").val();
		var email = $("#email").val();
		var message = $("#message").val();
		
		if (name == "" || email == "" || message == "" ) {
			return;
		}
		
		database.ref().push({
        name: name,
        email: email,
        message: message,
        dateAdded: firebase.database.ServerValue.TIMESTAMP,
    });
	$("#name").val("");
    $("#email").val("");
    $("#message").val("");
	});
	
	about();
});