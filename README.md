# Weather Forecast App

This application uses Open Weather API to find the weather forecast of city/place entered by the user.

## How to run this application

In order to run this application once the package is downloaded follow steps below

1. Navigate to the project folder and run below command in the command line, this will install all the dependencies
    ```bash
    npm install
    ```
2. Once this process is completed, again in the terminal window run the below command. This will start the server.  
    ```bash
    node server
    ```
3. Open the web browser and navigate to URL [http://localhost:3000/](http://localhost:3000/)

## Application Hosting

The application is hosted at

## Technical Details
1. This application is developed using jQuery and Bootstrap.
2. Babel is used to transpile the ES6 JavaScript code to ES5.
3. Express.js is used along with node host and run the application.


## Future Enhancements

1. Add error handling using try catch to make this application full proof
2. Refactor the code within components so that the application data state can be maintained separately
3. Update the UI it make it more user friendly by -
    1. Updating the date format to make it more readable, in format line dd-MMM-yy.
    2. Have collapsible components for each day.
    3. Add more information like humidity, pressure, wind speed etc.
    4. Fix the issues to make it fully compatible with mobile devices. In current version for mobile devices data overlap will happen.
    5. In case of error or no matching city/place display bootstrap modal instead of showing the default JavaScript alert.
4. Enhance this version to have more information like current weather.
5. Add a provision to toggle between Metric and Kelvin scale.
6. Add geo location API support to get the weather information of current city/place.
