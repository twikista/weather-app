import * as helper from "../../helper";
import weatherCardTop from "../weatherCard-component/weatherCardTop";
import favorites from "../../data/favorites-data";

function renderFavorite() {
  const renderNoFavorite = () => {
    const sadFaceIcon = helper.createElement(
      "span",
      ["sentiment_dissatisfied"],
      {
        class:
          "material-icons-outlined text-slate-800 text-[200px] block  font-light",
      }
    );

    const text = helper.createElement("p", ["no items in favorites"], {
      class: "uppercase text-2xl",
    });

    const wrapper = helper.createElement("div", [sadFaceIcon, text], {
      class: "flex flex-col justify-center items-center gap-y-[50px]",
    });
    return wrapper;
  };

  const favoritesArray = favorites.favoritesData();
  const isFavoriteEmpty = favoritesArray.length === 0;
  let fragment = new DocumentFragment();
  favoritesArray.forEach((favorite) => {
    const weathercard = weatherCardTop(favorite);
    fragment.append(weathercard);
  });

  //condtionally render section based length of favoritesArray
  const section = helper.createElement(
    "section",
    [isFavoriteEmpty ? renderNoFavorite() : fragment],
    {
      class: "flex flex-col ",
    }
  );
  // console.log(fragment);
  const main = document.querySelector("main");
  main.innerHTML = "";
  main.append(section);
}

export default renderFavorite;
