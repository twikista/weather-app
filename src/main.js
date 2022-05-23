import classes from "./classes";
import * as helper from "./helper";
import onPageLoad from "./home";

const mainSection = () => {
  const section = helper.createElement("section", [onPageLoad()], {
    class: "flex justify-center items-start px-4 text-justify h-full",
  });

  //main element
  const fragment = new DocumentFragment();
  fragment.append(section);
  const main = helper.createElement("main", [fragment], {
    class:
      "w-[90%] max-w-2xl flex flex-column justify-center items-center mx-auto bg-gray-900 relative",
  });
  return main;
};

export default mainSection;
