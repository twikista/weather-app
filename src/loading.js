import * as helper from "./helper";
import renderingState from "./states/state";

function loading(isLoading) {
  const loadingDiv = helper.createElement("div", ["Loading..."], {
    class: "text-2xl flex flex-row justify-center items-center",
  });
  const main = document.querySelector("main");
  if (renderingState.isTruthy()) return;
  if (isLoading) {
    main.innerHTML = "";
    main.append(loadingDiv);
  }

  return main;
}

export default loading;
