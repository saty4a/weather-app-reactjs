import { cityModel } from "../models/cityModel.js";

export const insertCity = async (request, response) => {
  try {
    const city = await new cityModel({
      location: {
        country: request.body.country,
        name: request.body.name,
        region: request.body.region,
      },
      current: {
        tempC: request.body.tempC,
        tempF: request.body.tempF,
        condition: request.body.condition,
        icon: request.body.icon,
      },
    }).save();
    if (city?._id) {
      return response.status(200).json({
        data: city,
        message: "city saved successfully",
        success: true,
      });
    }
  } catch (error) {
    console.log(error);
    return response.status(400).json({
      data: null,
      message: "cannot store items",
      success: false,
    });
  }
};

export const getCity = async (request, response) => {
  const { name } = request.params;
  try {
    const cities = await cityModel.find();
    if (cities.length > 0) {
      const city = cities.find(
        (data) => data.location.name.toLowerCase() === name.toLowerCase()
      );
      if (city?._id) {
        return response.status(200).json({
          data: city,
          message: `${name} data`,
          success: true,
        });
      }
    }
    response.status(400).json({
      data: null,
      message: "cannot find data",
      success: false,
    });
  } catch (error) {
    console.log(error);
    response.status(400).json({
      data: null,
      message: "cannot find data",
      success: false,
    });
  }
};

export const getAllCities = async (request, response) => {
  try {
    const cities = await cityModel.find();
    if (cities.length > 0) {
      return response.status(200).json({
        data: cities,
        message: "All cities",
        success: true
      });
    }
    response.status(400).json({
      data: null,
      message: "cannot find cities",
      success: false
    })
  } catch (error) {
    return response.status(400).json({
      data: null,
      message: "cannot find cities",
      success: false
    })
  }
}
