
	game = new Game();
	
	$('body').keydown(function(e) {
		if (e.keyCode == 38) {
			game.move("up")};
			 //doesn't work yet
		if (e.keyCode == 40) {
			game.move("down")};
		if (e.keyCode == 37) {
			game.move("left")};
		if (e.keyCode == 39) {
			game.move("right")} ;
	});

	var button = $("button")
	
	button.click(function() {
		game = new Game();
	});

	button.mouseover(function() {
		button.addClass("animated jello")
	});
	button.mouseout(function() {
		button.removeClass("animated jello")
	})



 