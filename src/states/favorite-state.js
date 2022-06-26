const renderFavoriteState = (() => {
  let isRenderingFavorite = false;

  const setIsRenderingFavorite = (newState) => {
    isRenderingFavorite = newState;
    return isRenderingFavorite;
  };

  const renderingFavorite = () => {
    return isRenderingFavorite;
  };

  console.log(isRenderingFavorite);

  return { setIsRenderingFavorite, renderingFavorite };
})();

export default renderFavoriteState;
