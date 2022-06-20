import * as helper from "./helper";
import renderOnPageLoad from "./home";

const mainSection = () => {
  /*
  main element
  */
  const main = helper.createElement("main", [renderOnPageLoad()], {
    class:
      "w-[90%] max-w-2xl flex flex-column justify-center items-center mx-auto bg-gray-900 relative",
  });

  return main;
};

export default mainSection;
