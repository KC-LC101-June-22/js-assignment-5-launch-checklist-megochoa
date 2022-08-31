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
  missionTarget.innerText = `<h2>Mission Destination</h2>
                   <ol>
                       <li>Name: ${name} </li>
                       <li>Diameter: ${diameter}</li>
                       <li>Star: ${star}</li>
                       <li>Distance from Earth: ${distance}</li>
                       <li>Number of Moons: ${moons}</li>
                   </ol>
                   <img src="${imageURL}">`;
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

  //  list = []

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

  let faultyItems = document.getElementById("faultyItems");
  let pilotStatus = document.getElementById("pilotStatus");
  let copilotStatus = document.getElementById("copilotStatus");
  launchStatus = document.getElementById("launchStatus");

  if (cargoMass.value > 10000 && fuelLevel.value < 10000) {
    faultyItems.style.visibility = "visible";
    pilotStatus.innerText = `Pilot ${pilot} is ready for launch`;
    copilotStatus.innerText = `Co-pilot ${copilot} is ready for launch`;
    launchStatus.innerText = "Shuttle not ready for launch";
    launchStatus.style.color = "red";
  }

  if (cargoMass.value > 10000) {
    faultyItems.style.visibility = "visible";
    launchStatus.innerText = "Shuttle not ready for launch";
    launchStatus.style.color = "red";
    pilotStatus.innerText = `Pilot ${pilot} is ready for launch`;
    copilotStatus.innerText = `Co-pilot ${copilot} is ready for launch`;
  }

  if (fuelLevel.value > 10000) {
    faultyItems.style.visibility = "visible";
    launchStatus.innerText = "Shuttle not ready for launch";
    launchStatus.style.color = "red";
    pilotStatus.innerText = `Pilot ${pilot} is ready for launch`;
    copilotStatus.innerText = `Co-pilot ${copilot} is ready for launch`;
  }

  if (cargoMass.value < 10000 && fuelLevel.value > 10000) {
    faultyItems.style.visibility = "visible";
    launchStatus.innerText = "Shuttle is ready for launch";
    launchStatus.style.color = "green";
    pilotStatus.innerText = `Pilot ${pilot} is ready for launch`;
    copilotStatus.innerText = `Co-pilot ${copilot} is ready for launch`;
  }
}

//----------------------------------------------------

async function myFetch() {
  let planetsReturned;

  planetsReturned = await fetch(
    "https://handlers.education.launchcode.org/static/planets.json"
  ).then(function (response) {
    return response.json();
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
