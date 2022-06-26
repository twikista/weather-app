import * as helper from "../helper";

const main = () => {
  /*
  main element
  */
  const main = helper.createElement("main", [], {
    class:
      "w-[90%] max-w-2xl flex flex-column justify-center items-center mx-auto bg-gray-900 relative",
  });
  return main;
};

export default main;
