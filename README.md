# Weather App

## Overview

This project is a simple weather app that allows users to check the current weather conditions of a location. The app fetches data from the AccuWeather API and displays relevant information such as city name, weather condition, and temperature. The user can enter a location, and the app will update the display accordingly.

## Project Structure

The project is organized into the following structure:

- **scripts folder:** Contains two JavaScript files - `app.js` and `forecast.js`.
  - `app.js`: Handles user interactions, updates the UI, and interacts with the AccuWeather API.
  - `forecast.js`: Defines a `Forecast` class responsible for fetching city and weather data from the AccuWeather API.

- **weather.html:** The main HTML file that includes the necessary Bootstrap and custom stylesheets. It also contains the form for entering the city and the card to display weather information.

- **weather.css:** Custom styles for the weather app.

- **icons folder:** Contains weather icon images.

## How to Use

1. Open the `weather.html` file in a web browser.

2. Enter the name of the desired city in the provided input field in the form.

3. Press the submit button to retrieve and display the current weather information for the entered city.

4. The app also stores the last entered city in local storage, so the weather information persists even if the page is refreshed.

## Dependencies

- [Bootstrap v4.5.3](https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css): Included via CDN for styling.

## Note

- Weather icons are sourced from the "icons" folder based on the AccuWeather API response.

## Future Improvements

- Error handling: Add proper error handling for API requests.
- Unit testing: Implement unit tests for the Forecast class methods.
- Additional features: Consider adding more features like a forecast for the upcoming days.
