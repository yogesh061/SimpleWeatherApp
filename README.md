# Weather Forecast App

This application uses Open Weather API to find the weather forecast of city/place entered by the user.

## How to run this application

To run this application once the package is downloaded follow steps below -

1. Navigate to project folder and run below command in command line to install the dependencies
    ```bash
    npm install
    ```
2. Once above process is complete, in terminal window run below command to start the server.  
    ```bash
    node server
    ```
3. Open the web browser and navigate to URL [http://localhost:3000/](http://localhost:3000/)

## Application Hosting

The application is hosted at [http://calm-dawn-27441.herokuapp.com/](http://calm-dawn-27441.herokuapp.com/)

## Technical Details
1. This application is developed using jQuery and Bootstrap.
2. Babel is used to transpile the ES6 JavaScript code to ES5.
3. Express.js is used along with node host and run the application.


## Future Enhancements
1. Add error handling using try catch to make this application full proof
2. Refactor the code within components so that the application data state can be maintained separately
3. Update the UI it make it more user friendly by -
    1. Updating the date format to make it more readable, in format like dd-MMM-yy.
    2. Have collapsible components to display day weather information.
    3. Add more information like humidity, pressure, wind speed etc.
    4. Fix the issues to make it fully compatible with mobile devices. In current version for mobile devices data overlap will happen.
    5. In case of error or no matching city/place display bootstrap modal instead of showing the default JavaScript alert.
4. Enhance this version to have a provision to search present weather using tab based structure.
5. Add a provision to toggle between Metric and Kelvin scale.
6. Add geo location API support to get the weather information of current city/place.
7. Multi-Language support
8. Pass the city/place name as a query string so that this application can be integrated with other system.
