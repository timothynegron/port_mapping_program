// ┌──────────────────────┐
// │   Global Variables   │	
// └──────────────────────┘

// ┌──────────────────┐
// │   Main Function  │	
// └──────────────────┘

// TODO: call functions in order
function main(){
    getPortData();
    portMapper();
    // drawDataVisualizations();
    // buildRack();
}

// ┌──────────────┐
// │   Version 1  │	
// └──────────────┘

// TODO: get the port data from the CSV file
function getPortData(){
    // print data set to console
    const dataset = $.csv.toObjects(csv);
    console.log(dataset)

}

// TODO: map the ports to the divs on the switch or patch panel
function portMapper(){
    
}

// ┌──────────────┐
// │   Version 2  │	
// └──────────────┘

// TODO: set the tool tips on each port (which patch panel or switch does it go to?)
function setToolTip(){
    // if hover over port
    // show tool tip over patch panel or port patched too
}

// TODO: if port clicked, indicate somehow that port is on or off
function portClickListener(){
    // if port clicked  
    // change port color
}

// ┌──────────────┐
// │   Version 3  │	
// └──────────────┘

// TODO: call build patchpanel or build switch accordingly
function buildRack(){

    // while{
    //     if patchpanel{
    //      switch:
    //      PPA 
    //      PPB 
    //      etc..
    //     then match port # to div id
    //     }


    //     if switch{
    //      switch:
    //      meraki
    //      avaya
    //      etc...
    //      then match port # to div id
    //     }
    // }

}

// TODO: 
function buildMerakiSwitch(){
    // if found new switch
    // build the switch
}


function buildPatchPanel(){

}


function buildAvayaSwitch(){

}

function portSwitch(){
    // if match made
    // turn port on
    setToolTip();
}

// ┌──────────────┐
// │   Version 4  │	
// └──────────────┘

// TODO: build data visualizations
function drawDataVisualizations(){

}

// ┌──────────────┐
// │   Version 5  │	
// └──────────────┘

// TODO: create end device with workstation label
function createEndDeviceDataSet(){
    // for each row and create end device if workstation label exist
}

// TODO: when port clicked build network map for end device
function drawNetworkMap(){
    // find match between each data set (R1 R2 Cabinet 1 Cabinet 2)
    // once have matched list, put add HTML elements to make drawing
}

