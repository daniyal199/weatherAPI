module.exports = {
    WEATHERSTACK_API_KEY: 'f323095792204914931110757240308'
};

const express = require('express');
const axios = require('axios');
const { WEATHERSTACK_API_KEY } = require('./config');

const app = express();
const port = 3000;

app.get('/weather', async (req, res) => {
  const city = req.query.city;

  if (!city) {
    return res.status(400).send({
      error: 'You must provide a city'
    });
  }

  try {
    const response = await axios.get(http://api.weatherstack.com/current?access_key=${WEATHERSTACK_API_KEY}&query=${city});
    const data = response.data;

    if (data.error) {
      return res.status(400).send({ error: data.error.info });
    }

    res.send({
      location: data.location.name,
      temperature: data.current.temperature,
      weather_descriptions: data.current.weather_descriptions[0]
    });
  } catch (error) {
    res.status(500).send({
      error: 'Unable to fetch weather data'
    });
  }
});

app.listen(port, () => {
  console.log(Server is running on port ${port});
});