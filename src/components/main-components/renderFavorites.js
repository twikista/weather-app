import * as helper from "../../helper";
import weatherCardTop from "../weatherCard-component/weatherCardTop";
import favorites from "../../data/favorites-data";

function renderFavorite() {
  const main = document.querySelector("main");
  const favoritesArray = favorites.favoritesData();
  let fragment = new DocumentFragment();
  favoritesArray.forEach((favorite) => {
    // const article = helper.createElement(
    //   "article",
    //   [weatherCardHeader(favorite)],
    //   {}
    // );
    const weathercard = weatherCardTop(favorite);
    fragment.append(weathercard);
  });
  const section = helper.createElement("section", [fragment], {
    class: "flex flex-col",
  });
  // console.log(fragment);
  main.innerHTML = "";
  main.append(section);
}

export default renderFavorite;
