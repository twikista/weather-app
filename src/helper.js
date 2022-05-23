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

//create pecial character in a span
const degreeCharacter = (char) => {
  const degreeChar = document.createElement("span");
  degreeChar.innerHTML = char;
  return degreeChar;
};

//special character as a string
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
