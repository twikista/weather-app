import * as helper from "./helper";
import { styles } from "./classes";

const headerSection = () => {
  const fragment = new DocumentFragment();

  /******nav left section*****/
  const logo = helper.createElement("h3", ["App-Logo"], { class: "teal" });
  const navLeft = helper.createElement("div", [logo], {
    class: "mb-2 py-[1px] logo-container",
  });

  /******nav right section*********/

  //create search box
  const searchInput = helper.createElement("input", [], {
    type: "text",
    id: "search-input",
    placeholder: "Enter weather location",
    class:
      "bg-transparent  outline-none apperance-none pl-2 placeholder:text-sm",
  });

  //search icon <i class="fa-solid fa-magnifying-glass"></i>
  const searchIcon = helper.createElement("i", [], {
    class: "fas fa-search text-gray-400 ",
  });

  //create search button
  const searchButton = helper.createElement("button", [searchIcon], {
    type: "submit",
    id: "search-btn",
    class: "border-l-2 border-l-gray-600 pl-2 py-[1px]",
  });

  //creat search form
  const form = helper.createElement("form", [searchInput, searchButton], {
    class:
      "flex justify-center items-center rounded-full bg-gray-700 px-2 py-[1.9px] focus-within:bg-gray-900 focus-within:border-gray-600 focus-within:border-2 w-full",
  });

  //
  const navRight = helper.createElement("div", [form], {
    class: "flex justify-center items-center w-full max-w-xs",
  });

  /*****nav element */
  const nav = helper.createElement("nav", [navLeft, navRight], {
    class: "flex flex-col justify-center items-center w-full",
  });

  fragment.append(nav);

  const header = helper.createElement("header", [fragment], {
    class: "border-b-[1px] border-indigo-500 px-2 py-2 w-full mb-4",
  });
  return header;
};

export default headerSection;
