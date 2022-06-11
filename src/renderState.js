const renderState = () => {
  let isRenderingDefault = null;
  const setIsRenderingDefault = (newState) => {
    isRenderingDefault = newState;
    return isRenderingDefault;
  };

  return { setIsRenderingDefault };
};

export default renderState;
