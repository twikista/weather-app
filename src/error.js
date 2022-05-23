import * as helper from "./helper";

export function checkError(response) {
  if (response.status !== 200) {
    throw new Error("Can't get weather details");
  }
  return response;
}

export function displayOnError(err, isLoading) {
  const sadFace = helper.special("&lpar;&gt;&lowbar;&lt;&rpar;");
  const sadFaceSpan = helper.createElement("span", [sadFace], {
    class:
      "text-4xl leading-normal tracking-tighter font-medium mb-1 sm:text-6xl sm:mb-3",
  });
  const errorMessage = helper.createElement("h2", [err.message], {
    class: "text-2xl sm:text-4xl font-medium",
  });

  const dashOne = helper.degreeCharacter("&hyphen;");
  dashOne.classList.add("pr-[1px]");
  const dashTwo = helper.degreeCharacter("&hyphen;");
  dashTwo.classList.add("pr-[1px]");

  const fixOne = helper.createElement(
    "p",
    [dashOne, "check your internet connection"],
    null
  );
  const fixTwo = helper.createElement(
    "p",
    [dashTwo, "ensure weather location is correctly spelt"],
    null
  );

  const fixSuggestion = helper.createElement("div", [fixOne, fixTwo], {
    class: "border-[1px] border-slate-400 rounded-lg px-2 py-2 mt-5",
  });

  const onErrorDiv = helper.createElement(
    "div",
    [sadFaceSpan, errorMessage, fixSuggestion],
    {
      class:
        "flex flex-col items-center justify-start font-sanspro text-slate-300 text-sm sm:text-base w-full h-full mt-[150px]",
    }
  );
  const main = document.querySelector("main");
  main.innerHTML = "";
  main.append(onErrorDiv);
  isLoading = false;
  console.log(isLoading);
  return main;
}
