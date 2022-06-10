import weatherCard from "./weatherCard";

function renderCurrent(weather) {
  const main = document.querySelector("main");
  main.innerHTML = "";
  main.append(weatherCard(weather));
}

export default renderCurrent;
