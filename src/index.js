import "./style.css";
import events from "./events";
import headerSection from "./header";
import mainSection from "./main";
import footerSection from "./footer";

const fragment = new DocumentFragment();
fragment.append(headerSection(), mainSection(), footerSection());
const app = document.querySelector(".app");
app.append(fragment);
app.classList.add(
  "grid",
  "grid-rows-[auto_1fr_auto]",
  "min-h-screen",
  "w-full",
  "font-sanspro"
);

document.body.classList.add(
  "bg-gray-900",
  "text-gray-200",
  "min-h-screen",
  "w-full"
);

events();