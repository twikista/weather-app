import * as helper from "./helper";

function defaultLoactionForm() {
  const formTitle = helper.createElement(
    "h3",
    ["Set default weather location"],
    {
      class:
        "text-lg font-bold sm:text-2xl text-gray-300 bg-purple-700 text-center py-2",
    }
  );

  const formHeader = helper.createElement("div", [formTitle], {
    class: "form-header mb-[40px]",
  });

  const locationInput = helper.createElement("input", [], {
    type: "text",
    placeholder: "Enter default weather location ",
    autocomplete: "off",
    class:
      "bg-transparent outline-none appearnace-none border-[2px] border-gray-500 mb-5 w-4/5 rounded-sm py-2 pl-2",
  });

  const saveBtn = helper.createElement("button", ["save"], {
    type: "submit",
    class:
      "submit-btn rounded-sm border-[1px] outline-none py-1 px-2 min-w-[80px]",
  });

  const cancelBtn = helper.createElement("button", ["cancel"], {
    type: "submit",
    class:
      "cancel-btn rounded-sm  border-[1px] outline-none py-1 px-2 min-w-[80px]",
  });

  const formBtns = helper.createElement("div", [saveBtn, cancelBtn], {
    class: "form-btns flex gap-[20px]",
  });

  const formBody = helper.createElement("div", [locationInput, formBtns], {
    class: "flex flex-col justify-center items-center my-5",
  });

  const infoIcon = helper.createElement("i", [], {
    class: "fas fa-info-circle text-slate-400 text-base p-1 rounded-full",
  });
  const formInfo = helper.createElement(
    "p",
    [
      infoIcon,
      "current weather details will be displayed for default location on app load",
    ],
    {
      class: "text-xs text-gray-300  text-center",
    }
  );

  const formFooter = helper.createElement("div", [formInfo], null);

  const wrapper = helper.createElement(
    "div",
    [formHeader, formBody, formFooter],
    {
      class: "form-content-wrapper",
    }
  );
  const form = helper.createElement("form", [wrapper], {
    class:
      "default-location-form bg-gray-800 border-[] relative bottom-[100px] rounded-md overflow-hidden shadow-[rgba(0,0,0,0.3)_0px_19px _38px,rgba(0,0,0,0.22)_0px_15px_12px] w-[90%] max-w-[460px] min-w-[240px]",
  });

  const overlay = helper.createElement("div", [form], {
    class:
      "overlay fixed inset-0 z-10 bg-[rgba(0,0,0,0.5)] flex justify-center items-center pt-[20px] px-4 min-w-[270px]",
  });
  return overlay;
}

export default defaultLoactionForm;
