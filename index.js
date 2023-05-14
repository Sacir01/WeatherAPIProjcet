const express = require('express');
const app = express();


const apiKey = 'f2d0d6b6ba5778c2b4be361e9d500d20';


app.get('/weather/:latitude/:longitude', async (req, res) => {
    const apiKey = 'f2d0d6b6ba5778c2b4be361e9d500d20';
    const lat = req.params.latitude;
    const lon = req.params.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
  
    const response = await fetch(url);
    const data = await response.json();
  
    res.json(data);
  }); 

  app.get('/weather/:latitude/:longitude/:date', async (req, res) => {
    const latitude = req.params.latitude;
    const longitude = req.params.longitude;
    const date = req.params.date;
    const apiKey = 'f2d0d6b6ba5778c2b4be361e9d500d20';
  
    const url = `https://api.openweathermap.org/data/2.5/onecall/timemachine?lat=${latitude}&lon=${longitude}&dt=${date}&units=metric&appid=${apiKey}`;
  
    try {
      const response = await fetch(url);
      const data = await response.json();
  
      
  
      res.json({
        latitude,
        longitude,
        data
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to retrieve historical weather data' });
    }
  });

  
  const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});