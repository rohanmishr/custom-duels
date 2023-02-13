function movePiece(piece, location){
    var moves = checkLegalMoves(piece);
    for(var i = 0; i<moves.length; i++){
        if(moves[i].f == location.f && moves[i].r == location.r){
            piece.f = location.f;
            piece.r = location.r;
        }
    }
    
    for(var i = 0; i<32; i++){
        locations.push(new Location(gamepieces[i].f, gamepieces[i].r));
    }

    drawBoard();
    drawPieces();

    console.log("success");
}

function checkLegalMoves(piece){
    if(piece.type == "pawn"){
        var moves = [new Location(piece.f, piece.r + 1), new Location(piece.f, piece.r + 2), new Location(piece.f + 1, piece.r + 1), new Location(piece.f - 1, piece.r + 1)];
        if(piece.r !== 2){
            moves.splice(1, 2);
        }
        for(var i = 0; i<gamepieces.length; i++){
            if(gamepieces[i].f == piece.f && gamepieces[i].r == piece.r + 1){
                moves.splice(0, 1);
            }

            if(gamepieces[i].f !== piece.f + 1 && gamepieces[i].r !== piece.r + 1){
                moves.splice(2, 3);
            }

            if(gamepieces[i].f !== piece.f - 1 && gamepieces[i].r !== piece.r + 1){
                moves.splice(3, 4);
            }
        }
        return moves;
    }

    if(piece.type == "rook"){
        var moves = [];
        for(var i = 1; i<9; i++){
            l = new Location(piece.f, i);
            if (checkIfTakenSpace(l)) {
                if (getPieceAtSpace(l).color != piece.color) {
                    moves.push(l);
                    break;
                }
                else {
                    break;
                }
            }
            moves.push(l);
        }
        for(var i = 1; i<9; i++){
            moves.push(new Location(i, piece.r));
        }
        for(var i = 0; i<gamepieces.length; i++){
            if(gamepieces[i].f == piece.f && gamepieces[i].r == piece.r){
                moves.splice(i, 1);
            }
        }
        return moves;
    }

    if(piece.type == "knight"){
        var moves = [new Location(piece.f + 1, piece.r + 2), new Location(piece.f + 2, piece.r + 1), new Location(piece.f + 2, piece.r - 1), new Location(piece.f + 1, piece.r - 2), new Location(piece.f - 1, piece.r - 2), new Location(piece.f - 2, piece.r - 1), new Location(piece.f - 2, piece.r + 1), new Location(piece.f - 1, piece.r + 2)];
        for(var i = 0; i<gamepieces.length; i++){
            if(gamepieces[i].f == piece.f && gamepieces[i].r == piece.r){
                moves.splice(i, 1);
            }
            if(gamepieces[i].f == piece.f + 1 && gamepieces[i].r == piece.r + 2){
                moves.splice(0, 1);
            }
            if(gamepieces[i].f == piece.f + 2 && gamepieces[i].r == piece.r + 1){
                moves.splice(1, 2);
            }
        }
        return moves;
    }

    if(piece.type == "bishop"){
        var moves = [];
        for(var i = 1; i<9; i++){
            moves.push(new Location(piece.f + i, piece.r + i));
        }
        for(var i = 1; i<9; i++){
            moves.push(new Location(piece.f + i, piece.r - i));
        }
        for(var i = 1; i<9; i++){
            moves.push(new Location(piece.f - i, piece.r - i));
        }
        for(var i = 1; i<9; i++){
            moves.push(new Location(piece.f - i, piece.r + i));
        }

        for(var i = 0; i<gamepieces.length; i++){
            if(gamepieces[i].f == piece.f && gamepieces[i].r == piece.r){
                moves.splice(i, 1);
            }
        }
        return moves;
    }

    if(piece.type == "queen"){
        var moves = [];
        for(var i = 1; i<9; i++){
            moves.push(new Location(piece.f, i));
        }
        for(var i = 1; i<9; i++){
            moves.push(new Location(i, piece.r));
        }
        for(var i = 1; i<9; i++){
            moves.push(new Location(piece.f + i, piece.r + i));
        }
        for(var i = 1; i<9; i++){
            moves.push(new Location(piece.f + i, piece.r - i));
        }
        for(var i = 1; i<9; i++){
            moves.push(new Location(piece.f - i, piece.r - i));
        }
        for(var i = 1; i<9; i++){
            moves.push(new Location(piece.f - i, piece.r + i));
        }

        for(var i = 0; i<gamepieces.length; i++){
            if(gamepieces[i].f == piece.f && gamepieces[i].r == piece.r){
                moves.splice(i, 1);
            }
        }
        return moves;
    }

    if(piece.type == "king"){
        var moves = [new Location(piece.f, piece.r + 1), new Location(piece.f, piece.r - 1), new Location(piece.f + 1, piece.r), new Location(piece.f - 1, piece.r), new Location(piece.f + 1, piece.r + 1), new Location(piece.f + 1, piece.r - 1), new Location(piece.f - 1, piece.r - 1), new Location(piece.f - 1, piece.r + 1)];
        for(var i = 0; i<gamepieces.length; i++){
            if(gamepieces[i].f == piece.f && gamepieces[i].r == piece.r){
                moves.splice(i, 1);
            }
        }
        return moves;
    }
}