import { useState, useEffect } from "react";
import { Header } from "./header";
import { SearchCityButton, City, DarkModeToggle, TempToggle } from "./nav";
import { Card, Details } from "./cards-&-detail";
import "./App.css";

const apiKey = "b9857fdac6f7641fd265794143562bc7";

function App() {
  const [temperature, setTemperature] = useState("&units=metric");
  const [isHidden, setIsHidden] = useState(false); // hidden element
  const [location, setLocation] = useState(false); // location
  const [currentWeather, setCurrentWeather] = useState(null); // current weather
  const [fiveDays, setFiveDays] = useState(null); // 5 days weather
  const [inputValue, setInputValue] = useState("london"); // Value input
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
  );

  // search button
  const toggleSearch = () => {
    setIsHidden((prev) => !prev);
  };

  const handleToggle = (event) => {
    setTemperature(event.target.checked ? "&units=imperial" : "&units=metric");
  };

  // dark mode
  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    document.documentElement.classList.toggle("light", !darkMode);
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  // get location
  // Input Value
  const handleValue = (ev) => {
    if (ev.key === "Enter") {
      const formattedValue = ev.target.value.split(" ").join("_").toLowerCase();
      setInputValue(formattedValue); // Update state
      localStorage.setItem("inputValue", formattedValue); // Persist value
      setIsHidden("");
    }
  };

  // Load stored value when the component mounts
  useEffect(() => {
    const savedValue = localStorage.getItem("inputValue");
    if (savedValue) {
      setInputValue(savedValue);
    }
  }, []);

  // get latitude and longitude
  useEffect(() => {
    const fetchLocation = async () => {
      // city name, state code, country code, limit
      if (!inputValue) return;
      const url = `http://api.openweathermap.org/geo/1.0/direct?q=${inputValue}&limit=1&appid=${apiKey}`;
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Weather data fetch failed");
        }
        const data = await response.json().then((data) => data);
        setLocation(data[0]);
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    };
    fetchLocation();
  }, [inputValue]);
  useEffect(() => {
    if (location) {
      getCurrentWeather({
        lat: location.lat,
        lon: location.lon,
        state: location.state,
      });
      fiveDaysWeather({
        lat: location.lat,
        lon: location.lon,
      });
      getDayNames;
    }
  }, [location, temperature]);

  // get current weather
  const getCurrentWeather = async ({ lat, lon }) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}${temperature}`;
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Weather data fetch failed");
      }
      const data = await response.json();
      // console.log(data)
      setCurrentWeather({
        location: data.name,
        temp: Math.ceil(data.main.temp),
        desc: data.weather[0].description,
        icon: data.weather[0].icon,
        main: data.weather[0].main,
        temp_min: Math.floor(data.main.temp_min),
        temp_max: Math.floor(data.main.temp_max),
        temp_felt: Math.floor(data.main.feels_like),
        pressure: data.main.pressure,
        humidity: data.main.humidity,
        visibility: data.visibility / 1000,
        speed: data.wind.speed,
        deg: data.wind.deg,
      });
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  // get 5 days weather
  const fiveDaysWeather = async ({ lat, lon }) => {
    const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}${temperature}`;
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Weather data fetch failed");
      }
      const data = await response.json();
      // console.log(data)
      setFiveDays({
        date_5_days: [
          data.list[7].dt,
          data.list[15].dt,
          data.list[23].dt,
          data.list[31].dt,
          data.list[39].dt,
        ],
        temp_5_day: [
          Math.floor(data.list[7].main.temp),
          Math.floor(data.list[15].main.temp),
          Math.floor(data.list[23].main.temp),
          Math.floor(data.list[31].main.temp),
          Math.floor(data.list[39].main.temp),
        ],
        temp_min_5_days: [
          Math.floor(data.list[7].main.temp_min),
          Math.floor(data.list[15].main.temp_min),
          Math.floor(data.list[23].main.temp_min),
          Math.floor(data.list[31].main.temp_min),
          Math.floor(data.list[39].main.temp_min),
        ],
        temp_max_5_days: [
          Math.floor(data.list[7].main.temp_max),
          Math.floor(data.list[15].main.temp_max),
          Math.floor(data.list[23].main.temp_max),
          Math.floor(data.list[31].main.temp_max),
          Math.floor(data.list[39].main.temp_max),
        ],
        temp_felt_5_days: [
          Math.floor(data.list[7].main.feels_like),
          Math.floor(data.list[15].main.feels_like),
          Math.floor(data.list[23].main.feels_like),
          Math.floor(data.list[31].main.feels_like),
          Math.floor(data.list[39].main.feels_like),
        ],
        pressure_5_days: [
          data.list[7].main.pressure,
          data.list[15].main.pressure,
          data.list[23].main.pressure,
          data.list[31].main.pressure,
          data.list[39].main.pressure,
        ],
        humidity_5_days: [
          data.list[7].main.pressure,
          data.list[15].main.pressure,
          data.list[23].main.pressure,
          data.list[31].main.pressure,
          data.list[39].main.pressure,
        ],
        visibility_5_days: [
          data.list[7].visibility,
          data.list[15].visibility,
          data.list[23].visibility,
          data.list[31].visibility,
          data.list[39].visibility,
        ],
        deg_5_days: [
          data.list[7].wind.deg,
          data.list[15].wind.deg,
          data.list[23].wind.deg,
          data.list[31].wind.deg,
          data.list[39].wind.deg,
        ],
        speed_5_days: [
          data.list[7].wind.speed,
          data.list[15].wind.speed,
          data.list[23].wind.speed,
          data.list[31].wind.speed,
          data.list[39].wind.speed,
        ],
        desc_5_days: [
          data.list[7].weather[0].description,
          data.list[15].weather[0].description,
          data.list[23].weather[0].description,
          data.list[31].weather[0].description,
          data.list[39].weather[0].description,
        ],
        icon_5_days: [
          data.list[7].weather[0].icon,
          data.list[15].weather[0].icon,
          data.list[23].weather[0].icon,
          data.list[31].weather[0].icon,
          data.list[39].weather[0].icon,
        ],
        main_5_days: [
          data.list[7].weather[0].main,
          data.list[15].weather[0].main,
          data.list[23].weather[0].main,
          data.list[31].weather[0].main,
          data.list[39].weather[0].main,
        ],
      });
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  function getDayNames(unixTimestamps) {
    return unixTimestamps.map((timestamp) => {
      const date = new Date(timestamp * 1000); // Convert from seconds to milliseconds
      const options = { weekday: "long" }; // Get full day name
      return new Intl.DateTimeFormat("en-US", options).format(date);
    });
  }

  return (
    <>
      <nav className="mt-4 flex justify-between relative">
        <City
          toggleSearch={toggleSearch}
          inputValue={inputValue}
          state={location?.state || ""}
        />
        <SearchCityButton
          toggleSearch={toggleSearch}
          isHidden={isHidden}
          setIsHidden={setIsHidden}
          handleValue={handleValue}
          inputValue={inputValue}
          setInputValue={setInputValue}
        />
        <div className="mr-4 flex gap-2 z-[99] xl:mr-20 ">
          <div>
            <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
          </div>
          <TempToggle temperature={temperature} handleToggle={handleToggle} />
        </div>
      </nav>
      <div className="h-70 overflow-hidden relative -mt-10 md:h-80 xl:h-85 dark:bg-slate-800 -z-10 transition-colors">
        <Header
          state={location?.state || ""}
          city={currentWeather?.location || "loading..."}
          temp={currentWeather?.temp || "0"}
          desc={currentWeather?.desc || "loading"}
          icon={currentWeather?.icon || "loading"}
          main={currentWeather?.main || "..."}
          min={currentWeather?.temp_min || "0"}
          max={currentWeather?.temp_max || "0"}
          temperature={temperature}
        />
      </div>
      <div className="lg:grid lg:grid-cols-2 dark:bg-slate-800 pt-10 transition-colors">
        <main className="mt-0 mx-auto lg:w-full lg:mx-0">
          <h2 className="font-[overlock] text-lg ml-3 md:ml-5 xl:ml-22 dark:text-white">
            5 Day weather forcast
          </h2>
          <Card
            date_5_days={
              fiveDays?.date_5_days ? getDayNames(fiveDays.date_5_days) : null
            }
            icon_5_days={fiveDays?.icon_5_days || ""}
            temp_min_5_days={fiveDays?.temp_min_5_days || ""}
            temp_max_5_days={fiveDays?.temp_max_5_days || ""}
            desc_5_days={fiveDays?.desc_5_days || ""}
            temperature={temperature}
            main_5_days={fiveDays?.main_5_days || ""}
          />
        </main>
        <Details
          temp_felt={currentWeather?.temp_felt || "0"}
          pressure={currentWeather?.pressure || "0"}
          humidity={currentWeather?.humidity || "0"}
          visibility={currentWeather?.visibility || "0"}
          deg={currentWeather?.deg || "0"}
          speed={currentWeather?.speed || "0"}
          temperature={temperature}
        />
      </div>
      <div className="text-center dark:bg-slate-800 py-6 transition-colors">
        <a
          href="#"
          className=" text-slate-500 font-bold lg:mt-23 lg:mb-0 dark:text-slate-300"
        >
          Robihan Ramadani
        </a>
      </div>
    </>
  );
}

export default App;
