import weatherCard from "./weatherCard";
// import renderState from "./renderState";

function h(weather) {
  const main = document.querySelector("main");
  main.innerHTML = "";
  // renderState.setIsRenderingDefault(false);
  main.append(weatherCard(weather));
}

export default h;
