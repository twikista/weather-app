import * as helper from "./helper";

const tempUnitToggler = helper.createElement("input", [], {
  type: "checkbox",
  id: "temp-unit-toggler",
});

const currentTempUnit = helper.createElement("label", ["celsius"], {
  for: "temp-unit-toggler",
});

const tempUnitContainer = helper.createElement(
  "div",
  [tempUnitToggler, currentTempUnit],
  {
    class: "temp-unit-wrapper",
  }
);

export default tempUnitContainer;
