import * as helper from "./helper";
import { styles } from "./classes";

const headerSection = () => {
  const fragment = new DocumentFragment();

  /******nav left section*****/
  const logoDeg = helper.degreeCharacter("&deg;");
  logoDeg.classList.add("text-pink-400", "text-xl");
  const logo = helper.createElement("h2", ["weda", logoDeg], {
    class: "font-barlow font-semibold text-gray-400 text-2xl shadow-sky-500",
  });
  const navLeft = helper.createElement("div", [logo], {
    class: "mb-2 py-[1px] logo-container sm:flex-1 sm:ml-8",
  });

  /******nav right section*********/

  //create search box
  const searchInput = helper.createElement("input", [], {
    type: "text",
    id: "search-input",
    placeholder: "Enter weather location ",
    class:
      "bg-transparent  outline-none apperance-none pl-4 py-2 h-full placeholder:text-sm placeholder:text-gray-300",
    autocomplete: "off",
  });

  //search icon <i class="fa-solid fa-magnifying-glass"></i>
  const searchIcon = helper.createElement("i", [], {
    class: "fas fa-search text-slate-400 hover:text-indigo-300 ",
  });

  //create search button
  const searchButton = helper.createElement("button", [searchIcon], {
    type: "submit",
    id: "search-btn",
    class: "border-l-2 border-l-slate-500 px-3 py-[1px] min-w-min h-full",
  });

  //creat search form
  const form = helper.createElement("form", [searchInput, searchButton], {
    class:
      "grid grid-cols-[1fr_auto] justify-center items-center w-[90%] max-w-xs rounded-full bg-gray-700 px-2 pt-[1.9px] focus-within:bg-gray-900 focus-within:border-slate-600 focus-within:border-2 sm:justify-self-end shadow-[rgba(60,64,67,0.3)_0px_1px_2px_0px,rgba(60,64,67,0.15)_0px_2px_6px_2px]",
  });

  //
  const navRight = helper.createElement("div", [form], {
    class:
      "flex justify-center items-center w-full pb-2 sm:flex-3 sm:justify-end ",
  });

  /*****nav element */
  const nav = helper.createElement("nav", [navLeft, navRight], {
    class:
      "flex flex-col justify-center items-center w-full sm:flex-row sm:justify-between max-w-[960px]",
  });

  fragment.append(nav);

  const header = helper.createElement("header", [fragment], {
    class:
      " px-2 py-2 w-full flex justify-center bg-gray-800 shadow-[rgba(0,0,0,0.12)_0px_1px_3px,rgba(0,0,0,0.24)_0px_1px_2px]",
  });
  return header;
};

export default headerSection;

//box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset;

//box-shadow: rgba(0, 0, 0, 0.12)_0px_1px_3px,rgba(0, 0, 0, 0.24)_0px_1px_2px;

//box-shadow: rgba(60, 64, 67, 0.3)_0px_1px_2px_0px,rgba(60, 64, 67, 0.15)_0px_2px_6px_2px;
