const favorites = (() => {
  const favoriteKey = "favorite";
  let favoriteLocations = getFavoritesFromStorage();

  function getFavoritesFromStorage() {
    const retrievedFavorites =
      JSON.parse(localStorage.getItem(favoriteKey)) || [];
    return retrievedFavorites;
  }

  function setFavoritesToStorage() {
    localStorage.setItem(favoriteKey, JSON.stringify(favoriteLocations));
  }

  const addFavorite = (favorite) => {
    const [favoriteObject] = favorite;
    favoriteLocations = [...favoriteLocations, favoriteObject];
    setFavoritesToStorage();
  };

  const deleteFavorite = (id) => {
    const newFavorites = favoriteLocations.filter(
      (favorite) => favorite.id !== id
    );
    favoriteLocations = newFavorites;
    setFavoritesToStorage();
  };

  const updateFavorites = ([newFavorites]) => {
    const updatedArray = favoriteLocations.map((favorite) =>
      favorite.city === newFavorites.city
        ? (favorite = { ...newFavorites })
        : favorite
    );
    favoriteLocations = updatedArray;
    setFavoritesToStorage();
  };

  const favoritesData = () => {
    return favoriteLocations;
  };

  return {
    addFavorite,
    deleteFavorite,
    favoritesData,
    updateFavorites,
  };
})();

export default favorites;
