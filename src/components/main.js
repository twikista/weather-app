import * as helper from "../helper";
import renderHome from "./main-components/renderHome";

const main = () => {
  /*
  main element
  */
  const main = helper.createElement("main", [renderHome()], {
    class:
      "w-[90%] max-w-2xl flex flex-column justify-center items-center mx-auto bg-gray-900 relative",
  });
  return main;
};

export default main;
