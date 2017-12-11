$(document).ready(function() {
	game = new Game();
	
	$('body').keydown(function(e) {
		if (e.keyCode == 38) {
			game.move("up")};
		if (e.keyCode == 40) {
			game.move("down")};
		if (e.keyCode == 37) {
			game.move("left")};
		if (e.keyCode == 39) {
			game.move("right")} ;
	});

	
	$(".restart").click(function() {
		game = new Game();
	});

});
