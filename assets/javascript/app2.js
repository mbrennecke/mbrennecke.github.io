var links = [
	{
	link : "https://jpmatlock.github.io/Beer-Bound-Brewery-Finder/", image : "beer-buddies.jpg", title : "Beer Bound", repo : "https://github.com/JPMatlock/Beer-Bound-Brewery-Finder"
	},{
	link : "https://pencil-me-in.herokuapp.com/", image : "pencilme.jpg", title : "Pencil Me In", repo : "https://github.com/mbrennecke/group-project-2/"
	},{
	link : "https://read-local.herokuapp.com/", image : "readlocal.jpg", title : "Read Local", repo : "https://github.com/bry-an/read-local"
	},{
	link : "https://tranquil-retreat-98680.herokuapp.com/", image : "friend.jpg", title : "Friend Finder", repo : "https://github.com/mbrennecke/friend-finder/"
	},{
	link : "https://limitless-forest-18976.herokuapp.com/", image : "wapo.jpg", title : "WaPo Scraped", repo : "https://github.com/mbrennecke/mongo-scrape"
	},{
	link : "https://romantic-heisenberg-36d08e.netlify.com/", image : "clicky.jpg", title : "Clicky", repo : "https://github.com/mbrennecke/clicky-game"
	},{
	link : "https://mbrennecke.github.io/TriviaGame/", image : "qa.jpg", title : "Trivia Game", repo : "https://github.com/mbrennecke/TriviaGame/"
	},{
	link : "https://mbrennecke.github.io/unit-4-game/", image : "rpg.jpg", title : "Fantasy Card Game", repo : "https://github.com/mbrennecke/unit-4-game/"
	},{
	link : "https://mbrennecke.github.io/Giftastic/", image : "giftastic.jpg", title : "Giftastic", repo : "https://github.com/mbrennecke/Giftastic"
	},{
	link : "https://dry-meadow-80045.herokuapp.com/", image : "burgertime.jpg", title : "Burgertime Sequelized", repo : "https://github.com/mbrennecke/sequelizedburger/"
	},{
	link : "https://tranquil-waters-40302.herokuapp.com/", image : "burgertime2.jpg", title : "Burgertime ORM", repo : "https://github.com/mbrennecke/burgertime"
	},{
	link : "https://mbrennecke.github.io/train-scheduler/", image : "train.jpg", title : "Train Scheduler", repo : "https://github.com/mbrennecke/train-scheduler"
	},{
	link : "https://drive.google.com/file/d/1z5EtFKRMxSQ0I-1UWc9Zl2MLrpBetu1N/view?usp=sharing", image : "liri.jpg", title : "Liri node app", repo : "https://github.com/mbrennecke/liri-node-app/"
	},{
	link : "https://drive.google.com/file/d/1nTF2r6afrNXTRzR_GVBle10L7ERjeBJk/view?usp=sharing", image : "bamazon.jpg", title : "Bamazon", repo : "https://github.com/mbrennecke/bamazon/"
	},{
	link : "https://drive.google.com/file/d/1MmfniKQxQepnpFAppvSxRn1ONHO-XfGw/view?usp=sharing", image : "wordguess2.jpg", title : "Word Guess node app", repo : "https://github.com/mbrennecke/constructor-word-guess/"
	},{
	link : "https://mbrennecke.github.io/Word-Guess-Game/", image : "words.jpg", title : "Word Guess Game", repo : "https://github.com/mbrennecke/Word-Guess-Game"
	}];

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
		event.preventDefault();
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
		`<div class="row">
		<div class="col">
		<h2>About Me</h2>
		</div></div>
		<div class="row">
		<div class="col main">
		<img src="assets/images/headshot.jpg" alt="Photo of Matthew Brennecke" id="headshot" class="img-responsive"/>
		<p>I am full stack developer, I enjoy the creativity of front end and the logic of backend design. I bring strong HTML, CSS, and Javascript, jQuery, node.js, element, and React knowledge, leveraged to make complex back end for clean front end applications.</p>

		<p>I have a Bachelor’s Degree in Computer Information Systems, with a minor in Business Informatics, as well as several technical certifications. When challenged with a stressful environment I am able to tap deep reserves and rise above.</p>

		<p>My years in technical support have given me a strong troubleshooting ability and determined tenacity that I am able to bring to bear on bug fixing and problem solving when developing an application.</p>
		</div></div>`
		);
	}
	
	function portfolio() {	
		$(".body-container").empty();
		
			var link = "";
			var row = '<div class="row">';
			var col = '<div class="col-sm">';
			var h2 = '<h2 class="portfolio-p">';
			
			for (var i=0; i<links.length; i++) {
				if (i%3 == 0){
					link += row;
				}
					link += col;
					link += `<a href= "${links[i].link}" target="_blank" rel="noopener"><img src="assets/images/`;
					link += `${links[i].image}" alt="${links[i].title}" class="image img-responsive" /></a>`;
					link += h2;
					link += `<a href="${links[i].link}" target="_blank">${links[i].title}</a><br/>`;
					link += `<a href="${links[i].repo}" class="repo" target="_blank">-Github Repo-</a>`;
					link += '</h2></div>';
				if (i == 2 || (i + 1)%3 == 0){
					link += '</div>'
				}	
				
			}
		$(".body-container").append(link);
	}

	function contact() {
		$(".body-container").empty();
		$(".body-container").append(
			`<div class="row">
			<div class="col">
			<h2>Contact</h2>
			</div></div>
			<div class="row">
			<div class="col">
			<form>
			<div class="form-group">
			<label for="name">Name:</label>
			<input type="text" class="form-control" id="name" placeholder="John Smith"></div>
			<div class="form-group">
			<label for="email">Email:</label>
			<input type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="example@gmail.com"></div>
			<div class="form-group">
			<label for="message">Message:</label>
			<textarea class="form-control" id="message" rows="5"></textarea></div>
			<button type="submit" class="btn btn-primary" id="btn-submit">Submit</button>
			</form></div></div>`
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
	$('#thankyou').modal();
	});
	
	about();
});	