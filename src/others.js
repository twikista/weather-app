import defaultDataStore from "./data/default-location-data";
import renderHomeState from "./states/home-state";
import { formatDistanceToNowStrict, parseISO } from "date-fns";

function autoUpdateTime() {
  const updateTime = document.querySelector(".last-updated");
  const weather = defaultDataStore.defaultLocationData();
  const timeSnap = new Date(weather[0].time).getTime();
  if (updateTime) {
    updateTime.textContent = `updated: ${formatDistanceToNowStrict(
      timeSnap
    )} ago`;
  }
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
