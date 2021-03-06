import $ from "jquery";

/**
* This class is used to render the data once its retrived using Open Weather
* API.
* It accepts the json object process the data and render it to a component
*/
class WeatherInfoForDay {
  /**
  * constructor, which accepts id of component in which data has to be
  * rendered
  */
  constructor(componentId){
    this.weatherInfoRef = $(`#${componentId}`);
  }

  /**
  * This function renders the data into component
  * It accepts json data received from Open Weather API
  */
  render(jsonData){
    this.data = jsonData;
    let processedData = this._processData();
    let renderedData = `<div class="row">
                        <div class="col-lg-12">
                          <h3>Weather forecast for ${this.data.city.name}</h3>
                        </div>
                        </div>`;
    for(const dayData in processedData){
      renderedData = `${renderedData}
                      ${this._renderEachDay(processedData[dayData])}`;
    }
    this.weatherInfoRef.html(renderedData);
  }

  /**
  * Used to clear the component in case if there is no data or service error
  */
  clear(){
    this.weatherInfoRef.html('');
  }

  /**
  * Function used to render data of each day
  */
  _renderEachDay(dayObject){
    let selectedDate  = dayObject.date;
    let timeStr = ``;
    let minTempStr = ``;
    let maxTempStr = ``;
    let conditionStr = ``;
    let iconUrl = 'http://openweathermap.org/img/w/';
    dayObject.weatherInfo.forEach(info => {
      timeStr =   `${timeStr}<div class="col-xs-1 text-center list-items">${info.time}</div>`
      minTempStr =   `${minTempStr}<div class="col-xs-1 text-center list-items">${info.main.temp_min} °C</div>`
      maxTempStr =   `${maxTempStr}<div class="col-xs-1 text-center list-items">${info.main.temp_max} °C</div>`
      conditionStr =   `${conditionStr}
                          <div class="col-xs-1 text-center list-items">
                          ${info.weather[0].main}
                          <img src = "${iconUrl}${info.weather[0].icon}.png"/>
                          </div>`
    })
    let dayStr = `<div class="row">
                    <div class="col-lg-12">
                      <div class="row">
                        <h4 class = "heading-date">${selectedDate}</h4>
                      </div>
                      <div class="row list-row">
                        <div class="col-xs-2 list-items"><strong>Time</strong></div>
                        ${timeStr}
                      </div>
                      <div class="row list-row">
                        <div class="col-xs-2 list-items"><strong>Min Temperature</strong></div>
                        ${minTempStr}
                      </div>
                      <div class="row list-row">
                        <div class="col-xs-2 list-items"><strong>Max Temperature</strong></div>
                        ${maxTempStr}
                      </div>
                      <div class="row list-row">
                        <div class="col-xs-2 list-items"><strong>Condition</strong></div>
                        ${conditionStr}
                      </div>
                    </div>
                  </div>`;
    return dayStr;
  }


  /**
  * Function used to process the data received in API response
  * This function returns Map of array containig data for each day
  */
  _processData(){
    let processedData = {};
    if(this.data.list){
        let dataList  = this.data.list;
        let listLength  = dataList.length;
        for (var i = 0; i < listLength; i++) {
          if(dataList[i].dt_txt){
            let dateAndTimeArr = dataList[i].dt_txt.split(" ");
            let selectedDate  = dateAndTimeArr[0];
            let selectedTime  = dateAndTimeArr[1];
            dataList[i].time  = selectedTime;
            if(typeof processedData[selectedDate] === "undefined"){
              processedData[selectedDate] = {};
              processedData[selectedDate].weatherInfo = [];
              processedData[selectedDate].date  = selectedDate
            }
            processedData[selectedDate].weatherInfo.push(dataList[i]);
          }
        }
    }
    return processedData;
  }
}

export default WeatherInfoForDay;
