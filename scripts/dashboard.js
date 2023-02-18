function toggleWidgetSelection(){
    var div = document.getElementById("stats-content-editwidgets");
    if(div.style.display == "none"){
        div.style.display = "block";
    }else{
        div.style.display = "none";
    }
}

var keys =  ["total", "daily", "rapid", "blitz", "bullet"];
var shownWidgets = [];
setInterval(function(){
    for(var i = 0; i < 5; i++){
        if(document.getElementById(keys[i] + "-wins").checked){
            shownWidgets.push("stats-" + keys[i] + "-wins");
        }
        if(document.getElementById(keys[i] + "-losses").checked){
            shownWidgets.push("stats-" + keys[i] + "-losses");
        }
        if(document.getElementById(keys[i] + "-ties").checked){
            shownWidgets.push("stats-" + keys[i] + "-ties");
        }
        if(document.getElementById(keys[i] + "-elo").checked){
            shownWidgets.push("stats-" + keys[i] + "-elo");
        }
        if(document.getElementById(keys[i] + "-ws").checked){
            shownWidgets.push("stats-" + keys[i] + "-ws");
        }
    }

    for(var i = 0; i < shownWidgets.length; i++){
        var show = document.getElementById(shownWidgets[i]);
        show.style.display = "block";
    };
})