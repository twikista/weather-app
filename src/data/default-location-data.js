const defaultDataStore = (() => {
  const locationKey = "defaultLocationWeatherData";
  let defaultLocationWeatherData = getDataFromStorage();
  let isDefaultRequest = null;

  function getDataFromStorage() {
    const retrievedWeatherData =
      JSON.parse(localStorage.getItem(locationKey)) || null;
    return retrievedWeatherData;
  }

  function setDataToStorage() {
    localStorage.setItem(
      locationKey,
      JSON.stringify(defaultLocationWeatherData)
    );
  }

  const setData = (data) => {
    defaultLocationWeatherData = data;
    setDataToStorage();
  };

  const clearDefaultData = () => {
    defaultLocationWeatherData = null;
    setDataToStorage();
  };

  const defaultRequestState = () => {
    isDefaultRequest = defaultLocationWeatherData === null ? true : false;
    return isDefaultRequest;
  };

  const defaultLocationData = () => {
    return defaultLocationWeatherData;
  };

  return {
    setData,
    defaultLocationData,
    clearDefaultData,
    defaultRequestState,
  };
})();

export default defaultDataStore;
