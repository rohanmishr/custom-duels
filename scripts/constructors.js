var gamepieces = [];
var locations = [];
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
        gamepieces.push(new Piece("pawn", i, 7, "black"));
    }

    gamepieces.push(new Piece("rook", 1, 8, "black"));
    gamepieces.push(new Piece("rook", 8, 8, "black"));

    gamepieces.push(new Piece("knight", 2, 8, "black"));
    gamepieces.push(new Piece("knight", 7, 8, "black"));

    gamepieces.push(new Piece("bishop", 3, 8, "black"));
    gamepieces.push(new Piece("bishop", 6, 8, "black"));

    gamepieces.push(new Piece("queen", 5, 8, "black"));

    gamepieces.push(new Piece("king", 4, 8,"black"));
}

for(var i = 0; i<32; i++){
    locations.push(new Location(gamepieces[i].f, gamepieces[i].r));
}
