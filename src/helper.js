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

const degreeCharacter = (f) => {
  const degreeChar = document.createElement("span");
  degreeChar.innerHTML = `&deg;${f}`;
  return degreeChar;
};

const addIcon = (keyword, styles) => {
  const span = createElement("span", [keyword], {
    class: "material-icons-outlined",
  });
  addClass(span, styles);
  return span;
};

export { addClass, createElement, degreeCharacter, addIcon };
