var gamepieces = [];

function Piece(type, f, r, color){
    this.type = type;
    this.f = f;
    this.r = r;
    this.color = color;
}

function Location(f, r){
    this.f = f;
    this.r = r;
}

function reset(){
    gamepieces = [];
    for(var i = 1; i < 9; i++){
        gamepieces.push(new Piece("pawn", i, 2, "white"));
    }

    gamepieces.push(new Piece("rook", 1, 1, "white"));
    gamepieces.push(new Piece("rook", 8, 1, "white"));

    gamepieces.push(new Piece("knight", 2, 1, "white"));
    gamepieces.push(new Piece("knight", 7, 1, "white"));

    gamepieces.push(new Piece("bishop", 3, 1, "white"));
    gamepieces.push(new Piece("bishop", 6, 1, "white"));

    gamepieces.push(new Piece("queen", 4, 1, "white"));

    gamepieces.push(new Piece("king", 5, 1, "white"));

    for(var i = 1; i < 9; i++){
        gamepieces.push(new Piece("pawn", i, 8, "black"));
    }

    gamepieces.push(new Piece("rook", 1, 7, "black"));
    gamepieces.push(new Piece("rook", 8, 7, "black"));

    gamepieces.push(new Piece("knight", 2, 7, "black"));
    gamepieces.push(new Piece("knight", 7, 7, "black"));

    gamepieces.push(new Piece("bishop", 3, 7, "black"));
    gamepieces.push(new Piece("bishop", 6, 7, "black"));

    gamepieces.push(new Piece("queen", 5, 7, "black"));

    gamepieces.push(new Piece("king", 4, 7,"black"));
}

var board = [];
