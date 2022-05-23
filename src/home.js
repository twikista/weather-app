import * as helper from "./helper";

function onPageLoad() {
  const header = helper.createElement(
    "h2",
    ["Get Accurate Weather Details by the Second"],
    {
      class:
        "text-3xl sm:text-5xl uppercase font-barlow font-bold text-purple-400 mt-[-140px] text-center tracking-widest ",
    }
  );

  const callToActionBtn = helper.createElement("button", ["get started"], {
    class:
      "call-to-action  w-[120px] px-4 py-2 uppercase text-sm text-pink-400 border-pink-400 font-sanspro font-semibold rounded transition ease-in duration-200 hover:text-pink-500 hover:border-pink-500 border-2 mt-[60px] shadow-[rgba(60,64,67,0.3)_0px_1px_2px_0px,rgba(60,64,67,0.15)_0px_2px_6px_2px;]",
  });
  const contentDiv = helper.createElement("div", [header, callToActionBtn], {
    class: "flex flex-col justify-center items-center h-full font-sanspro ",
  });

  const section = helper.createElement("section", [contentDiv], {
    class:
      "home-section flex justify-center items-start px-4 text-justify h-full",
  });
  return section;
}

export default onPageLoad;

//box-shadow: rgba(60,64,67,0.3)_0px_1px_2px_0px,rgba(60,64,67,0.15)_0px_2px_6px_2px;
