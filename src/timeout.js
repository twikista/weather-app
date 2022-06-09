import defaultLoactionForm from "./choose-location";

const setTimeOut = (section, callback) => {
  const id = setTimeout(() => {
    section.append(defaultLoactionForm());
    callback(id);
  }, 2000);
  console.log(id);
};

export default setTimeOut;
