import getData from "./fetch-data";
import store from "./location-store";
import weatherCard from "./weatherCard";
import defaultDataStore from "./location-data-store";
import { formatDistanceToNowStrict, parseISO } from "date-fns";

const defaulPageRender = () => {
  const defaultLocationData = defaultDataStore.defaultLocationData();
  console.log(defaultLocationData);
  const fragment = new DocumentFragment();
  fragment.append(weatherCard(defaultLocationData));
  console.log(formatDistanceToNowStrict(parseISO(defaultLocationData[0].time)));

  return fragment;
};

export default defaulPageRender;
