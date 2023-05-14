const express = require('express');
const app = express();

app.get('/weather/:latitude/:longitude', async (req, res) => {
    const apiKey = 'fa8640d2cc45b8d6414a0135ade15513';
    const lat = req.params.latitude;
    const lon = req.params.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
  
    const response = await fetch(url);
    const data = await response.json();
  
    res.json(data);
  }); 

  
  const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});