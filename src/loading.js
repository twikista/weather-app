import * as helper from "./helper";
import styles from "./classes";

function loading(isLoading) {
  const loadingDiv = helper.createElement("div", ["Loading..."], {
    class: "text-2xl flex flex-row justify-center items-center",
  });
  const main = document.querySelector("main");
  if (isLoading) {
    main.innerHTML = "";
    main.append(loadingDiv);
  }

  return main;
}

export default loading;
