import tranformData from "./transorm-data";
import loading from "./loading";
import { checkError, displayOnError } from "./error";

let isLoading = true;
const getData = async (city) => {
  try {
    const API_KEY = "3ceb8852b9b6a1fd8a8191af7243397f";
    loading(isLoading);
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    const response = await fetch(url);
    checkError(response);
    isLoading = false;
    const data = await response.json();
    tranformData(data);
    console.log(data);
    // return data;
  } catch (err) {
    displayOnError(err, isLoading);
  }
};

export default getData;
