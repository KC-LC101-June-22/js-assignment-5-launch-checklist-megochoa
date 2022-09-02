// Write your helper functions here!
require("isomorphic-fetch");

function addDestinationInfo(
  document,
  name,
  diameter,
  star,
  distance,
  moons,
  imageUrl
) {
  // Here is the HTML formatting for our mission target div.
  let missionTarget = document.getElementById("missionTarget");
  missionTarget.innerHTML = `<h2>Mission Destination</h2>
                   <ol>
                       <li>Name: ${name} </li>
                       <li>Diameter: ${diameter}</li>
                       <li>Star: ${star}</li>
                       <li>Distance from Earth: ${distance}</li>
                       <li>Number of Moons: ${moons}</li>
                   </ol>
                   <img src="${imageUrl}">`;
}

function validateInput(testInput) {
  if (testInput === "") {
    return "Empty";
  } else if (isNaN(Number(testInput))) {
    return "Not a Number";
  } else if (!isNaN(Number(testInput))) {
    return "Is a Number";
  }
}

//----------------------------------------------------

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoMass) {
  pilot = document.querySelector("input[name=pilotName]");
  copilot = document.querySelector("input[name=copilotName]");
  fuelLevel = document.querySelector("input[name=fuelLevel]");
  cargoMass = document.querySelector("input[name=cargoMass]");
  list = document.getElementById("faultyItems");

  //********************************** */

  if (
    validateInput(pilot.value) === "Empty" ||
    validateInput(copilot.value) === "Empty" ||
    validateInput(fuelLevel.value) === "Empty" ||
    validateInput(cargoMass.value) === "Empty"
  ) {
    alert("All fields are required!");
  } else if (
    validateInput(copilot.value) === "Is a Number" ||
    validateInput(pilot.value) === "Is a Number"
  ) {
    alert("The pilot's names must be letters only");
  } else if (
    validateInput(cargoMass.value) === "Not a Number" ||
    validateInput(fuelLevel.value) === "Not a Number"
  ) {
    alert("Cargo Mass and Fuel Level must be numbers only");
  }

  //********************************** */

  pilotStatus = document.getElementById("pilotStatus");
  copilotStatus = document.getElementById("copilotStatus");
  launchStatus = document.getElementById("launchStatus");
  cargoStatus = document.getElementById("cargoStatus");
  fuelStatus = document.getElementById("fuelStatus");

  //should be else if and go first. most exclusive checks are listed first
  if (cargoMass.value > 10000 && fuelLevel.value < 10000) {
    list.style.visibility = "visible";
    pilotStatus.innerHTML = `Pilot ${pilot.value} is ready for launch`;
    copilotStatus.innerHTML = `Co-pilot ${copilot.value} is ready for launch`;
    launchStatus.innerText = "Shuttle not ready for launch";
    launchStatus.style.color = "rgb(199, 37, 78)";
    cargoStatus.innerText = "Cargo mass too heavy for launch";
    fuelStatus.innerText = "Fuel level too low for launch";
  } else if (fuelLevel.value < 10000 && cargoMass.value <= 10000) {
    list.style.visibility = "visible";
    launchStatus.style.color = "rgb(199, 37, 78)";
    launchStatus.innerText = "Shuttle not ready for launch";
    pilotStatus.innerHTML = `Pilot ${pilot.value} is ready for launch`;
    copilotStatus.innerHTML = `Co-pilot ${copilot.value} is ready for launch`;
    fuelStatus.innerText = "Fuel level too low for launch";
    cargoStatus.innerText = "Cargo mass low enough for launch";
  } else if (cargoMass.value > 10000 && fuelLevel.value >= 10000) {
    list.style.visibility = "visible";
    launchStatus.innerText = "Shuttle not ready for launch";
    launchStatus.style.color = "rgb(199, 37, 78)";
    pilotStatus.innerHTML = `Pilot ${pilot.value} is ready for launch`;
    copilotStatus.innerHTML = `Co-pilot ${copilot.value} is ready for launch`;
    cargoStatus.innerText = "Cargo mass too heavy for launch";
    fuelStatus.innerText = "Fuel level high enough for launch";
  }

  if (cargoMass.value <= 10000 && fuelLevel.value >= 10000) {
    //list.style.visibility = "hidden";
    launchStatus.innerText = "Shuttle is ready for launch";
    launchStatus.style.color = "rgb(65, 159, 106)";
    // pilotStatus.innerHTML = `Pilot ${pilot.value} is ready for launch`;
    // copilotStatus.innerHTML = `Co-pilot ${copilot.value} is ready for launch`;
    // fuelStatus.innerText = "Fuel level high enough for launch";
    // cargoStatus.innerText = "Cargo mass low enough for launch";
  }
}
//----------------------------------------------------

async function myFetch() {
  return await fetch(
    "https://handlers.education.launchcode.org/static/planets.json"
  )
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
}

//----------------------------------------------------

function pickPlanet(listedPlanets) {
  let planetIndex = Math.round(Math.random() * (listedPlanets.length - 1));
  let planetChoice = listedPlanets[planetIndex];
  return planetChoice;
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;
