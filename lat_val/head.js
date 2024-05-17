
function get_selected_word(){

    /*
    var cursorPosition = input.selectionStart;
    
    // Find the start and end of the word
    
    let stop = [" ","\n", "\t"];
    let text = input.value;
    let startIndex;
    let endIndex;
    for (let n in stop) {
        startIndex = (text.lastIndexOf(" ", cursorPosition - 1) + 1 > text.lastIndexOf(n, cursorPosition - 1) + 1) ?
        text.lastIndexOf(" ", cursorPosition - 1) + 1 :
        text.lastIndexOf(n, cursorPosition - 1) + 1;
    }
    for (let n in stop) {
        endIndex = (text.indexOf(" ", cursorPosition - 1) + 1 > text.indexOf(n, cursorPosition - 1) + 1) ?
        text.indexOf(" ", cursorPosition - 1) + 1 :
        text.indexOf(n, cursorPosition - 1) + 1;
    }

    endIndex = (endIndex == 0) ? text.length : endIndex;
    if (endIndex === -1) {
        endIndex = text.length;
    }
    
    // Extract the word
    var word = text.substring(startIndex, endIndex);

    console.log(word, endIndex);
    */
   //thx chatgpt lords for this precius pice of code
    let stop = [" ", "\n", "\t", "."];
    let text = input.value;
    let cursorPosition = input.selectionStart; // Assuming cursorPosition is given or you get it from the input element.
    let startIndex = 0;
    let endIndex = text.length;

    // Find the start index of the word
    for (let n of stop) {
        let lastIndex = text.lastIndexOf(n, cursorPosition - 1);
        if (lastIndex >= 0 && lastIndex + 1 > startIndex) {
            startIndex = lastIndex + 1;
        }
    }

    // Find the end index of the word
    for (let n of stop) {
        let nextIndex = text.indexOf(n, cursorPosition);
        if (nextIndex !== -1 && nextIndex < endIndex) {
            endIndex = nextIndex;
        }
    }

    // Extract the word
    let word = text.substring(startIndex, endIndex);
    
    let word_aligment = align_word(word)


    return 0;
}

function align_word(word){
    return 1
}

window.onload = () => test()



function test() {
    const input = document.getElementById("input");
    const selected = document.getElementById("selected");
    const suggested = document.getElementById("suggested");

    let jsonData;

    // Function to fetch data
    async function fetchData() {
        try {
            const response = await fetch("data.json");
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            jsonData = await response.json();
            console.log("Data fetched successfully:", jsonData);
        } catch (error) {
            console.error("Failed to fetch JSON data:", error);
        }
    }

    // Function to get jsonData
    function getJsonData(callback) {
        if (jsonData) {
            callback(jsonData);
        } else {
            // Polling mechanism to wait until jsonData is set
            const intervalId = setInterval(() => {
                if (jsonData) {
                    clearInterval(intervalId);
                    callback(jsonData);
                }
            }, 100); // Check every 100ms
        }
    }

    
    // Initialize data fetching
    fetchData();

    // finish this
    /**  getJsonData((data) => {
        console.log("Data in useJsonData function:", data);
        // Perform operations with the data here
    });*/
    

    
    setInterval(get_selected_word, 1000);
}