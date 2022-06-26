// ┌──────────────────────┐
// │   Global Variables   │	
// └──────────────────────┘

const fileName = "meraki-sample-data.csv"

// import getPortData from './version1.js';

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
