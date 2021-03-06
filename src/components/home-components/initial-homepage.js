import * as helper from "../../helper";
import setDefaultLoactionForm from "./set-default-location-form";
import defaultLocation from "../../data/default-location";

function initialHomepage() {
  const header = helper.createElement(
    "h2",
    ["Get Accurate Weather Details by the Second"],
    {
      class:
        "text-3xl sm:text-5xl uppercase font-barlow font-bold text-purple-400  text-center tracking-widest self-start ",
    }
  );

  const callToActionBtn = helper.createElement("button", ["get started"], {
    class:
      "call-to-action  w-[120px] px-4 py-2 uppercase text-sm text-pink-400 border-pink-400 font-sanspro font-semibold rounded transition ease-in duration-200 hover:text-slate-400 hover:border-slate-400 border-2 mt-[60px] shadow-[rgba(60,64,67,0.3)_0px_1px_2px_0px,rgba(60,64,67,0.15)_0px_2px_6px_2px;]",
  });
  const contentDiv = helper.createElement("div", [header, callToActionBtn], {
    class:
      "flex flex-col justify-top items-center h-full font-sanspro pt-[100px] sm:justify-center sm:pt-0",
  });

  const section = helper.createElement("section", [contentDiv], {
    class:
      "home-section w-[340px] sm:w-full flex justify-center items-start px-4 text-justify h-full",
  });

  if (defaultLocation.savedLocation() === null) {
    section.append(setDefaultLoactionForm());
  }

  // const main = document.querySelector("main");
  // main.innerHTML = "";
  // main.append(section);
  return section;
}

export default initialHomepage;
