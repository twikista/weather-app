import "./style.css";
import * as helper from "./helper";
//import classes from "./classes";
//import main from "./main-element";
//import events from "./events";
//import toggleWeatherUnit from "./convert-weather-unit";
import headerSection from "./header";
import mainSection from "./main";
import footerSection from "./footer";

const fragment = new DocumentFragment();
fragment.append(headerSection(), mainSection(), footerSection());
const app = document.querySelector(".app");
app.append(fragment);
console.log(fragment);

document.body.classList.add("bg-gray-900");

//events();
//toggleWeatherUnit();
