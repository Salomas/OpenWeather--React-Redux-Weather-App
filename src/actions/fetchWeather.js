export function fetchWeather(city){

    return function(dispatch){
      fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid={API KEY}`)
      .then(res => {
        return res.json();
      })
      .then(JSONres => {
        dispatch({type:"FETCH_WEATHER",
        payload:JSONres});

      }).catch(err => {
        console.log(err);
      })
    }
}



