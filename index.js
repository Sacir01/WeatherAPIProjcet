const express = require('express');
const app = express();
const NodeCache = require('node-cache');

const cache = new NodeCache();


app.get('/weather/:latitude/:longitude', async (req, res) => {
    const cacheKey = req.url;
    const cachedData = cache.get(cacheKey);
  
    if (cachedData) {
      res.json(cachedData);
    } else {
      const apiKey = 'f2d0d6b6ba5778c2b4be361e9d500d20';
      const lat = req.params.latitude;
      const lon = req.params.longitude;
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
    
      try {
        const response = await fetch(url);
        const data = await response.json();
    
        // Store the response in the cache
        cache.set(cacheKey, data);
    
        res.json(data);
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to retrieve weather data' });
      }
    }
  });
  
  app.get('/history/:latitude/:longitude/:month/:day', async (req, res) => {
    const cacheKey = req.url;
    const cachedData = cache.get(cacheKey);
  
    if (cachedData) {
      res.json(cachedData);
    } else {
      const lat = req.params.latitude;
      const lon = req.params.longitude;
      const month = req.params.month;
      const day = req.params.day;
      const apiKey = '10549355dadfb50bfba150f7c13ed615';
    
      const url = `https://history.openweathermap.org/data/2.5/aggregated/day?lat=${lat}&lon=${lon}&month=${month}&day=${day}&appid=${apiKey}`;
    
      try {
        const response = await fetch(url);
        const data = await response.json();
    
        // Store the response in the cache
        cache.set(cacheKey, data);
    
        res.json({
          lat,
          lon,
          data
        });
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to retrieve historical weather data' });
      }
    }
  });
  app.get('/forecast/:latitude/:longitude', async (req, res) => {
    const cacheKey = req.url;
    const cachedData = cache.get(cacheKey);
  
    if (cachedData) {
      res.json(cachedData);
    } else {
      const latitude = req.params.latitude;
      const longitude = req.params.longitude;
      const apiKey = 'f2d0d6b6ba5778c2b4be361e9d500d20';
    
      const url = `https://api.openweathermap.org/data/2.5/forecast/daily?lat=${latitude}&lon=${longitude}&cnt=4&units=metric&appid=${apiKey}`;
    
      try {
        const response = await fetch(url);
        const data = await response.json();
    
        // Store the response in the cache
        cache.set(cacheKey, data);
    
        res.json({
          latitude,
          longitude,
          data
        });
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to retrieve weather forecast data' });
      }
    }
  });
  

  
  const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});