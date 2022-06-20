import defaultDataStore from "./location-data-store";
import renderState from "./renderState";
import { formatDistanceToNowStrict, parseISO } from "date-fns";

function autoUpdateTime() {
  const updateTime = document.querySelector(".update-time");
  const weather = defaultDataStore.defaultLocationData();
  const timeSnap = new Date(weather[0].time).getTime();
  if (updateTime) {
    updateTime.textContent = `updated: ${formatDistanceToNowStrict(
      timeSnap
    )} ago`;
  }
  console.log(updateTime.textContent);
}

function setTimeOut() {
  const timer = 300000;
  setInterval(() => {
    autoUpdateTime();
  }, timer);
}

function initialize() {
  setTimeOut();
}

export default initialize;