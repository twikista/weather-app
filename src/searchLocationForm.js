import * as helper from "./helper";

function getLocation() {
  const form = document.querySelector("form");
  const input = form.elements["input"];
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const location = input.value;
    getData(location);
  });
}

//create search input field
const searchField = helper.createElement("input", [], {
  type: "text",
  id: "search-field",
  placeholder: "Enter location",
});

//create search button
const searchBtn = helper.createElement("input", null, {
  type: "submit",
  id: "search-btn",
});

//creat search form
const form = helper.createElement("form", [searchField, searchBtn], null);

export default form;
