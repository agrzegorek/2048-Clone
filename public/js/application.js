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

$(document).on("swipeleft", function() {
	game.move("left")
});
$(document).on("swiperight", function() {
	game.move("right")
});
$(document).on("swipeup", function() {
	game.move("up")
});
$(document).on("swipedown", function() {
	game.move("down")
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
});
 
var port = process.env.PORT || 8000;
server.listen(port, function() {
    console.log("App is running on port " + port);
});