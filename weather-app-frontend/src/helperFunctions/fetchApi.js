export const getCityInfo = async (cityName) => {
  try {
    const response = await fetch(
      `https://weather-app-backend-nodejs.vercel.app/get-info/${cityName}`
    ).then((data) => {
      return data.json();
    });
    if (response) {
      return response;
    }
  } catch (error) {
    console.log(error);
  }
};

export const getAllCities = async () => {
  try {
    const response = await fetch("https://weather-app-backend-nodejs.vercel.app/get-all-cities").then(
      (data) => {
        return data.json();
      }
    );
    if (response) {
      return response;
    }
  } catch (error) {
    console.log(error);
  }
};
