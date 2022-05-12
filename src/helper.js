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

export { addClass, createElement };
