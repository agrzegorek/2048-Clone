$(document).ready(function() {
	game = new Game();
	cells = Array.prototype.slice.call($(".game_board").children());
	
	$('body').keydown(function(e) {
		if (e.keyCode == 38) {
			game.move("up")};
			applyAnimation(cells);
			// if($(".cell").data("number") != 0) {
			// 	$(".cell").addClass("animated bounceInUp")
			// };
			
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

});

