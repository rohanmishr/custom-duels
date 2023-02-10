var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var lightcol = "#f0d9b5";
var darkcol = "#b58863";

function drawBoard() {
    for (var i = 0; i < 8; i++) {
        for (var j = 0; j < 8; j++) {
            if ((i + j) % 2 == 0) {
                ctx.fillStyle = lightcol;
            } else {
                ctx.fillStyle = darkcol;
            }
            ctx.fillRect(i * 75, j * 75, 75, 75);
        }
    }
}

function drawPieces(){
    for(var i = 0; i < gamepieces.length; i++){
        var piece = gamepieces[i];
        ctx.drawImage(document.getElementById(piece.type), (piece.f - 1) * 75, (piece.r - 1) * 75, 75, 75);
    }
}

drawBoard();
drawPieces();