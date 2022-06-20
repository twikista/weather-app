import weatherCard from "./weatherCard";
import renderState from "./renderState";

const defaulPageRender = (weatherData) => {
  renderState.setIsRenderingDefault(true);
  const fragment = new DocumentFragment();
  fragment.append(weatherCard(weatherData));

  return fragment;
};

export default defaulPageRender;
