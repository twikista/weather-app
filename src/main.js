import classes from "./classes";
import * as helper from "./helper";
import onPageLoad from "./onPageLoad";

const mainSection = () => {
  /*const p = helper.createElement(
    "h1",
    ["Enter a loaction to dislay weather details"],
    {
      class: "text-4xl text-gray-200",
    }
  );*/

  //const noData = helper.special('&lt;')
  const section = helper.createElement("section", [onPageLoad()], {
    class: "flex justify-center items-start px-4 text-justify h-full",
  });

  //main element
  const fragment = new DocumentFragment();
  fragment.append(section);
  const main = helper.createElement("main", [fragment], {
    class:
      "w-[90%] max-w-2xl flex flex-column justify-center items-center mx-auto   bg-gray-900",
  });
  return main;
};

export default mainSection;

//box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;

// box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
//box-shadow: rgba(0, 0, 0, 0.05)_0px_0px_0px_1px,rgb(209, 213, 219)_0px_0px_0px_1px_inset;

//shadow-[rgba(14,165,233,0.3)_2px_0px_2px_0px,rgba(14,165,233,0.3)_-2px_0px_2px_0px]
