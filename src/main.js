import * as helper from "./helper";
import onPageLoad from "./home";

const mainSection = () => {
  //main element
  const fragment = new DocumentFragment();
  fragment.append(onPageLoad());
  const main = helper.createElement("main", [fragment], {
    class:
      "w-[90%] max-w-2xl flex flex-column justify-center items-center mx-auto bg-gray-900 relative",
  });
  return main;
};

export default mainSection;
