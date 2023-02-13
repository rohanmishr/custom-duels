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

function showLegalMoves(piece){
    var moves = checkLegalMoves(piece);
    for(var i = 0; i < moves.length; i++){
        ctx.fillStyle = "rgba(0, 255, 0, 0.5)";
        ctx.fillRect((moves[i].f - 1) * 75, 525 - ((moves[i].r - 1) * 75), 75, 75);
    }
}

var showingMoves = false;
var shownPiece = null;
document.getElementById("canvas").addEventListener("click", function(event) {
    drawBoard();
    drawPieces();
    var x = event.pageX - canvas.offsetLeft;
    var y = event.pageY - canvas.offsetTop;
    var f = Math.floor(x / 75) + 1;
    var r = 8 - Math.floor(y / 75);
    var location = new Location(f, r);
    for(var i = 0; i<gamepieces.length; i++){
        if(gamepieces[i].f == f && gamepieces[i].r == r){
            showLegalMoves(gamepieces[i]);
            shownPiece = gamepieces[i];
            showingMoves = true;
        }
    }
    if(showingMoves){
        showingMoves = false;
        shownPiece = null;
        movePiece(shownPiece, location);
    }
    
    console.log(location);
});

window.onload = function() {
    reset();
    drawBoard();
    drawPieces();
};