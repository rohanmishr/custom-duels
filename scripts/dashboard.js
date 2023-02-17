function toggleWidgetSelection(){
    var div = document.getElementById("stats-content-editwidgets");
    if(div.style.display == "none"){
        div.style.display = "block";
    }else{
        div.style.display = "none";
    }
}

setInterval(function(){
    for(var i = 0; i < shownWidgets.length; i++){
        var show = document.getElementById(shownWidgets[i]);
        show.style.display = "block";
    };
})