const favoriteState = (() => {
  let isRenderingFavorite = false;

  const setIsRenderingFavorite = (newState) => {
    isRenderingFavorite = newState;
    return isRenderingFavorite;
  };

  const currentFavoriteState = () => {
    return isRenderingFavorite;
  };

  console.log(isRenderingFavorite);

  return { setIsRenderingFavorite, currentFavoriteState };
})();

export default favoriteState;
