function movePiece(piece, location){
    var moves = checkLegalMoves(piece);
    if (moves == null) {console.log("Moves is null. Most likely no moves found!"); return;}
    for(var i = 0; i<moves.length; i++){
        if(moves[i].x == location.x && moves[i].y == location.y){
            piece.x = location.x;
            piece.y = location.y;
        }
    }
    
    for(var i = 0; i<32; i++){
        locations.push(new Location(gamepieces[i].x, gamepieces[i].y));
    }

    drawBoard();
    drawPieces();

    console.log("success");
}

function checkLegalMoves(piece){
    if (piece == null) {console.log("Piece is null"); LogError("Piece is null"); return;}
    if(piece.type == TYPE_PAWN){
        var moves = []
        if (piece.color = COLOR_WHITE) {
            moves = [new Location(piece.x, piece.y + 1), new Location(piece.x, piece.y + 2), new Location(piece.x+1, piece.y+1), new Location(piece.x-1, piece.y+1)];
            if(piece.y !== 2){
                moves.splice(1, 1);
            }

        }
        if (piece.color = COLOR_BLACK) {
            moves = [new Location(piece.x, piece.y-1), new Location(piece.x, piece.y-2), new Location(piece.x+1, piece.y-1), new Location(piece.x-1, piece.y-1)];
        }
        for (var i = 0; i < moves.length; i++) {
            if (checkIfTakenSpace(moves[i])) {
                var pieceatspace = getPieceAtSpace(moves[i]);
                if (pieceatspace.color != piece.color) {
                    if (i>1) {
                        continue;
                    }
                    else {
                        moves.splice(i,1);
                    }
                }
                else {
                    moves.splice(i, 1);
                    if (i==0) {
                        moves.splice(i+1,1);
                    }
                }
            }
        }
    }

    if(piece.type == TYPE_ROOK){
        var moves = [];
        //Check all to right
        for (var i = piece.x; i < 9; i++) {
            if (i == piece.x) {continue;}
            if (checkIfTakenSpace(new Location(i, piece.y))) {
                var piecefound = getPieceAtSpace(new Location(i, piece.y));
                if (piecefound.color == piece.color) {
                    break;
                }
                else {
                    moves.push(new Location(i, piece.y));
                    break;
                }
            }
            moves.push(new Location(i, piece.y));
        }
        //Check all to left
        for (var i = piece.x; i > 0; i--) {
            if (i == piece.x) {continue;}
            if (checkIfTakenSpace(new Location(i, piece.y))) {
                var piecefound = getPieceAtSpace(new Location(i, piece.y));
                if (piecefound.color == piece.color) {
                    break;
                }
                else {
                    moves.push(new Location(i, piece.y));
                    break;
                }
            }
            moves.push(new Location(i, piece.y));
        }
        //Check all to top
        for (var i = piece.y; i < 9; i++) {
            if (i == piece.y) {continue;}
            if (checkIfTakenSpace(new Location(piece.x, i))) {
                var piecefound = getPieceAtSpace(new Location(piece.x, i));
                if (piecefound.color == piece.color) {
                    break;
                }
                else {
                    moves.push(new Location(piece.x, i));
                    break;
                }
            }
            moves.push(new Location(piece.x, i));
        }
        for (var i = piece.y; i > 0; i--) {
            if (i == piece.y) {continue;}
            if (checkIfTakenSpace(new Location(piece.x, i))) {
                var piecefound = getPieceAtSpace(new Location(piece.x, i));
                if (piecefound.color == piece.color) {
                    break;
                }
                else {
                    moves.push(new Location(piece.x, i));
                    break;
                }
            }
            moves.push(new Location(piece.x, i));
        }
        return moves;
    }

    if(piece.type == TYPE_KNIGHT){
        LogError("Piece selected: Knight");
        var moves = [new Location(piece.x + 1, piece.y + 2), new Location(piece.x + 2, piece.y + 1), new Location(piece.x + 2, piece.y - 1), new Location(piece.x + 1, piece.y - 2), new Location(piece.x - 1, piece.y - 2), new Location(piece.x - 2, piece.y - 1), new Location(piece.x - 2, piece.y + 1), new Location(piece.x - 1, piece.y + 2)];
        for(var i = 0; i<gamepieces.length; i++){
            if(gamepieces[i].x == piece.x && gamepieces[i].y == piece.y){
                moves.splice(i, 1);
            }
            if(gamepieces[i].x == piece.x + 1 && gamepieces[i].y == piece.y + 2){
                moves.splice(0, 1);
            }
            if(gamepieces[i].x == piece.x + 2 && gamepieces[i].y == piece.y + 1){
                moves.splice(1, 2);
            }
        }
        return moves;
    }

    if(piece.type == TYPE_BISHOP){
        var moves = [];
        for(var i = 1; i<9; i++){
            moves.push(new Location(piece.x + i, piece.y + i));
        }
        for(var i = 1; i<9; i++){
            moves.push(new Location(piece.x + i, piece.y - i));
        }
        for(var i = 1; i<9; i++){
            moves.push(new Location(piece.x - i, piece.y - i));
        }
        for(var i = 1; i<9; i++){
            moves.push(new Location(piece.x - i, piece.y + i));
        }

        for(var i = 0; i<gamepieces.length; i++){
            if(gamepieces[i].x == piece.x && gamepieces[i].y == piece.y){
                moves.splice(i, 1);
            }
        }
        return moves;
    }

    if(piece.type == TYPE_QUEEN){
        var moves = [];
        for(var i = 1; i<9; i++){
            moves.push(new Location(piece.x, i));
        }
        for(var i = 1; i<9; i++){
            moves.push(new Location(i, piece.y));
        }
        for(var i = 1; i<9; i++){
            moves.push(new Location(piece.x + i, piece.y + i));
        }
        for(var i = 1; i<9; i++){
            moves.push(new Location(piece.x + i, piece.y - i));
        }
        for(var i = 1; i<9; i++){
            moves.push(new Location(piece.x - i, piece.y - i));
        }
        for(var i = 1; i<9; i++){
            moves.push(new Location(piece.x - i, piece.y + i));
        }

        for(var i = 0; i<gamepieces.length; i++){
            if(gamepieces[i].x == piece.x && gamepieces[i].y == piece.y){
                moves.splice(i, 1);
            }
        }
        return moves;
    }

    if(piece.type == TYPE_KING){
        var moves = [new Location(piece.x, piece.y + 1), new Location(piece.x, piece.y - 1), new Location(piece.x + 1, piece.y), new Location(piece.x - 1, piece.y), new Location(piece.x + 1, piece.y + 1), new Location(piece.x + 1, piece.y - 1), new Location(piece.x - 1, piece.y - 1), new Location(piece.x - 1, piece.y + 1)];
        for(var i = 0; i<gamepieces.length; i++){
            if(gamepieces[i].x == piece.x && gamepieces[i].y == piece.y){
                moves.splice(i, 1);
            }
        }
        return moves;
    }
}