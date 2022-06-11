import weatherCardCurrent from "./weatherCardCurrent";
import weatherCardDefault from "./weatherCarddefault";
import renderState from "./renderState";

const weatherCardHeader = (weather) => {
  console.log(renderState.currentState());
  const viewToRender = renderState.currentState()
    ? weatherCardDefault(weather)
    : weatherCardCurrent(weather);
  return viewToRender;
};

export default weatherCardHeader;
