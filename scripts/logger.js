var errorContainer = document.getElementById("error-box");
const max_displayable_errors = 3;

function LogError(message) {
    var error = document.createElement("a");
    var node = document.createTextNode(message+"\n");
    error.style.color = "#FF0000"
    
    error.appendChild(node);
    errorContainer.appendChild(node);
    if (errorContainer.children.length > max_displayable_errors) {
        remove(errorContainer.firstChild);
    }
}