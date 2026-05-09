require("dotenv").config();

const axios = require("axios");

const LOG_API = "http://4.224.186.213/evaluation-service/logs";

async function Log(stack, level, packageName, message) {
  try {

    const response = await axios.post(
      LOG_API,
      {
        stack: stack,
        level: level,
        package: packageName,
        message: message
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.ACCESS_TOKEN}`,
          "Content-Type": "application/json"
        }
      }
    );

    console.log("LOG CREATED:", response.data);

  } catch (error) {

    console.log("ERROR:", error.response?.data || error.message);

  }
}

module.exports = Log;