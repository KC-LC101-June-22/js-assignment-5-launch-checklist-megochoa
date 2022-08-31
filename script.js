// Write your JavaScript code here!

//const { pickPlanet } = require("./scriptHelper");

window.addEventListener("load", function () {
  let form = document.querySelector("form");
  let submitButton = document.getElementById("formSubmit");
  form.addEventListener("submit", function (event) {
    event.preventDefault();
  });
  submitButton.addEventListener("click", function (event) {
    formSubmission(document);
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

  //   let listedPlanetsResponse = planets;

  //document.getElementById("myFetch(planetsReturned.value)");
  //   console.log(listedPlanetsResponse);
  //   listedPlanetsResponse
  //     .then(function (result) {
  //       listedPlanets = result;
  //       console.log("listedPlanets", listedPlanets);
  //     })
  //     .then(function () {
  //       console.log(listedPlanets);

  // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
  //

  //});
});
