// ┌──────────────────────┐
// │   Global Variables   │	
// └──────────────────────┘



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

    const fileInput = document.getElementById("dialog")
    fileInput.addEventListener("change", e =>{

        console.log("function: fileInput event listener started")
        
        Papa.parse(dialog.files[0], {
            delimiter: ",",
            skipEmptyLines: true,
            complete: results => {
                console.log(results)
            }
        })

        console.log("function: fileInput event listener started")
    })

    console.log("function: setButtonListeners() completed")
}

function clickedButtonChooseFile(){
    
    console.log("function: clickedButtonChooseFile started")

    dialog.click();

    console.log("function: clickedButtonChooseFile ended")
}
