import * as helper from "./helper";
import { styles } from "./classes";

const headerSection = () => {
  const fragment = new DocumentFragment();

  /******nav left section*****/
  const logoDeg = helper.degreeCharacter("&deg;");
  logoDeg.classList.add("text-pink-500", "text-xl");
  const logo = helper.createElement("h2", ["weda", logoDeg], {
    class: "font-barlow font-semibold text-sky-400 text-2xl",
  });
  const navLeft = helper.createElement("div", [logo], {
    class: "mb-2 py-[1px] logo-container",
  });

  /******nav right section*********/

  //create search box
  const searchInput = helper.createElement("input", [], {
    type: "text",
    id: "search-input",
    placeholder: "Enter weather location ",
    class:
      "bg-transparent  outline-none apperance-none pl-4 py-2 h-full placeholder:text-sm placeholder:text-gray-400",
  });

  //search icon <i class="fa-solid fa-magnifying-glass"></i>
  const searchIcon = helper.createElement("i", [], {
    class: "fas fa-search text-gray-400 ",
  });

  //create search button
  const searchButton = helper.createElement("button", [searchIcon], {
    type: "submit",
    id: "search-btn",
    class: "border-l-2 border-l-gray-600 px-3 py-[1px] min-w-min h-full",
  });

  //creat search form
  const form = helper.createElement("form", [searchInput, searchButton], {
    class:
      "grid grid-cols-[1fr_auto] justify-center items-center w-[95%] max-w-xs rounded-full bg-gray-700 px-2 pt-[1.9px] focus-within:bg-gray-900 focus-within:border-gray-600 focus-within:border-2",
  });

  //
  const navRight = helper.createElement("div", [form], {
    class: "flex justify-center items-center w-full pb-2",
  });

  /*****nav element */
  const nav = helper.createElement("nav", [navLeft, navRight], {
    class: "flex flex-col justify-center items-center w-full",
  });

  fragment.append(nav);

  const header = helper.createElement("header", [fragment], {
    class: "border-b-2 border-gray-500 px-2 py-2 w-full mb-4",
  });
  return header;
};

export default headerSection;
