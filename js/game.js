var Game = function(testBoard){
  this.gameNumbers = testBoard || randomBoard();
  this.renderBoard();
};

// test=[[0],[2],[4],[8],[16],[32],[64],[128],[256],[0],[0],[0],[0],[0],[0],[0]]

Game.prototype.move = function(direction){
  var updatedBoard = []

  if (direction === "left"){
      updatedBoard = leftUpMath(compactLeftUp(this.toRows()));
    } else if (direction === "up") { 
      updatedBoard = columnsToFro(leftUpMath(compactLeftUp(columnsToFro((this.toRows())))));
    } else if (direction === "right") {
      updatedBoard = rightDownMath(compactRightDown(this.toRows()));
    } else {
      updatedBoard = columnsToFro(rightDownMath(compactRightDown(columnsToFro((this.toRows())))));
    };
  this.gameNumbers = insertRandom(updatedBoard);
  this.renderBoard();
  }

Game.prototype.toRows = function(){
  var row1 = this.gameNumbers.slice(0,4);
  var row2 = this.gameNumbers.slice(4,8);
  var row3 = this.gameNumbers.slice(8,12);
  var row4 = this.gameNumbers.slice(12,16);
  return [row1, row2, row3, row4] // creates array of row arrays (still in string form atm)
}

Game.prototype.renderBoard = function(){
 
  for (var i = 0; i < this.gameNumbers.length; i++) {
    $(".cell#"+i).text(this.gameNumbers[i]);
    $(".cell#"+i).attr("data-number", this.gameNumbers[i])
  }
}

var insertRandom = function(updatedBoard){
  var boardArray = updatedBoard[0].concat(updatedBoard[1],updatedBoard[2],updatedBoard[3]);
  var inserted = false;
  while ( inserted === false ){
    var randomIndex = Math.floor((Math.random() * 15) + 0);
    if (boardArray[randomIndex] === "0"){
      boardArray.splice(randomIndex, 1, "2");
      inserted = true;
    };
  };
  return boardArray;
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

var leftUpMath = function(compactBoard){
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

var rightDownMath = function(compactBoard){
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
    return a;
};

var applyAnimation = function(cellList) {
  cellList.forEach(function(cell){
    if($(cell).data("number") != 0) {
      $(cell).addClass("animated tada")
    };
    removeAnimation(cell);
  });
};

var removeAnimation = function(cell) {
  $(cell).delay(700).queue(function() {  // Wait for 1 second.
            $(cell).removeClass("animated tada").dequeue();
    });
}
