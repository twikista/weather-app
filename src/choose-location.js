import * as helper from "./helper";

function defaultLoactionForm() {
  const formTitle = helper.createElement(
    "h3",
    ["Set default weather location"],
    {
      class:
        "text-lg font-bold sm:text-2xl text-gray-300 bg-purple-600 text-center py-2",
    }
  );

  const formHeader = helper.createElement("div", [formTitle], {
    class: "form-header mb-[40px]",
  });

  const locationInput = helper.createElement("input", [], {
    type: "text",
    id: "default-location-input",
    placeholder: "Enter default weather location ",
    autocomplete: "off",
    class:
      "transition-all ease-in bg-transparent outline-none appearnace-none border-[2px] border-gray-500 focus:border-purple-500  placeholder:text-sm sm:placeholder:text-base focus:placeholder:font-semibold focus:placeholder:text-xs sm:focus:placeholder:text-base  sm:focus:placeholder:font-semibold hover:border-purple-400  duration-200 mb-5 w-4/5 rounded-md py-1 sm:py-2 pl-2 ",
  });

  const saveBtn = helper.createElement("button", ["save"], {
    type: "submit",
    class:
      "submit-btn transition ease-in py-[3px] text-gray-400 rounded-md border-[2px] border-gray-500  outline-none  text-sm sm:text-base px-2 min-w-[60px] sm:min-w-[80px] font-semibold hover:border-purple-500 hover:text-purple-400 duration-200",
  });

  const cancelBtn = helper.createElement("button", ["close"], {
    id: "cancel-btn",
    class:
      "cancel-btn close-modal transition ease-in py-[3px] text-gray-400 rounded-md border-[2px] border-gray-500  outline-none  text-sm sm:text-base px-2 min-w-[60px] sm:min-w-[80px] font-semibold hover:border-purple-500 hover:text-purple-400 duration-200",
  });

  const formBtns = helper.createElement("div", [saveBtn, cancelBtn], {
    class: "form-btns flex gap-[20px] mt-3",
  });

  const formBody = helper.createElement("div", [locationInput, formBtns], {
    class: "flex flex-col justify-center items-center my-5",
  });

  const infoIcon = helper.createElement("i", [], {
    class: "fas fa-info-circle text-slate-400 text-base mr-1 rounded-full",
  });
  const formInfo = helper.createElement(
    "p",
    [
      infoIcon,
      "current weather details will be displayed for default location on app load",
    ],
    {
      class: "text-xs min-w-[242px] sm:text-sm text-gray-300  text-center px-2",
    }
  );

  const formFooter = helper.createElement("div", [formInfo], {
    class: "flex justify-center pb-2 ",
  });

  const wrapper = helper.createElement(
    "div",
    [formHeader, formBody, formFooter],
    {
      class: "form-content-wrapper",
    }
  );
  const form = helper.createElement("form", [wrapper], {
    class:
      "default-location-form bg-gray-800 border-[] relative bottom-[] rounded-md overflow-hidden shadow-[rgba(0,0,0,0.3)_0px_19px _38px,rgba(0,0,0,0.22)_0px_15px_12px] w-[90%] max-w-[480px] min-w-[260px] animate-reveal",
  });

  const overlay = helper.createElement("div", [form], {
    class:
      "overlay close-modal fixed inset-0 top-[-150px]  z-10 bg-[rgba(0,0,0,0.5)] flex justify-center items-center px-4 min-w-[270px] ",
  });
  return overlay;
}

export default defaultLoactionForm;
