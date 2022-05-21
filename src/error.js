import * as helper from "./helper";

export function checkError(response) {
  if (response.status !== 200) {
    throw new Error("Error processing your request");
  }
  return response;
}

export function displayOnError(err, isLoading) {
  const sadFace = helper.special("&lpar;&gt;&lowbar;&lt;&rpar;");
  const sadFaceSpan = helper.createElement("span", [sadFace], {
    class: "text-8xl leading-normal ",
  });
  const onErrorPara = helper.createElement("p", [err.message], null);

  const fixSuggestionHeading = helper.createElement(
    "h3",
    ["try the following:"],
    null
  );
  const firstLi = helper.createElement(
    "li",
    ["check, to ensure you are connected to the internet"],
    null
  );
  const secondLi = helper.createElement(
    "li",
    ["ensure the location is correctky spelt"],
    null
  );

  const ul = helper.createElement("ul", [firstLi, secondLi], {
    class: "list-disc list-inside indent-6 leading-loose",
  });
  const fixSuggestion = helper.createElement(
    "div",
    [fixSuggestionHeading, ul],
    null
  );

  const onErrorDiv = helper.createElement(
    "div",
    [sadFaceSpan, onErrorPara, fixSuggestion],
    {
      class: "flex flex-col items-center justify-center font-sanspro",
    }
  );
  const main = document.querySelector("main");
  main.innerHTML = "";
  main.append(onErrorDiv);
  isLoading = false;
  console.log(isLoading);
  return main;
}

/*const main = document.querySelector("main");
const sadFace = helper.special("&lpar;&gt;&lowbar;&lt;&rpae;");
const sadFaceSpan = helper.createElement("span"[sadFace], null);
const onErrorPara = helper.createElement("p", [
  "Something went wrong while processing your request. try again",
]);
const onErrorDiv = helper.createElement(
  "div"[(sadFaceSpan, onErrorPara)],
  null
);
main.append(onErrorDiv);
return main;*/
