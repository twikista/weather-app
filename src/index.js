import "./style.css";
import * as helper from "./helper";
import classes from "./classes";
import main from "./main-element";
import events from "./events";
import toggleWeatherUnit from "./convert-weather-unit";

// const hello = document.createElement("h1");
// const wrapper = document.createElement("div");
//const wrapper1 = document.createElement("div");
const hello = helper.createElement("h1", ["Hello World"], null);

/*function addClass(ele, classes) {
  classes.forEach((i) => ele.classList.add(i));
}*/

// hello.textContent = "Hello World!";
helper.addClass(hello, classes.mainHeader);

/*wrapper.classList.add(
  "flex",
  "w-full",
  "h-screen",
  "justify-center",
  "items-center"
);*/

document.body.classList.add("bg-gradient-to-b", "from-gray-700", "to-gray-900");

//wrapper.append(hello, main);
document.body.appendChild(main);

events();
//toggleWeatherUnit();
