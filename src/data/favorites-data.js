const favorites = (() => {
  const favoriteKey = "favorite";
  let favoriteLocations = getFavoritesFromStorage();

  function getFavoritesFromStorage() {
    const retrievedFavorites =
      JSON.parse(localStorage.getItem(favoriteKey)) || [];
    console.log(retrievedFavorites);
    return retrievedFavorites;
  }

  function setFavoritesToStorage() {
    localStorage.setItem(favoriteKey, JSON.stringify(favoriteLocations));
  }

  const addFavorite = (favorite) => {
    const [obj] = favorite;
    console.log(favorite);
    console.log(obj);
    favoriteLocations = [...favoriteLocations, obj];
    setFavoritesToStorage();
    console.log(favoriteLocations);
  };

  const deleteFavorite = (id) => {
    const newFavorites = favoriteLocations.filter(
      (favorite) => favorite.id !== id
    );
    favoriteLocations = newFavorites;
    setFavoritesToStorage();
  };

  /*
  const clearDefaultData = () => {
    favoriteLocations = [];
    setDataToStorage();
  };
  */

  const updateFavorites = ([newFavorites]) => {
    console.log(newFavorites.lastupdated);
    const updatedArray = favoriteLocations.map((favorite) =>
      favorite.city === newFavorites.city
        ? (favorite = { ...newFavorites })
        : favorite
    );
    console.log(updatedArray);
    favoriteLocations = updatedArray;
    setFavoritesToStorage();
    console.log(favoriteLocations);
  };
  /*
  const defaultRequestState = () => {
    isDefaultRequest = defaultLocationWeatherData === null ? true : false;
    return isDefaultRequest;
  };
*/

  const favoritesData = () => {
    return favoriteLocations;
  };

  return {
    addFavorite,
    deleteFavorite,
    favoritesData,
    updateFavorites,
    // defaultRequestState,
  };
})();

export default favorites;
