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
	
	$(".body-container").empty();
	
	var link = "";
	var row = '<div class="row">';
	var col = '<div class="col-sm">';
	
	for (var i=0; i<links.length; i++) {
		link += row;
		for (var j=1; j<4; j++) {
			link += col;
			link += '<a href="' + 
		}
	}