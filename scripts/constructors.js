var gamepieces = [];
var locations = [];

const TYPE_PAWN = 0;
const TYPE_ROOK = 1;
const TYPE_BISHOP = 2;
const TYPE_KNIGHT = 3;
const TYPE_KING = 4;
const TYPE_QUEEN = 5;

const COLOR_BLACK = 0;
const COLOR_WHITE = 1;

class Piece {
    constructor(type, x, y, color) {
        this.type = type;
        this.x = x;
        this.y = y;
        this.location = new Location(x,y);
        this.color = color;
    }

    updatePos(x, y) {
        this.x = x;
        this.y = y;
        this.location = new Location(x,y);
    }

    updatePos(location1) {
        this.location = location1;
        this.x=location1.x;
        this.y=location1.y
    }
}

class Location{
    constructor(x,y) {
        this.x = x;
        this.y = y;
    }
    static equalto(location1, location2) {
        return location1.x == location2.x && location1.y == location2.y;
    }
}

function type_to_string(type) {
    switch(type) {
        case TYPE_PAWN:
            return "pawn";
        case TYPE_ROOK:
            return "rook";
        case TYPE_BISHOP:
            return "bishop";
        case TYPE_KNIGHT:
            return "knight";
        case TYPE_KING:
            return "king";
        case TYPE_QUEEN:
            return "queen";
    }
}

function color_to_string(color) {
    switch(color) {
        case COLOR_BLACK:
            return "black";
        case COLOR_WHITE:
            return "white";
    }
}

function reset(){
    gamepieces = [];
    for(var i = 1; i < 9; i++){
        gamepieces.push(new Piece(TYPE_PAWN, i, 2, COLOR_WHITE));
    }

    gamepieces.push(new Piece(TYPE_ROOK, 1, 1, COLOR_WHITE));
    gamepieces.push(new Piece(TYPE_ROOK, 8, 1, COLOR_WHITE));

    gamepieces.push(new Piece(TYPE_KNIGHT, 2, 1, COLOR_WHITE));
    gamepieces.push(new Piece(TYPE_KNIGHT, 7, 1, COLOR_WHITE));

    gamepieces.push(new Piece(TYPE_BISHOP, 3, 1, COLOR_WHITE));
    gamepieces.push(new Piece(TYPE_BISHOP, 6, 1, COLOR_WHITE));

    gamepieces.push(new Piece(TYPE_QUEEN, 4, 1, COLOR_WHITE));

    gamepieces.push(new Piece(TYPE_KING, 5, 1, COLOR_WHITE));

    for(var i = 1; i < 9; i++){
        gamepieces.push(new Piece(TYPE_PAWN, i, 7, COLOR_BLACK));
    }

    gamepieces.push(new Piece(TYPE_ROOK, 1, 8, COLOR_BLACK));
    gamepieces.push(new Piece(TYPE_ROOK, 8, 8, COLOR_BLACK));

    gamepieces.push(new Piece(TYPE_KNIGHT, 2, 8, COLOR_BLACK));
    gamepieces.push(new Piece(TYPE_KNIGHT, 7, 8, COLOR_BLACK));

    gamepieces.push(new Piece(TYPE_BISHOP, 3, 8, COLOR_BLACK));
    gamepieces.push(new Piece(TYPE_BISHOP, 6, 8, COLOR_BLACK));

    gamepieces.push(new Piece(TYPE_QUEEN, 5, 8, COLOR_BLACK));

    gamepieces.push(new Piece(TYPE_KING, 4, 8,COLOR_BLACK));
}

for(var i = 0; i<gamepieces.length; i++){
    locations.push(new Location(gamepieces[i].x, gamepieces[i].y));
}

function checkIfTakenSpace(location) {
    for (var i = 0; i<gamepieces.length; i++) {
        if (Location.equalto(location, gamepieces[i].location)) {
            return true;
        }
    }
    return false;
}

function getPieceAtSpace(location) {
    for (var i = 0; i<gamepieces.length; i++) {
        if (Location.equalto(location, gamepieces[i].location)) {
            return gamepieces[i];
        }
    }
    return null;
}