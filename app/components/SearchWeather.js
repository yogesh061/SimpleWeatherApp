import $ from "jquery";

/**
* This class is used to handel the textfield and button on the main UI
* While initializing this class, it expects a callback function which gets called
* if user has entered any value in the City field
*/
class SearchWeather{
  constructor(callback){
    //initialize
    this.isLoading  = false;
    //get the field references
    this.cityInputRef = $("#cityName");
    this.getWeatherBtnRef = $("#getWeather");
    //add click event
    this.getWeatherBtnRef.on('click', (eve)=>{
      eve.preventDefault();
      let cityValue = this.cityInputRef.val();
      cityValue = cityValue.trim();
      //trigger callback if user has entered the data in field
      //and if the current state is not loading
      if(cityValue.length>0 && !this.isLoading){
          callback(cityValue);
      }
    });
  }

  /**
  * Use to update the UI and state when the data is fetched from server.
  */
  startLoading(){
    this.isLoading  = true;
    this.getWeatherBtnRef.button('loading');
  }

  /**
  * Use to update the UI and state when the data fetch is completed.
  */
  stopLoading(){
    this.isLoading  = false;
    this.getWeatherBtnRef.button('reset');
  }

  /**
  * Reset UI once the search is completed
  */
  reset() {
    this.stopLoading();
    this.cityInputRef.val('');
  }
}

export default SearchWeather;
