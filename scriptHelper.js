// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    // Here is the HTML formatting for our mission target div.
    /*
                 <h2>Mission Destination</h2>
                 <ol>
                     <li>Name: </li>
                     <li>Diameter: </li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth: </li>
                     <li>Number of Moons: </li>
                 </ol>
                 <img src="">
    */
}

function validateInput(testInput) {

    

    if (testInput === ""){
        return "Empty";
    }
    else if (isNaN(Number(testInput))) {
        return "Not a Number";
     }   
     else if (!isNaN(Number(testInput))) {
        return "Is a Number";
     }  
 }

//----------------------------------------------------


function formSubmission(document, list, pilot, copilot, fuelLevel, cargoMass) {

         pilot = document.querySelector("input[name=pilotName]");
         copilot = document.querySelector("input[name=copilotName]");
         fuelLevel = document.querySelector("input[name=fuelLevel]");
         cargoMass = document.querySelector("input[name=cargoMass]");

        //  list = []

        

    if (validateInput(pilot.value) === "Empty" || validateInput(copilot.value) === "Empty" || validateInput(fuelLevel.value) === "Empty" || validateInput(cargoMass.value) === "Empty") {
        alert("All fields are required!");
    }
    else if (validateInput(copilot.value) === "Is a Number" || validateInput(pilot.value) === "Is a Number"){
        alert ("The pilot's names must be letters only");
    }
    else if (validateInput(cargoMass.value) === "Not a Number" || validateInput(fuelLevel.value) === "Not a Number"){
        alert ("Cargo Mass and Fuel Level must be numbers only");
    }

    // let faultyItems = document.getElementById("faultyItems");
    // let pilotStatus = document.getElementById("pilotStatus");
    // let copilotStatus = document.getElementById("copilotStatus");

    // pilotStatus.innerText = `Pilot ${pilot} is ready for launch`;
    // copilotStatus.innerText = `Co-pilot ${copilot} is ready for launch`;

    // if (cargoMass > 10000){
    //     faultyItems.style.visibility = "visible";
    // }

}

   
    

    
//----------------------------------------------------

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch().then(function (response) {
    });

    return planetsReturned;
}

function pickPlanet(planets) {
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;
