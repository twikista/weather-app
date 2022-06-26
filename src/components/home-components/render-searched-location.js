import weatherCard from "../weatherCard-component/weatherCard";
// import renderState from "./renderState";

function renderSearchedLocation(weather) {
  const main = document.querySelector("main");
  main.innerHTML = "";
  // renderState.setIsRenderingDefault(false);
  main.append(weatherCard(weather));
}

export default renderSearchedLocation;
