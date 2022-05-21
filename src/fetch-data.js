import tranformData from "./transorm-data";
import loading from "./loading";
import { checkError, displayOnError } from "./error";
import * as helper from "./helper";

let isLoading = true;
const getData = async (city) => {
  try {
    loading(isLoading);
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=3ceb8852b9b6a1fd8a8191af7243397f&units=metric`;
    const response = await fetch(url);
    checkError(response);
    isLoading = false;
    const data = await response.json();
    //tranformData(data);
    console.log(data);
    return data;
  } catch (err) {
    displayOnError(err, isLoading);

    //console.log(err.message);
    //console.log(isLoading);
  }
};

export default getData;
