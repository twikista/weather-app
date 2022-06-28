import * as helper from "../../helper";
import renderHomeState from "../../states/home-state";
import renderFavoriteState from "../../states/favorite-state";
import { formatDistanceToNowStrict, parseISO } from "date-fns";

const cardHeaderBottom = (data) => {
  const updateWeather = () => {
    const updateIcon = helper.createElement("span", ["sync"], {
      class:
        "update-icon material-icons-outlined text-pink-500 cursor-pointer pr-[3px] hover:animate-spin",
    });

    const updateBtn = helper.createElement("button", [updateIcon, "update"], {
      class: `update-btn flex justify-center items-center px-[5px] py-[3px] rounded-[5px] text-slate-300 text-xs border-slate-500 border-solid border-[1px] cursor-pointer hover:border-purple-400 hover:boder-indigo-700 hover:text-purple-400 hover:scale-[1.02] font-semibold  transiton duration-[50] ease-in w-[100%] min-w-[100px] flex-1 capitalize`,
    });

    // const timeStamp = new Date(data).getTime();
    // const timeStamp1 = new Date().getTime();
    // console.log(formatDistanceToNowStrict(data.currentTime));
    // const lastupdated = formatDistanceToNowStrict(timeStamp);
    // console.log(data.currentTime);

    /*const lastWeatherUpdateTime = helper.createElement(
      "span",
      [`Updated: ${formatDistanceToNowStrict(data.currentTime)} ago`],
      {
        class: "last-updated- text-slate-400  text-[10px] sm:text-sm",
      }
    );*/

    const updateBtnDiv = helper.createElement("div", [updateBtn], {
      class: "flex justify-between items-center",
    });

    return updateBtnDiv;
  };

  const addToFavorite = () => {
    /*add to favorite*/
    const favoriteIcon = helper.createElement("span", ["favorite"], {
      class:
        "favorite-icon material-icons-outlined text-pink-500 cursor-pointer text-sm pr-[3px]",
    });
    const addToFavoriteBTn = helper.createElement(
      "button",
      [favoriteIcon, "add to favorite"],
      {
        class:
          "favorite-btn  flex justify-center items-center px-[5px] py-[3px] rounded-[5px] text-slate-300 text-xs border-slate-500 border-solid border-[1px] cursor-pointer hover:border-purple-400 hover:boder-indigo-700 hover:text-purple-400 hover:scale-[1.02] font-semibold  transiton duration-[50] ease-in w-[100%] min-w-[100px] flex-1 capitalize",
      }
    );
    const addToFavoriteDiv = helper.createElement("div", [addToFavoriteBTn], {
      class: "add-favorite flex items-center ",
    });

    return addToFavoriteDiv;
  };

  const removeFromFavorite = () => {
    const removeIcon = helper.createElement("span", ["delete"], {
      class:
        "remove-icon material-icons-outlined text-pink-500 cursor-pointer pr-[3px]",
    });

    const removeFromFavoriteBtn = helper.createElement(
      "span",
      [removeIcon, "delete"],
      {
        id: `${data.id}`,
        class: `remove-favorite flex justify-center items-center px-[5px] py-[3px] rounded-[5px] text-slate-300 text-xs border-slate-500 border-solid border-[1px] cursor-pointer hover:border-purple-400 hover:boder-indigo-700 hover:text-purple-400 hover:scale-[1.02] font-semibold  transiton duration-[50] ease-in w-[100%] min-w-[100px] grow capitalize`,
      }
    );
    return removeFromFavoriteBtn;
  };

  const headerBottomLeftFragment = new DocumentFragment();

  renderHomeState.renderingHome()
    ? headerBottomLeftFragment.append(updateWeather())
    : headerBottomLeftFragment.append(addToFavorite());

  const headerBottomLeft = helper.createElement(
    "div",
    [headerBottomLeftFragment],
    null
  );

  const headerBottomRight = helper.createElement("div", [removeFromFavorite()]);

  //

  const cardBottomLayout = renderFavoriteState.renderingFavorite()
    ? "grid grid-cols-2 gap-x-2"
    : "grid grid-cols-1";
  const headerBottom = helper.createElement(
    "div",
    renderFavoriteState.renderingFavorite()
      ? [headerBottomLeft, headerBottomRight]
      : [headerBottomLeft],
    {
      class: `bottom-div mb-[10px] w-[100%] my-[10px] ${cardBottomLayout}`,
    }
  );

  // const defaultClass = {'flex '}
  //
  console.log(
    renderHomeState.renderingHome(),
    renderFavoriteState.renderingFavorite()
  );
  return headerBottom;
};

export default cardHeaderBottom;
