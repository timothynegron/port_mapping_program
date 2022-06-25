// Get Port File from folder
// Store as list object

// 1 List Object 
// O(n) Port Connection Objects
// Port Conection Object = 1 Row

// TODO: call functions in order
function main(){
    getPortData();
    portMapper();
    // drawDataVisualizations();
    // buildRack();
}

// ------- Phase 1

// TODO: get the port data from the CSV file
function getPortData(){

}

// TODO: map the ports to the divs on the switch or patch panel
function portMapper(){

}


// ------- Phase 2

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


// ------- Phase 3

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

// -------- Phase 4

// TODO: build data visualizations
function drawDataVisualizations(){

}