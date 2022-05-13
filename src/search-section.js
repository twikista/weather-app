import * as helper from "./helper";
import form from "./searchLocationForm";

const searchSection = helper.createElement("section", [form], {
  class: "search-section",
});

export default searchSection;
