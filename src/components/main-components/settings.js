import { startOfMonth } from "date-fns";
import * as helper from "../../helper";

const renderSettings = () => {
  const heading = helper.createElement("h1", ["check back soon"], {
    class: "text-2xl sm:text-4xl text-purple-400 mb-[30px] uppercase font-bold",
  });
  const settingsText = helper.createElement(
    "p",
    ["This page is under constriction"],
    {
      class: "text-base sm:text-xl text-indigo-200",
    }
  );
  const section = helper.createElement("section", [heading, settingsText], {
    class: "flex flex-col items-center justify-start max-h-[100vh] relative ",
  });
  const main = document.querySelector("main");
  main.innerHTML = "";
  main.append(section);
  return main;
};

export default renderSettings;
