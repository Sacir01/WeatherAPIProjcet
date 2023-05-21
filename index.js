const express = require('express');
const app = express();
const NodeCache = require('node-cache');
const basicAuth = require('express-basic-auth');
const bodyParser = require('body-parser');
const session = require('express-session');
const bcrypt = require('bcrypt');

const cache = new NodeCache();


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.json());

app.use(
    session({
      secret: 'your-secret-key',
      resave: false,
      saveUninitialized: true
    })
  );


const users = [
  { username: 'adem', password: 'Jelah2020' },
  { username: 'user2', password: 'password2' }
];

const isAuthenticated = basicAuth({
    users: users.reduce((acc, user) => {
      acc[user.username] = user.password;
      return acc;
    }, {}),
    challenge: true,
  });
  

  app.post('/login/:username/:password', (req, res) => {
    const username = req.params.username;
    const password = req.params.password;
    console.log(`User requested to login with username: ${username} and password: ${password}`);
 
    // Find the user in the list of authorized users
    const user = users.find((user) => user.username === username);
 
    if (!user) {
       res.status(401).json({ error: 'Invalid credentials/username' });
       return;
    }

    console.log(`Stored Password: ${user.password}`);
    console.log(`Provided Password: ${password}`);
 
    bcrypt.compare(password, user.password, (err, result) => {
       if (err || !result) {
          res.status(401).json({ error: 'Invalid credentials/password' });
          return;
       }
 
       req.session.userId = user.username;
       res.json({ message: 'Login successful' });
       console.log(`User ${username} successfully logged in.`);
    });
 });
  


app.get('/weather/:latitude/:longitude', async (req, res) => {
  const cacheKey = req.url;
  const cachedData = cache.get(cacheKey);
  console.log(`User requested acces for Current Weather for `,req.params.latitude,` `,req.params.longitude )

  if (cachedData) {
    res.json(cachedData);
  } else {
    const apiKey = 'f2d0d6b6ba5778c2b4be361e9d500d20';
    const lat = req.params.latitude;
    const lon = req.params.longitude;
    console.log(`User succesfully gained acces for Current Weather for `,lat,` `,lon )
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;

    try {
      const response = await fetch(url);
      const data = await response.json();

      cache.set(cacheKey, data);

      res.json(data);
      console.log(`User retrieved data for Current Weather for `,req.params.latitude,` `,req.params.longitude, ` without error` )
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to retrieve weather data' });
    }
  }
});

app.get('/history/:latitude/:longitude/:month/:day', async (req, res) => {
  const cacheKey = req.url;
  const cachedData = cache.get(cacheKey);
  console.log(`User requested acces for History Weather for `,req.params.latitude,` `,req.params.longitude,` for date `, req.params.month,``, req.params.day )
  

  if (cachedData) {
    res.json(cachedData);
  } else {
    const lat = req.params.latitude;
    const lon = req.params.longitude;
    const month = req.params.month;
    const day = req.params.day;
    console.log(`User succesfuly gained acces for History Weather for `,lat,` `,lon,` for date `, month,``, day )
    const apiKey = '10549355dadfb50bfba150f7c13ed615';

    const url = `https://history.openweathermap.org/data/2.5/aggregated/day?lat=${lat}&lon=${lon}&month=${month}&day=${day}&appid=${apiKey}`;

    try {
      const response = await fetch(url);
      const data = await response.json();

      cache.set(cacheKey, data);

      res.json({
        lat,
        lon,
        data
      });
      console.log(`User succesfuly retrieved data for History Weather for `,lat,` `,lon,` for date `, month,``, day )
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to retrieve historical weather data' });
    }
  }
});

app.get('/forecast/:latitude/:longitude', async (req, res) => {
  const cacheKey = req.url;
  const cachedData = cache.get(cacheKey);
  console.log(`User requested acces for Forecast Weather for `,req.params.latitude,` `,req.params.longitude )

  if (cachedData) {
    res.json(cachedData);
  } else {
    const latitude = req.params.latitude;
    const longitude = req.params.longitude;
    const apiKey = 'f2d0d6b6ba5778c2b4be361e9d500d20';
    console.log(`User succesfully gained acces for Forecast Weather for `,latitude,` `,longitude )
    const url = `https://api.openweathermap.org/data/2.5/forecast/daily?lat=${latitude}&lon=${longitude}&cnt=4&units=metric&appid=${apiKey}`;

    try {
      const response = await fetch(url);
      const data = await response.json();

      cache.set(cacheKey, data);

      res.json({
        latitude,
        longitude,
        data
      });
      console.log(`User succesfully retrieved data for Forecast Weather for `,latitude,` `,longitude )
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