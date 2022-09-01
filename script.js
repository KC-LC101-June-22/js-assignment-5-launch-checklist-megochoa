// Write your JavaScript code here!

window.addEventListener("load", function () {
  let form = document.querySelector("form");
  form.addEventListener("submit", function (event) {
    let list = document.getElementById("faultyItems");
    let pilot = document.querySelector("input[name=pilotName]");
    let copilot = document.querySelector("input[name=copilotName]");
    let fuelLevel = document.querySelector("input[name=fuelLevel]");
    let cargoMass = document.querySelector("input[name=cargoMass]");
    list.style.visibility = "hidden";
    event.preventDefault();
    formSubmission(
      document,
      list,
      pilot.value,
      copilot.value,
      fuelLevel.value,
      cargoMass.value
    );
  });

  let listedPlanets;

  //Set listedPlanetsResponse equal to the value returned by calling myFetch()

  myFetch().then(function (planets) {
    console.log(planets);
    listedPlanets = planets;
    let randomPlanet = pickPlanet(listedPlanets);
    console.log(
      addDestinationInfo(
        document,
        randomPlanet.name,
        randomPlanet.diameter,
        randomPlanet.star,
        randomPlanet.distance,
        randomPlanet.moons,
        randomPlanet.image
      )
    );
  });

  // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
});
