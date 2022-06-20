import * as helper from "./helper";

const headerSection = () => {
  const fragment = new DocumentFragment();

  /******nav left section*****/
  const sunnyIcon = helper.createElement("span", ["wb_sunny"], {
    class: "material-icons-outlined text-pink-400 text-lg",
  });
  const logo = helper.createElement("h2", ["weda", sunnyIcon], {
    class:
      "app-logo font-barlow font-semibold text-gray-400 text-2xl shadow-sky-500 cursor-pointer flex",
  });
  const navLeft = helper.createElement("div", [logo], {
    class: "mb-2 py-[1px] logo-container pr-[10px]",
  });

  /******nav right section*********/

  /*
  nav-menu
  */
  const homeButton = helper.createElement("button", ["home"], {
    class:
      "inline-block home-btn uppercase font-semibold text-gray-300 border-0 hover:text-indigo-300 focus:text-indigo-300 focus:border-b-2 focus:border-solid focus:border-indigo-300 py-1 sm:py-0 transiton duration-200 ease-in-out",
  });

  const favSpan = helper.createElement("span", ["1"], {
    class:
      " font-light rounded-full bg-indigo-400 h-[18px] w-[18px] bottom-[-10] flex justify-center item-center text-[10px] ml-[2px]",
  });
  const favoriteButton = helper.createElement("button", ["favorite"], {
    class:
      "favorite-btn uppercase font-semibold text-gray-300 border-0 hover:text-indigo-300 focus:text-indigo-300 focus:border-b-2 focus:border-solid focus:border-indigo-300 py-1 sm:py-0 transiton duration-200 ease-in-out ",
  });
  const favWrapper = helper.createElement("span", [favoriteButton, favSpan], {
    class: "flex items-center",
  });
  const settingsButton = helper.createElement("button", ["settings"], {
    class:
      "settings-btn uppercase font-semibold text-gray-300 border-0 hover:text-indigo-300 focus:text-indigo-300 focus:border-b-2 focus:border-solid focus:border-indigo-300 py-1 sm:py-0 transiton duration-200 ease-in-out",
  });
  const navMenu = helper.createElement(
    "div",
    [homeButton, favWrapper, settingsButton],
    {
      class:
        "flex w-full justify-around items-end flex-1 sm:max-w-[220px] text-sm gap-x-3 ",
    }
  );

  /*
  search box
  */
  //create search box
  const searchInput = helper.createElement("input", [], {
    type: "search",
    id: "search-input",
    placeholder: "Enter weather location ",
    class:
      "bg-transparent  outline-none apperance-none pl-8 py-2 h-full placeholder:text-sm focus:placeholder:text-indigo-200 placeholder:text-gray-300 font-fira",
    autocomplete: "off",
  });

  //search icon
  const searchIcon = helper.createElement("i", [], {
    class: "fas fa-search text-slate-400 hover:text-indigo-300 ",
  });

  //create search button
  const searchButton = helper.createElement("button", [searchIcon], {
    type: "submit",
    id: "search-btn",
    class: "border-l-2 border-l-slate-600 px-3 py-2 min-w-min h-full",
  });

  //creat search form
  const form = helper.createElement("form", [searchInput, searchButton], {
    class:
      "location grid grid-cols-[1fr_auto] justify-center items-center w-[90%] min-w-[280px] max-w-xs rounded-full bg-gray-700 px-2 focus-within:bg-gray-900 focus-within:border-slate-600 focus-within:border-2 sm:justify-self-end shadow-[rgba(60,64,67,0.3)_0px_1px_2px_0px,rgba(60,64,67,0.15)_0px_2px_6px_2px sm:flex-1]",
  });

  //
  const navRight = helper.createElement("div", [navMenu, form], {
    class:
      "flex flex-col-reverse sm:flex-row justify-center items-center w-full sm:pb-2 sm:flex-2 sm:justify-end gap-y-1 sm:gap-x-4",
  });

  /*****nav element */
  const nav = helper.createElement("nav", [navLeft, navRight], {
    class:
      "nav flex flex-col justify-center items-center w-[90%] sm:flex-row sm:justify-between gap-x-5",
  });

  fragment.append(nav);

  const header = helper.createElement("header", [fragment], {
    class:
      " px-2 sm:py-2 w-full flex justify-center bg-gray-800 shadow-[rgba(0,0,0,0.12)_0px_1px_3px,rgba(0,0,0,0.24)_0px_1px_2px]",
  });
  return header;
};

export default headerSection;
