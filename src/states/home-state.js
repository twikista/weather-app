const renderHomeState = (() => {
  let isRenderingHome = true;

  const setIsRenderingHome = (newState) => {
    isRenderingHome = newState;
    return isRenderingHome;
  };

  const renderingHome = () => {
    return isRenderingHome;
  };

  return { setIsRenderingHome, renderingHome };
})();

export default renderHomeState;
