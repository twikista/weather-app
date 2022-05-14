import * as helper from "./helper";

const mainSection = () => {
  const p = helper.createElement("h1", ["Hello World"], {
    class: "text-4xl text-gray-200",
  });
  const section = helper.createElement("section", [p], null);

  //main element
  const fragment = new DocumentFragment();
  fragment.append(section);
  const main = helper.createElement("main", [fragment], null);
  return main;
};

export default mainSection;
