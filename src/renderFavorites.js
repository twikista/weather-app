import cardHeaderBottom from "./cardHeaderBottom";
import * as helper from "./helper";
import weatherCardHeader from "./weatherCardHeader";
import favoriteStore from "./favorites-store";

function renderFavorite() {
  const main = document.querySelector("main");
  const favorites = favoriteStore.favoritesArray();
  let fragment = new DocumentFragment();
  favorites.forEach((favorite) => {
    // const article = helper.createElement(
    //   "article",
    //   [weatherCardHeader(favorite)],
    //   {}
    // );
    const weathercard = weatherCardHeader(favorite);
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
