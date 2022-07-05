// ┌──────────────────────┐
// │   Global Variables   │	
// └──────────────────────┘

const toastDiv = document.getElementById('liveToast')
const toast = new bootstrap.Toast(toastDiv)

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

    setToolTip()

    results.data.forEach(element => {

        const port = document.getElementById("meraki-port-" + element[0])
        let portStatus = element[4];
        
        if(element[4] !== "Rack"){

            if(portStatus !== 'Open'){

                console.log("Notification: Port Connected")
                port.style.backgroundColor = "#017BFE"
                port.style.color = "white"
                port.style.fontSize = "8pt"
                port.innerHTML = element[1]
                port.title = element[1] + " Port: " + element[2]
            }

            else if(portStatus === 'Open'){

                console.log("Notification: Port Not Connected")
                port.style.backgroundColor = "black"
                port.style.color = "white"
                port.style.fontSize = "8pt"
                port.innerHTML = element[1]
                port.title = "No Patch Cable Connected"
            }
        }
    });

    // document.getElementById("button-choose-file").style.backgroundColor = ""
    // createTable()
    toast.show()
    console.log("function: portMapper() ended")
}

function setToolTip(){
    $(function() {
        $('[data-toggle="tooltip"]').tooltip()
    })
   
}

function createTable(){
    // $("#csv-data-table").after("<thead><tr><th scope='col'>Switch Port Number</th><th scope='col'>Patch Panel</th></thead>")
        // document.createElement("<thead><tr><th scope='col'>#</th><th scope='col'>First</th><th scope='col'>Last</th><th scope='col'>Handle</th><th scope='col'>This</th></tr></thead>"))
}