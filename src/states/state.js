import renderFavoriteState from "./favorite-state";
import renderHomeState from "./home-state";

const renderingState = (() => {
  const home = () => {
    renderFavoriteState.setIsRenderingFavorite(false);
    renderHomeState.setIsRenderingHome(true);
  };

  const favorites = () => {
    renderFavoriteState.setIsRenderingFavorite(true);
    renderHomeState.setIsRenderingHome(true);
  };

  const searchOutput = () => {
    renderFavoriteState.setIsRenderingFavorite(false);
    renderHomeState.setIsRenderingHome(false);
  };

  const isTruthy = () => {
    let state =
      renderHomeState.renderingHome() && renderFavoriteState.renderingFavorite()
        ? true
        : false;
    return state;
  };

  return { home, favorites, searchOutput, isTruthy };
})();

export default renderingState;
