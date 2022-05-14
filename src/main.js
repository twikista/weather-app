import * as helper from "./helper";

const mainSection = () => {
  const p = helper.createElement("h1", ["Hello World"], {
    class: "text-4xl text-gray-200",
  });

  //main element
  const fragment = new DocumentFragment();
  fragment.append(p);
  const main = helper.createElement("main", [fragment], null);
  return main;
};

export default mainSection;
