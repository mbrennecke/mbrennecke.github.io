var links = [
	{
	link : "https://mbrennecke.github.io/Group-Project-1/", image : "beer-buddies.jpg", title : "Beer Bound", repo : "https://github.com/mbrennecke/Group-Project-1/"
	},{
	link : "https://lit-savannah-32423.herokuapp.com/", image : "pencilme.jpg", title : "Pencil Me In", repo : "https://github.com/mbrennecke/group-project-2/"
	},{
	link : "https://tranquil-retreat-98680.herokuapp.com/", image : "friend.jpg", title : "Friend Finder", repo : "https://github.com/mbrennecke/friend-finder/"
	},{
	link : "https://mbrennecke.github.io/TriviaGame/", image : "qa.jpg", title : "Trivia Game", repo : "https://github.com/mbrennecke/TriviaGame/"
	},{
	link : "https://mbrennecke.github.io/Giftastic/", image : "giftastic.jpg", title : "Giftastic", repo : "https://github.com/mbrennecke/Giftastic"
	},{
	link : "https://mbrennecke.github.io/unit-4-game/", image : "rpg.jpg", title : "Fantasy Card Game", repo : "https://github.com/mbrennecke/unit-4-game/"
	},{
	link : "https://drive.google.com/file/d/1z5EtFKRMxSQ0I-1UWc9Zl2MLrpBetu1N/view?usp=sharing", image : "liri.jpg", title : "Liri node app", repo : "https://github.com/mbrennecke/liri-node-app/"
	},{
	link : "https://tranquil-waters-40302.herokuapp.com/", image : "burgertime2.jpg", title : "Burgertime", repo : "https://github.com/mbrennecke/burgertime/"
	},{
	link : "https://dry-meadow-80045.herokuapp.com/", image : "burgertime.jpg", title : "Burgertime Sequelized", repo : "https://github.com/mbrennecke/sequelizedburger/"
	},{
	link : "https://mbrennecke.github.io/Word-Guess-Game/", image : "words.jpg", title : "Word Guess Game", repo : "https://github.com/mbrennecke/Word-Guess-Game/"
	},{
	link : "https://drive.google.com/file/d/1MmfniKQxQepnpFAppvSxRn1ONHO-XfGw/view?usp=sharing", image : "wordguess2.jpg", title : "Word Guess node app", repo : "https://github.com/mbrennecke/constructor-word-guess/"
	},{
	link : "https://mbrennecke.github.io/train-scheduler/", image : "train.jpg", title : "Train Schedule", repo : "https://github.com/mbrennecke/train-scheduler/"
	},{
	link : "https://drive.google.com/file/d/1nTF2r6afrNXTRzR_GVBle10L7ERjeBJk/view?usp=sharing", image : "bamazon.jpg", title : "Train Schedule", repo : "https://github.com/mbrennecke/bamazon/"
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
		
			var link = "";
			var row = '<div class="row">';
			var col = '<div class="col-sm">';
			var h2 = '<h2 class="portfolio-p">';
			
			for (var i=0; i<links.length; i++) {
				if (i%3 == 0){
					link += row;
				}
					link += col;
					link += '<a href="' + links[i].link + '" target="_blank"><img src="assets/images/';
					link += (links[i].image + '" alt="' + links[i].title + '" class="image img-responsive" /></a>');
					link += h2;
					link += ('<a href="' + links[i].link + '" target="_blank">' + links[i].title + '</a><br/>');
					link += ('<a href="' + links[i].repo + '" class="repo" target="_blank">-Github Repo-</a>');
					link += '</h2></div>';
				if (i == 2 || (i + 1)%3 == 0){
					link += '</div>'
				}	
				
			}
		$(".body-container").append(link);
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