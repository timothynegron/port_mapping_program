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
    setFileInputListener();

    console.log("function: main() completed")
}

// ┌────────────────────────────┐
// │   Set Listeners Function   │	
// └────────────────────────────┘

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

// ┌───────────────────────────┐
// │   Function: Port Mapper   │	
// └───────────────────────────┘

// TODO: map the ports to the divs on the switch or patch panel
function portMapper(results){

    console.log("function: portMapper() started")

    results.data.forEach(element => {

        const port = document.getElementById("meraki-port-" + element[0])
        let portStatus = element[4];
        
        if(element[4] !== "Rack"){

            if(portStatus === 'Open'){

                console.log("Notification: Port Not Connected")
                port.style.backgroundColor = "black"
                port.style.color = "white"
                port.style.fontSize = "8pt"
                port.innerHTML = element[1]
            }
            if(portStatus !== 'Open'){

                console.log("Notification: Port Connected")
                port.style.backgroundColor = "#0066ff"
                port.style.color = "white"
                port.style.fontSize = "8pt"
                port.innerHTML = element[1]
            }
        }
    });
    console.log("function: portMapper() ended")
}