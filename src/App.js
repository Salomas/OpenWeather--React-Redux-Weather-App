import React, {useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux'
import './App.css'
import Header from './components/header/header'
import { fetchWeather } from './actions/fetchWeather'

function App() {

  
  const [city, setCity] = useState("");

 const weatherSeletor = useSelector((state) =>
 state.weatherInfo);
  const dispatch = useDispatch();
  const getWeatherInforun = (city) => dispatch
  (fetchWeather(city));


  const getWeatherInfo = (e) => {
      e.preventDefault();
      if(city === ""){
       console.log("A cidade procurada não existe") 
      }
      else{
        getWeatherInforun(city);
        {console.log(weatherSeletor.weatherInfo)} 
      }
  
  }

  const resultApi = weatherSeletor.weatherInfo;

  let detalhes = "";


  if(resultApi){
             
     
        detalhes = <div>
            <div className="main-container">
              <div className="board">{resultApi.main && (
                <div className="city">
                    <h2 className="city-name">
                        <span>{resultApi.name}</span>
                        <sup>{resultApi.sys.country}</sup>
                    </h2>
                    <div className="city-temp">
                        {(resultApi.main.temp)}
                        <sup>&deg;C</sup>
                    </div>
                    <div className="info">
                        <img className="city-icon" src={`https://openweathermap.org/img/wn/${resultApi.weather[0].icon}@2x.png`} alt={resultApi.weather[0].description} />
                        <p>{resultApi.weather[0].description}</p>
                    </div>
                </div>
            )}</div>
            
        </div>
           

           
        </div>
       

  }

  else{
    detalhes = <p>Podes procurar a previsão de Tempo</p>
  }



  return (
  
    <div className="container">
      <header className="App-header">
      <Header/>
      </header>
      <main className="main">
      <form onSubmit={getWeatherInfo} class="form-inline my-2 my-lg-0" >
             <input class="form-control mr-sm-2"   type="search" placeholder="Search Forecast" 
             onChange={e => setCity(e.target.value)} />

            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  

        {detalhes}

     


      </main>
      
    </div>
    
  );
}

export default App;
