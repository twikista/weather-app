const defaultLocation = (() => {
  const locationKey = "defaultLocation";
  let location = getLocationFromStorage();

  function getLocationFromStorage() {
    const retrievedLocation = localStorage.getItem(locationKey) || null;
    return retrievedLocation;
  }

  function setLocationToStorage() {
    localStorage.setItem(locationKey, location);
  }

  const setLocation = (selectedLocation) => {
    if (location !== null) {
      return;
    }
    location = selectedLocation;
    setLocationToStorage();
    console.log(location);
  };

  const savedLocation = () => {
    return location;
  };

  return { setLocation, savedLocation };
})();

export default defaultLocation;
