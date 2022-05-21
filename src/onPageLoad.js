import * as helper from "./helper";

function onPageLoad() {
  const header = helper.createElement(
    "h2",
    ["Get Accurate Weather Detail by the Second"],
    {
      class:
        "text-3xl sm:text-5xl uppercase font-barlow font-bold text-purple-400 mt-[-160px] text-center tracking-widest ",
    }
  );
  const text =
    "weda weather app provides you with up to date accurate and reliable weather information from across the world. Avoid unfavorable weather suprises with weda app.";

  const appIntroText = helper.createElement("p", [text], {
    class: "leading-loose mb-12 text-indigo-200",
  });

  const callToActionBtn = helper.createElement("button", ["get started"], {
    class:
      "call-to-action  w-[120px] px-4 py-2 uppercase text-sm text-pink-400 border-pink-400 font-sanspro font-semibold rounded transition ease-in duration-200 hover:text-pink-500 hover:border-pink-500 border-2 mt-[60px] shadow-[rgba(60,64,67,0.3)_0px_1px_2px_0px,rgba(60,64,67,0.15)_0px_2px_6px_2px;]",
  });
  const contentDiv = helper.createElement("div", [header, callToActionBtn], {
    class: "flex flex-col justify-center items-center h-full font-sanspro ",
  });
  return contentDiv;
}

export default onPageLoad;

//box-shadow: rgba(60,64,67,0.3)_0px_1px_2px_0px,rgba(60,64,67,0.15)_0px_2px_6px_2px;
