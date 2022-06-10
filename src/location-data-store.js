const defaultDataStore = (() => {
  const locationKey = "defaultLocationWeatherData";
  let defaultLocationWeatherData = getDataFromStorage();
  let isDefaultRequest = null;

  function getDataFromStorage() {
    const retrievedWeatherData =
      JSON.parse(localStorage.getItem(locationKey)) || null;
    console.log(retrievedWeatherData);
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
    console.log(defaultLocationWeatherData);
  };

  const defaultRequestState = () => {
    isDefaultRequest = defaultLocationWeatherData === null ? true : false;
    return isDefaultRequest;
  };

  const defaultLocationData = () => {
    return defaultLocationWeatherData;
  };

  return { setData, defaultLocationData, defaultRequestState };
})();

export default defaultDataStore;
