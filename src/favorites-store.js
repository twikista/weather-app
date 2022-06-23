const favoriteStore = (() => {
  const favoriteKey = "favorite";
  let favorites = getFavoritesFromStorage();

  function getFavoritesFromStorage() {
    const retrievedFavorites =
      JSON.parse(localStorage.getItem(favoriteKey)) || [];
    console.log(retrievedFavorites);
    return retrievedFavorites;
  }

  function setFavoritesToStorage() {
    localStorage.setItem(favoriteKey, JSON.stringify(favorites));
  }

  const addFavorite = (favorite) => {
    const [obj] = favorite;
    console.log(favorite);
    console.log(obj);
    favorites = [...favorites, obj];
    setFavoritesToStorage();
    console.log(favorites);
  };

  const deleteFavorite = (id) => {
    const newFavorites = favorites.filter((favorite) => favorite.id !== id);
    favorites = newFavorites;
    setFavoritesToStorage();
  };

  const clearDefaultData = () => {
    favorites = [];
    setDataToStorage();
  };
  /*
  const defaultRequestState = () => {
    isDefaultRequest = defaultLocationWeatherData === null ? true : false;
    return isDefaultRequest;
  };
*/

  const favoritesArray = () => {
    return favorites;
  };

  return {
    addFavorite,
    deleteFavorite,
    favoritesArray,
    clearDefaultData,
    // defaultRequestState,
  };
})();

export default favoriteStore;
