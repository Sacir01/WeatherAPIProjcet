# WeatherAPIProjcet

We are using services provided by openweathermap.org

API endpoints
 
1.weather/:latitude/:longitude
    -This endpoint returns current data on specific latitude and longitude.

2.history/:latitude/:longitude/:month/:day
    -This endpoint returns data on specific latitude and longitude from past 12 months, with month being number of month and day being number of day in the month.

3.forecast/:latitude/;longitude
    -This endpoint returns 4 day forecast for specified latitude and longitude.

Examples of endpoints

1.weather/:latitude/:longitude

example: http://localhost:3000/weather/44.6111/17.9833

response:

{
    "coord": {
        "lon": 17.9833,
        "lat": 44.6111
    },
    "weather": [
        {
            "id": 500,
            "main": "Rain",
            "description": "light rain",
            "icon": "10n"
        }
    ],
    "base": "stations",
    "main": {
        "temp": 12.93,
        "feels_like": 12.86,
        "temp_min": 12.93,
        "temp_max": 12.93,
        "pressure": 1010,
        "humidity": 99,
        "sea_level": 1010,
        "grnd_level": 978
    },
    "visibility": 5336,
    "wind": {
        "speed": 1.31,
        "deg": 38,
        "gust": 3.2
    },
    "rain": {
        "1h": 0.18
    },
    "clouds": {
        "all": 100
    },
    "dt": 1684179550,
    "sys": {
        "country": "BA",
        "sunrise": 1684120850,
        "sunset": 1684174090
    },
    "timezone": 7200,
    "id": 3189146,
    "name": "Tešanj",
    "cod": 200
}

2.history/:latitude/:longitude/:month/:day

example: http://localhost:3000/history/44.6111/17.9833/2/2

response: 

{
    "lat": "44.6111",
    "lon": "17.9833",
    "data": {
        "cod": 200,
        "city_id": 3186573,
        "calctime": 0.095717681,
        "result": {
            "month": 2,
            "day": 2,
            "temp": {
                "record_min": 263.85,
                "record_max": 290.15,
                "average_min": 272.48,
                "average_max": 282.53,
                "median": 276.15,
                "mean": 277.34,
                "p25": 273.39,
                "p75": 281.15,
                "st_dev": 5.39,
                "num": 264
            },
            "pressure": {
                "min": 920,
                "max": 1028,
                "median": 1014,
                "mean": 1005.61,
                "p25": 1004,
                "p75": 1022,
                "st_dev": 26.4,
                "num": 264
            },
            "humidity": {
                "min": 25,
                "max": 100,
                "median": 93,
                "mean": 87.08,
                "p25": 81,
                "p75": 98,
                "st_dev": 14.22,
                "num": 264
            },
            "wind": {
                "min": 0.39,
                "max": 12.9,
                "median": 1.21,
                "mean": 2.28,
                "p25": 0.95,
                "p75": 2.64,
                "st_dev": 2.43,
                "num": 264
            },
            "precipitation": {
                "min": 0,
                "max": 0.3,
                "median": 0,
                "mean": 0.04,
                "p25": 0,
                "p75": 0,
                "st_dev": 0.1,
                "num": 264
            },
            "clouds": {
                "min": 0,
                "max": 100,
                "median": 74,
                "mean": 58.46,
                "p25": 40,
                "p75": 79,
                "st_dev": 29.34,
                "num": 264
            }
        }
    }
}

3.forecast/:latitude/;longitude

example: http://localhost:3000/forecast/44.6111/17.9833

result: 

{
    "latitude": "44.6111",
    "longitude": "17.9833",
    "data": {
        "cod": "200",
        "message": 0,
        "cnt": 4,
        "list": [
            {
                "dt": 1684184400,
                "main": {
                    "temp": 12.86,
                    "feels_like": 12.79,
                    "temp_min": 12.86,
                    "temp_max": 12.86,
                    "pressure": 1010,
                    "sea_level": 1010,
                    "grnd_level": 978,
                    "humidity": 99,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 500,
                        "main": "Rain",
                        "description": "light rain",
                        "icon": "10n"
                    }
                ],
                "clouds": {
                    "all": 100
                },
                "wind": {
                    "speed": 1.41,
                    "deg": 32,
                    "gust": 3.68
                },
                "visibility": 1856,
                "pop": 0.69,
                "rain": {
                    "3h": 1.25
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2023-05-15 21:00:00"
            },
            {
                "dt": 1684195200,
                "main": {
                    "temp": 12.75,
                    "feels_like": 12.69,
                    "temp_min": 12.52,
                    "temp_max": 12.75,
                    "pressure": 1009,
                    "sea_level": 1009,
                    "grnd_level": 976,
                    "humidity": 100,
                    "temp_kf": 0.23
                },
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04n"
                    }
                ],
                "clouds": {
                    "all": 100
                },
                "wind": {
                    "speed": 1.74,
                    "deg": 18,
                    "gust": 3.33
                },
                "visibility": 93,
                "pop": 0.8,
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2023-05-16 00:00:00"
            },
            {
                "dt": 1684206000,
                "main": {
                    "temp": 12.63,
                    "feels_like": 12.53,
                    "temp_min": 12.52,
                    "temp_max": 12.63,
                    "pressure": 1009,
                    "sea_level": 1009,
                    "grnd_level": 976,
                    "humidity": 99,
                    "temp_kf": 0.11
                },
                "weather": [
                    {
                        "id": 500,
                        "main": "Rain",
                        "description": "light rain",
                        "icon": "10n"
                    }
                ],
                "clouds": {
                    "all": 100
                },
                "wind": {
                    "speed": 1.28,
                    "deg": 37,
                    "gust": 2.86
                },
                "visibility": 92,
                "pop": 0.64,
                "rain": {
                    "3h": 0.65
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2023-05-16 03:00:00"
            },
            {
                "dt": 1684216800,
                "main": {
                    "temp": 13.06,
                    "feels_like": 13.01,
                    "temp_min": 13.06,
                    "temp_max": 13.06,
                    "pressure": 1007,
                    "sea_level": 1007,
                    "grnd_level": 975,
                    "humidity": 99,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 500,
                        "main": "Rain",
                        "description": "light rain",
                        "icon": "10d"
                    }
                ],
                "clouds": {
                    "all": 100
                },
                "wind": {
                    "speed": 0.2,
                    "deg": 103,
                    "gust": 1.93
                },
                "visibility": 110,
                "pop": 0.75,
                "rain": {
                    "3h": 0.43
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2023-05-16 06:00:00"
            }
        ],
        "city": {
            "id": 3189146,
            "name": "Tešanj",
            "coord": {
                "lat": 44.6111,
                "lon": 17.9833
            },
            "country": "BA",
            "population": 7550,
            "timezone": 7200,
            "sunrise": 1684120850,
            "sunset": 1684174090
        }
    }
}