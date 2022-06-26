import * as helper from "../../helper";
import renderHomeState from "../../states/home-state";
import renderFavoriteState from "../../states/favorite-state";
import { formatDistanceToNowStrict, parseISO } from "date-fns";

const cardHeaderBottom = (data) => {
  const timeSinceLastUpdate = (data) => {
    const refreshIcon = helper.createElement("span", ["refresh"], {
      class:
        "refresh-icon material-icons-outlined  text-pink-500 cursor-pointer hover:scale-110 hover:font-bold transiton-[scale] duration-200 ease-in",
    });

    // const timeStamp = new Date(data).getTime();
    // const timeStamp1 = new Date().getTime();
    // console.log(formatDistanceToNowStrict(data.currentTime));
    // const lastupdated = formatDistanceToNowStrict(timeStamp);
    // console.log(data.currentTime);

    const lastWeatherUpdateTime = helper.createElement(
      "span",
      [`Updated: ${formatDistanceToNowStrict(data.currentTime)} ago`],
      {
        class: "last-updated- text-slate-400  text-[10px] sm:text-xs",
      }
    );

    const timeSinceLastUpdateDiv = helper.createElement(
      "div",
      [lastWeatherUpdateTime, refreshIcon],
      { class: "flex" }
    );

    return timeSinceLastUpdateDiv;
  };

  const addToFavorite = () => {
    /*add to favorite*/
    const favoriteIcon = helper.createElement("span", ["favorite"], {
      class:
        "material-icons-outlined text-pink-500 cursor-pointer text-sm pr-[3px]",
    });
    const addToFavoriteBTn = helper.createElement(
      "button",
      [favoriteIcon, "add to favorite"],
      { class: "favorite-btn flex items-cente text-sm" }
    );
    const addToFavoriteDiv = helper.createElement("div", [addToFavoriteBTn], {
      class: "add-favorite flex items-center ",
    });

    return addToFavoriteDiv;
  };

  const removeFromFavorite = () => {
    const removeIcon = helper.createElement("span", ["remove_circle"], {
      class: "material-icons-outlined",
    });
    const removeFromFavoriteBtn = helper.createElement(
      "span",
      [removeIcon, "remove"],
      { id: `${data.id}`, class: "remove-favorite flex items-center" }
    );
    return removeFromFavoriteBtn;
  };

  const headerBottomLeftFragment = new DocumentFragment();

  renderHomeState.renderingHome()
    ? headerBottomLeftFragment.append(timeSinceLastUpdate(data))
    : headerBottomLeftFragment.append(addToFavorite());

  const headerBottomLeft = helper.createElement(
    "div",
    [headerBottomLeftFragment],
    null
  );

  const headerBottomRight = helper.createElement("div", [removeFromFavorite()]);

  //

  const headerBottom = helper.createElement(
    "div",
    renderFavoriteState.renderingFavorite()
      ? [headerBottomLeft, headerBottomRight]
      : [headerBottomLeft],
    {
      class: `bottom-div`,
    }
  );
  //
  console.log(
    renderHomeState.renderingHome(),
    renderFavoriteState.renderingFavorite()
  );
  return headerBottom;
};

export default cardHeaderBottom;
