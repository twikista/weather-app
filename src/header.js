import * as helper from "./helper";

const headerSection = () => {
  const fragment = new DocumentFragment();

  /******nav left section*****/
  const logo = helper.createElement("h3", ["App-Logo"], { class: "teal" });
  const navLeft = helper.createElement("div", [logo], {
    class: "logo-container",
  });

  /******nav right section*********/

  //create search box
  const searchInput = helper.createElement("input", [], {
    type: "text",
    id: "search-input",
    placeholder: "Enter weather location",
  });

  //search icon
  const searchIcon = helper.createElement("i", [], { class: "fas fa-search" });

  //create search button
  const searchButton = helper.createElement("input", [searchIcon], {
    type: "submit",
    id: "search-btn",
  });

  //creat search form
  const form = helper.createElement("form", [searchInput, searchButton], null);

  //
  const navRight = helper.createElement("div", [form], null);

  /*****nav element */
  const nav = helper.createElement("nav", [navLeft, navRight], null);

  fragment.append(nav);

  const header = helper.createElement("header", [fragment], {
    class: "app-header",
  });
  return header;
};

export default headerSection;
