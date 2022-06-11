const renderState = (() => {
  let isRenderingDefault = false;
  const setIsRenderingDefault = (newState) => {
    isRenderingDefault = newState;
    return isRenderingDefault;
  };

  const currentState = () => {
    return isRenderingDefault;
  };

  return { setIsRenderingDefault, currentState };
})();

export default renderState;
