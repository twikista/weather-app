const renderState = (() => {
  let isRenderingDefault = null;

  const setIsRenderingDefault = (newState) => {
    isRenderingDefault = newState;
    console.log(isRenderingDefault);
    return isRenderingDefault;
  };

  const currentState = () => {
    return isRenderingDefault;
  };

  return { setIsRenderingDefault, currentState };
})();

export default renderState;
