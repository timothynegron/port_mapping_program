// ┌───────────────┐
// │   Version 1   │	
// └───────────────┘
//
// Get data from the CSV file and associate it with each port

// ┌──────────────────────┐
// │   Global Variables   │	
// └──────────────────────┘

const fileName = "meraki-sample-data.csv";


// ┌───────────────┐
// │   Functions   │	
// └───────────────┘

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

export default portMapper;