
function get_selected_word(){
    var cursorPosition = input.selectionStart;
    
    // Find the start and end of the word
    var text = input.value;
    var startIndex = text.lastIndexOf(" ", cursorPosition - 1) + 1;
    var endIndex = text.indexOf(" ", cursorPosition);
    if (endIndex === -1) {
        endIndex = text.length;
    }
    
    // Extract the word
    var word = text.substring(startIndex, endIndex);
    
    return word;
}

function align_word(word){
    var vardskira 
}

window.onload = function test(){
    const input = document.getElementById("input");
    const selected = document.getElementById("selected");
    const suggested = document.getElementById("suggested");
    var jsonData; // Declare a variable to store the JSON data

    var jsonData = fetch("data.json")
    .then(response => response.json())
    .then(json => {
        jsonData = json; // Assign the parsed JSON data to the variable
        return jsonData
    });

    console.log(jsonData)
    setInterval(get_selected_word, 1000);
    
}