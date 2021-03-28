import React, {useState} from 'react';
import SearchBar from './components/searchBar/SearchBar';
import TabBarMenu from './components/tabBarMenu/TabBarMenu';
import MetricSlider from './components/metricSlider/MetricSlider';
import axios from 'axios';
import './App.css';


const apiKey = 'a95ffa740846f24a0d03465edc5e8294'

function App() {

    const[location,setLocation]=useState('')

    const [weatherData, setWeatherData] = useState(null);


    async function fetchData() {
        try {
            const result = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=utrecht,nl&appid=${apiKey}&lang=nl`);
            console.log(result.data);
        } catch (e) {
            console.error(e);
        }
    }


    return (
        <>
        <SearchBar setLocationHandler={setLocation}/>{/*mag elke naam zijn*/}


            <div className="weather-container">

                {/*HEADER -------------------- */}
                <div className="weather-header">
                    <SearchBar/>

                    <span className="location-details">
                        {weatherData &&
                        <>
                            {/*oud*/}
                            {/*<h2>Bewolkt</h2>*/}
                            {/*<h3> </h3>*/}
                            {/*<h1>14 &deg;</h1>*/}
                            <h2>{weatherData.weather[0].description}</h2>
                            <h3>{weatherData.name}</h3>
                            <h1>{weatherData.main.temp}</h1>
                        </>
                        }

                        <button
                            type="button"
                            onClick={fetchData}
                        >
                        Haal data op!
                        </button>
                     </span>
                </div>

                {/*CONTENT ------------------ */}
                <div className="weather-content">
                    <TabBarMenu/>

                    <div className="tab-wrapper">
                        Alle inhoud van de tabbladen komt hier!
                    </div>
                </div>

                <MetricSlider/>
            </div>
        </>
    );
}

export default App;
