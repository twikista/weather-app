import "./style.css";
import events from "./events";
import initialize from "./others";
import headerSection from "./components/header";
import mainSection from "./components/main";
import footerSection from "./components/footer";
import initialPageLoad from "./routing/page-load-routes";

function app() {
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
}

app();
events();
initialize();
initialPageLoad();
export default app;
