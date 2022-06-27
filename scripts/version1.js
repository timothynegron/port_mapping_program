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
        // console.log(element[])
        if(element[4] == 'Open'){
            const port = document.getElementById("meraki-port-" + element[0])
            port.style.backgroundColor = "black"
            console.log("port turned off")
        }
    });

    // console.log(results.data)

    console.log("function: portMapper() ended")
    
}

export default portMapper;