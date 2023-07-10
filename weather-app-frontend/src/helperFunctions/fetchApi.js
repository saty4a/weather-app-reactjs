export const getCityInfo = async (cityName) => {
  try {
    const response = await fetch(
      `http://localhost:4000/getinfo/${cityName}`
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
    const response = await fetch("http://localhost:4000/get-all-cities").then(
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
