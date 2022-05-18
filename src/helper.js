function addClass(ele, classes) {
  classes.forEach((i) => ele.classList.add(i));
}

const createElement = (tag, node, attribute) => {
  const element = document.createElement(tag);
  if (node) {
    node.forEach((i) => element.append(i));
  }
  if (attribute) {
    const attributes = Object.keys(attribute);
    attributes.forEach((i) => element.setAttribute(i, attribute[i]));
  }

  return element;
};

const degreeCharacter = (char) => {
  const degreeChar = document.createElement("span");
  // const letter = createElement("span", [f], null);
  degreeChar.innerHTML = char;
  //degreeChar.classList.add("text-sm");
  return degreeChar;
};

const special = (char) => {
  const character = document.createElement("span");
  character.innerHTML = char;
  const rechar = character.textContent;
  return rechar;
};

const addIcon = (keyword, styles) => {
  const span = createElement("span", [keyword], {
    class: "material-icons-outlined",
  });
  addClass(span, styles);
  return span;
};

export { addClass, createElement, degreeCharacter, addIcon, special };
