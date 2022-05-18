import "./style.css";
import * as helper from "./helper";
//import classes from "./classes";
//import main from "./main-element";
import events from "./events";
//import toggleWeatherUnit from "./convert-weather-unit";
import headerSection from "./header";
import mainSection from "./main";
import footerSection from "./footer";
import classes from "./classes";

const fragment = new DocumentFragment();
fragment.append(headerSection(), mainSection(), footerSection());
const app = document.querySelector(".app");
app.append(fragment);
helper.addClass(app, ["grid", "grid-rows-[auto_1fr_auto]", "h-screen"]);

document.body.classList.add("bg-slate-900", "text-gray-200", "h-screen");

events();
//toggleWeatherUnit();
