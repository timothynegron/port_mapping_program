// ┌──────────────────────┐
// │   Global Variables   │	
// └──────────────────────┘

import portMapper from "./version1.js"

// ┌────────────────────┐
// │   Call Functions   │	
// └────────────────────┘

main();

// ┌───────────────────┐
// │   Main Function   │	
// └───────────────────┘

function main(){

    console.log("function: main() started")

    setButtonListeners();
    setFileInputListener();

    console.log("function: main() completed")
}


function setButtonListeners(){
    console.log("function: setButtonListeners() started")

    const buttonChooseFile = document.getElementById("button-choose-file")
    buttonChooseFile.addEventListener("click", clickedButtonChooseFile)

    console.log("function: setButtonListeners() completed")
}

function clickedButtonChooseFile(){
    
    console.log("function: clickedButtonChooseFile started")

    dialog.click();

    console.log("function: clickedButtonChooseFile ended")
}

function setFileInputListener(){

    const fileInput = document.getElementById("dialog")
    fileInput.addEventListener("change", e =>{

        console.log("function: fileInput event listener started")
        
        Papa.parse(dialog.files[0], {
            delimiter: ",",
            skipEmptyLines: true,
            complete: results => {
                console.log("process: port mapper function start")
                portMapper(results)
                console.log("process: port mapper function end")
            }
        })

        console.log("function: fileInput event listener ended")
    })
}
