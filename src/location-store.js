const store = (() => {
  const locationKey = "defaultLocation";
  let defaultLocation = getLocationFromStorage();

  function getLocationFromStorage() {
    const retrievedLocation = localStorage.getItem(locationKey) || null;
    console.log(retrievedLocation);
    return retrievedLocation;
  }

  function setLocationToStorage() {
    localStorage.setItem(locationKey, defaultLocation);
  }

  const setLocation = (location) => {
    if (defaultLocation !== null) {
      return;
    }
    defaultLocation = location;
    setLocationToStorage();
    console.log(defaultLocation);
  };

  const location = () => {
    return defaultLocation;
  };

  return { setLocation, location };
})();

export default store;
