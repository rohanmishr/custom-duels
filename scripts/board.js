var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var lightcol = "#f0d9b5";
var darkcol = "#b58863";

function convertIntChar(integer) {
    var character = 'a'.charCodeAt(0);
    return String.fromCharCode(character + integer - 1);
}

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
        for (var e = 0; e < 8; e++) {
            ctx.fillStyle = "black";
            ctx.font = "15px Arial";
            ctx.fillText(convertIntChar(e+1), 60 + (e * 75), 590);
            ctx.fillText(8 - e, 5, 20 + (e * 75));
        }
    }
}

function drawPieces(){
    for(var i = 0; i < gamepieces.length; i++){
        var piece = gamepieces[i];
        ctx.drawImage(document.getElementById(piece.type + piece.color), ((piece.f - 1) * 75) + 2, 530 - ((piece.r - 1) * 75), 70, 70);
    }
}

window.onload = function() {
    reset();
    drawBoard();
    drawPieces();
};