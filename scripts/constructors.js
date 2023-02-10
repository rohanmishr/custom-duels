var gamepieces = [];

function Piece(type, f, r){
    this.type = type;
    this.f = f;
    this.r = r;
}

class pieces {
    reset = function(){
        gamepieces = [];
        for(var i = 0; i < 8; i++){
            gamepieces.push(new Piece("pawn", i, 2));
        }
        gamepieces.push(new Piece("rook", 1, 1));
        gamepieces.push(new Piece("rook", 8, 1));

        gamepieces.push(new Piece("knight", 2, 1));
        gamepieces.push(new Piece("knight", 7, 1));

        gamepieces.push(new Piece("bishop", 3, 1));
        gamepieces.push(new Piece("bishop", 6, 1));

        gamepieces.push(new Piece("queen", 4, 1));

        gamepieces.push(new Piece("king", 5, 1));
    }
}


