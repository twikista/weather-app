import tranformData from "./transorm-data";

const getData = async (city) => {
  try {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=3ceb8852b9b6a1fd8a8191af7243397f&units=metric`;
    const response = await fetch(url);
    const data = await response.json();
    tranformData(data);
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export default getData;
