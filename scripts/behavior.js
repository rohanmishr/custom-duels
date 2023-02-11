function movePiece(piece, location){
    piece.r++;
    drawBoard();
    drawPieces();
}

function checkLegalMoves(piece){
    if(piece.type == "pawn"){
        var moves = [new Location(piece.f, piece.r + 1), new Location(piece.f, piece.r + 2), new Location(piece.f + 1, piece.r + 1), new Location(piece.f - 1, piece.r + 1)];
        if(piece.r !== 2){
            moves.splice(1, 2);
        }
        return moves;
    }
}