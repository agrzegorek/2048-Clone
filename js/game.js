var Game = function(board_string){
  this.board_string = board_string || randomBoard();
  this.renderBoard();
};

Game.prototype.toString = function(){
  var string = "";
  string += this.board_string.substr(0,4)+"\n";
  string += this.board_string.substr(4,4)+"\n";
  string += this.board_string.substr(8,4)+"\n";
  string += this.board_string.substr(12,4)+"\n";
  return string;
};


Game.prototype.move = function(direction){
  var updatedBoard = []

  if (direction === "left"){
      updatedBoard = leftUpMathy(compactLeftUp(this.toRows()));
    } else if (direction === "up") { // for up
      updatedBoard = columnsToFro(leftUpMathy(compactLeftUp(columnsToFro((this.toRows())))));
    } else if (direction === "right") {
      updatedBoard = rightDownMathy(compactRightDown(this.toRows()));
    } else {
      updatedBoard = columnsToFro(rightDownMathy(compactRightDown(columnsToFro((this.toRows())))));
    };
  this.board_string = insertRandom(updatedBoard);
  this.renderBoard();
  }

Game.prototype.toRows = function(){
  var row1 = this.board_string.substr(0,4).split("");
  var row2 = this.board_string.substr(4,4).split("");
  var row3 = this.board_string.substr(8,4).split("");
  var row4 = this.board_string.substr(12,4).split("");
  return [row1, row2, row3, row4] // creates array of row arrays (still in string form atm)
}

Game.prototype.renderBoard = function(){
  var renderArray = this.board_string.split("");
  for (var i = 0; i < renderArray.length; i++) {
    $(".cell#"+i).text(renderArray[i]);
    $(".cell#"+i).attr("data-number", renderArray[i])
  }

}

var insertRandom = function(updatedBoard){
  var boardArray = updatedBoard[0].concat(updatedBoard[1],updatedBoard[2],updatedBoard[3]);
  // debugger;
  var inserted = false;
  while ( inserted === false ){
    var randomIndex = Math.floor((Math.random() * 15) + 0);
    if (boardArray[randomIndex] === "0"){
      boardArray.splice(randomIndex, 1, "2");
      inserted = true;
    };
  };
  return boardArray.join('');
};

var compactLeftUp = function(rowsOrColumns){
  var board = [];
  rowsOrColumns.forEach(function(rowOrColumn){
    var newOne = rowOrColumn.filter(function(cell){
      return cell != "0";
    });
    var times = ( 4 - newOne.length );
    for(i=0; i < times; i++){
      newOne.push("0");
    }
    board.push(newOne);
  });
  return board;
}

var compactRightDown = function(rowsOrColumns){
  var board = [];
  rowsOrColumns.forEach(function(rowOrColumn){
    var newOne = rowOrColumn.filter(function(cell){
      return cell != "0";
    });
    var times = ( 4 - newOne.length );
    for(i=0; i < times; i++){
      newOne.unshift("0");
    }
    board.push(newOne);
  });
  return board;
}

var leftUpMathy = function(compactBoard){
  var mathifiedBoard = [];
  compactBoard.forEach(function(array){
    for( i = 0; i < 3; i++){
      if (array[i] != "0"){
        if (array[i] === array [i+1]){
          array[i] *= 2;
          array[i+1] = 0;
        };
      };
    };
    var stringyArray = array.join();
    mathifiedBoard.push(stringyArray.split(","));
  });
  return compactLeftUp(mathifiedBoard);
};

var rightDownMathy = function(compactBoard){
  var mathifiedBoard = [];
  compactBoard.forEach(function(array){
    for( i = 3; i > 0; i--){
      if (array[i] != "0"){
        if (array[i] === array [i-1]){
          array[i] *= 2;
          array[i-1] = 0;
        };
      };
    };
    var stringyArray = array.join();
    mathifiedBoard.push(stringyArray.split(","));
  });
  return compactRightDown(mathifiedBoard);
};


var columnsToFro = function(gameBoardStructure){
  var newBoard = [];
  for (i = 0; i < 4; i++){
    var newArray = [];
    gameBoardStructure.forEach(function(array){
      newArray.push(array[i]);
    })
    newBoard.push(newArray);
  }
  return newBoard; // creates array of column arrays (index = row number)
}

var randomBoard = function(){
    var game_string = "2200000000000000"
    var a = game_string.split(""),
        n = 16;
    for(var i = n - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var tmp = a[i];
        a[i] = a[j];
        a[j] = tmp;
    }
    return a.join("");
};


