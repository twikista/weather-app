import getData from "./fetch-data";
import tranformData from "./transorm-data";
import form from "./searchLocationForm";

function getLocation() {
  const form = document.querySelector("form");
  const input = form.elements["search-field"];
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const location = input.value;
    //getData(location);
    console.log(location);
  });
}

const events = () => {
  getLocation();
};

export default events;

//console.log(form.elements);
