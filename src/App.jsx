import { useState, useEffect } from "react";
import search from "./assets/img/search-city.svg";
import spark from "./assets/img/spark1.svg";
import light from "./assets/img/sun1.svg";
import close from "./assets/img/close.svg";
import look from "./assets/img/search.svg";
import "./App.css";

const apiKey = "b9857fdac6f7641fd265794143562bc7";
const backgrounds = {
  Rain: "/img/rain.jpg",
  Snow: "/img/snow.jpg",
  Mist: "/img/mist.jpg",
  Thunderstorm: "/img/thunderstorm.jpg",
  Clear: "/img/clear-sky.jpg",
  Clouds: "/img/broken-cloud.jpg",
};

// search City
function SearchCityButton({ isHidden, toggleSearch }) {
  return (
    <div
      className={`search-city w-screen h-screen fixed bg-white top-0 z-[100] transition-all duration-300 dark:bg-slate-700 ${
        isHidden ? "" : "-translate-x-full"
      }`}
    >
      <div className="flex mt-10 ml-5 justify-end">
        <input
          type="text"
          placeholder="Enter city name..."
          className="border-1 border-cyan-500 h-10 w-1/2 p-2.5 rounded-tl-2xl rounded-bl-2xl outline-cyan-500 focus:outline-cyan-500 focus:shadow-lg hover:shadow-lg transition-all dark:text-slate-100 dark:placeholder:text-slate-50 placeholder:text-gray-500"
        />
        <img
          src={look}
          alt="search"
          className="w-10 h-10 bg-sky-400 rounded-tr-3xl rounded-br-3xl p-2 mr-auto cursor-pointer"
        />
        <img
          src={close}
          alt="close"
          className="mr-10 h-6 w-6 cursor-pointer dark:bg-slate-100 dark:rounded-full dark:w-8 dark:h-8 dark:p-2"
          onClick={toggleSearch}
        />
      </div>
      <hr className="my-5 w-[95%] -translate-x-1/2 absolute left-1/2 dark:text-slate-100" />
      <div className="mt-10 ml-5 grid grid-cols-3 gap-1.5 dark:text-slate-100 text-sm md:text-md">
        <a
          href="#"
          className="border-1 p-2 rounded-lg w-4/5 hover:border-slate-400 hover:text-slate-400"
        >
          London
        </a>
        <a
          href="#"
          className="border-1 p-2 rounded-lg w-4/5 hover:border-slate-400 hover:text-slate-400"
        >
          Tokyo
        </a>
        <a
          href="#"
          className="border-1 p-2 rounded-lg w-4/5 hover:border-slate-400 hover:text-slate-400"
        >
          Paris
        </a>
        <a
          href="#"
          className="border-1 p-2 rounded-lg w-4/5 hover:border-slate-400 hover:text-slate-400"
        >
          New York
        </a>
        <a
          href="#"
          className="border-1 p-2 rounded-lg w-4/5 hover:border-slate-400 hover:text-slate-400"
        >
          Singapore
        </a>
        <a
          href="#"
          className="border-1 p-2 rounded-lg w-4/5 hover:border-slate-400 hover:text-slate-400"
        >
          Barcelona
        </a>
        <a
          href="#"
          className="border-1 p-2 rounded-lg w-4/5 hover:border-slate-400 hover:text-slate-400"
        >
          Dubai
        </a>
        <a
          href="#"
          className="border-1 p-2 rounded-lg w-4/5 hover:border-slate-400 hover:text-slate-400"
        >
          Los Angeles
        </a>
        <a
          href="#"
          className="border-1 p-2 rounded-lg w-4/5 hover:border-slate-400 hover:text-slate-400"
        >
          Madrid
        </a>
        <a
          href="#"
          className="border-1 p-2 rounded-lg w-4/5 hover:border-slate-400 hover:text-slate-400"
        >
          Amsterdam
        </a>
      </div>
    </div>
  );
}

// search city component
function City({ toggleSearch }) {
  return (
    <div className="ml-4 z-[99] flex gap-2 items-center xl:ml-20">
      <img
        onClick={toggleSearch}
        src={search}
        alt="search city"
        className="drop-shadow-md/40 cursor-pointer"
      />
      <div
        className="bg-white px-3  rounded-xl hidden gap-1 items-center cursor-pointer drop-shadow-lg/10 sm:flex"
        onClick={toggleSearch}
      >
        Jakarta, Indonesia <span>a</span> {/* icon */}
      </div>
    </div>
  );
}

// dark mode
function DarkModeToggle({ darkMode, setDarkMode }) {
  return (
    <div className="relative bg-white w-6 h-6 rounded-full shadow-md">
      <input
        checked={darkMode}
        onChange={() => setDarkMode(!darkMode)}
        type="checkbox"
        id="toggle"
        className=" absolute top-3.5 hidden moon peer"
      />
      <label
        htmlFor="toggle"
        className="absolute top-0 h-6 w-6 rounded-full z-[99] cursor-pointer"
      ></label>
      <div className="w-3 h-3 rounded-full shadow-[-3px_3px_0px_black] bg-[rgba(0, 0, 0, 0.1)] absolute top-[3.5px] left-[8.5px] transform opacity-100 scale-100 visible peer-[.moon]:peer-checked:opacity-0 peer-[.moon]:peer-checked:scale-0 transition-all"></div>
      <img
        src={spark}
        alt="spark"
        className="w-2.5 absolute right-1 top-1 transform opacity-100 translate-0 visible peer-[.moon]:peer-checked:opacity-0 peer-[.moon]:peer-checked:translate-y-1.5 transition-all"
      />
      <img
        src={spark}
        alt="spark"
        className="w-2 absolute right-0.5 top-2 transform opacity-100 translate-0 visible peer-[.moon]:peer-checked:opacity-0 peer-[.moon]:peer-checked:translate-y-1.5 transition-all"
      />
      <div className="w-[9px] h-[9px] bg-black rounded-full absolute top-2 left-2 opacity-0 peer-[.moon]:peer-checked:opacity-100 transition-all"></div>
      <img
        src={light}
        alt="light"
        className="absolute top-1 translate-x-[0.5px] opacity-0 scale-0 rotate-45 peer-[.moon]:peer-checked:opacity-100 peer-[.moon]:peer-checked:scale-100 peer-[.moon]:peer-checked:rotate-0 transition-all"
      />
    </div>
  );
}

// temperature
function TempToggle({ handleToggle, temperature }) {
  return (
    <div className="flex items-center">
      <input
        type="checkbox"
        id="temp"
        onChange={handleToggle}
        checked={temperature === "&units=imperial"}
        className="hidden temp peer"
      />
      <label
        htmlFor="temp"
        className="w-6 h-6 bg-white rounded-full absolute cursor-pointer peer-[.temp]:peer-checked:translate-x-7 transition-all"
      ></label>
      <label
        htmlFor="temp"
        className="w-13 h-6 bg-sky-400 rounded-full flex items-center justify-between cursor-pointer shadow-md"
      >
        <span className="font-[albert] text-sm m-auto text-white">C°</span>
        <span className="font-[albert] text-sm m-auto text-white">F°</span>
      </label>
    </div>
  );
}

// header
function Header({
  city,
  state,
  temp,
  desc,
  icon,
  min,
  max,
  temperature,
  main,
}) {
  return (
    <header
      className=" w-full h-full bg-cover bg-no-repeat bg-center rounded-bl-3xl rounded-br-3xl absolute top-0 -z-10 md:flex md:justify-between lg:rounded-b-[3rem]"
      style={{
        backgroundImage: `url(${backgrounds[main] || backgrounds.Clear})`,
      }}
    >
      <div className="mt-16 ml-6 md:ml-10 md:mt-20 xl:ml-30">
        {/* today */}
        <h1 className="text-white text-5xl font-[albert] text-shadow-md">
          Today
        </h1>
        {/* city */}
        <p className="text-white font-[albert] text-shadow-md sm:hidden">
          {city}, {state}
        </p>
        {/* temp */}
        <h1 className="text-white text-7xl mt-3 font-[albert] text-shadow-md lg:text-9xl">
          {temp}
          {temperature === "&units=imperial" ? "°F" : "°C"}
        </h1>
        <p className="text-white font-[albert] text-shadow-md font-semibold ml-5 mt-2 hidden md:block">
          {min}
          {temperature === "&units=imperial" ? "°F" : "°C"}/{max}
          {temperature === "&units=imperial" ? "°F" : "°C"}
        </p>
        {/* weather + icon */}
      </div>
      <div className="text-white font-[albert] mt-2 text-shadow-md ml-9 flex items-center gap-2 md:flex-col-reverse md:mx-30 md:mb-15 xl:mx-35">
        <p className="text-lg font-semibold md:-mt-10">{desc}</p>
        <img
          src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
          alt="icon"
          className=" w-10 md:w-40 md:h-40"
        />
      </div>
    </header>
  );
}

// cards
function Card({
  date_5_days,
  temp_min_5_days,
  temp_max_5_days,
  icon_5_days,
  desc_5_days,
  temperature,
  main_5_days,
}) {
  // Mapping weather conditions to background images

  const todayName = new Date().toLocaleDateString("en-US", { weekday: "long" });

  return (
    <div className="container w-[96%] mx-auto flex mt-3 gap-2 justify-center lg:ml-5">
      {date_5_days?.map((date, index) => {
        const weatherType = main_5_days[index];
        // console.log(weatherType)
        return (
          <div
            key={index}
            style={{
              backgroundImage: `url(${
                backgrounds[weatherType] || backgrounds.Clear
              })`,
            }}
            className={`card h-48 min-w-15 w-20 bg-cover bg-center rounded-full
            min-[252px]:w-25 min-[252px]:rounded-4xl md:min-w-30 md:rounded-3xl lg:min-w-10 lg:rounded-4xl 
           `}
          >
            <div className="mt-4 place-items-center text-white text-shadow-md/20">
              {/* Weather Icon */}
              <img
                src={`https://openweathermap.org/img/wn/${
                  icon_5_days ? icon_5_days[index] : ""
                }@2x.png`}
                alt=""
                className="w-10 h-10"
              />

              {/* Date */}
              <h1 className="mb-2.5 font-bold text-[0.6rem] md:text-lg">
                {date === todayName ? "Today" : date || "loading..."}
              </h1>

              {/* Temperature */}
              <h1 className="font-bold md:text-lg">
                {temp_min_5_days ? temp_min_5_days[index] : "loading"}
                {temperature === "&units=imperial" ? "°F" : "°C"}
              </h1>
              <hr className="h-0.5 w-4/5 bg-white" />
              <h1 className="font-bold md:text-lg">
                {temp_max_5_days ? temp_max_5_days[index] : "loading"}
                {temperature === "&units=imperial" ? "°F" : "°C"}
              </h1>

              {/* Weather Description */}
              <p className="text-[0.6rem] mt-3 md:text-sm lg:text-[0.8rem]">
                {desc_5_days ? desc_5_days[index] : "loading"}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

// detail weather
function Details({
  temp_felt,
  pressure,
  humidity,
  visibility,
  deg,
  speed,
  temperature,
}) {
  return (
    <div className="overflow-hidden md:ml-5 lg:ml-0">
      <h2 className="font-[overlock] text-lg ml-3 mt-4 lg:mt-0 dark:text-white">
        Detail Weather :
      </h2>
      <div className=" w-screen flex dark:text-white">
        <div className="w-1/2 font-[albert] ml-10 lg:w-1/5">
          {/* temp feel */}
          <h1 className="text-2xl mt-3 font-bold">
            {temp_felt}
            {temperature === "&units=imperial" ? "°F" : "°C"}
          </h1>
          <p className="text-sm text-slate-600 dark:text-blue-50">
            Temperature Felt
          </p>
          {/* temp feel */}
          <h1 className="text-2xl mt-3 font-bold">{pressure}hPa</h1>
          <p className="text-sm text-slate-600 dark:text-blue-50">
            Air Pressure
          </p>
          {/* temp feel */}
          <h1 className="text-2xl mt-3 font-bold">{humidity}%</h1>
          <p className="text-sm text-slate-600 dark:text-blue-50">Humidity</p>
        </div>
        <div className="w-1/2 font-[albert] grid justify-end mr-10 md:mr-20 lg:w-1/5">
          {/* temp feel */}
          <h1 className="text-2xl mt-3 font-bold">{visibility}km</h1>
          <p className="text-sm text-slate-600 dark:text-blue-50">Visibility</p>
          {/* temp feel */}
          <h1 className="text-2xl mt-3 font-bold">{deg}°</h1>
          <p className="text-sm text-slate-600 dark:text-blue-50">Deg</p>
          {/* temp feel */}
          <h1 className="text-2xl mt-3 font-bold">{speed}km/h</h1>
          <p className="text-sm text-slate-600 dark:text-blue-50">S</p>
        </div>
      </div>
    </div>
  );
}

// farenhite and celcius

function App() {
  const [temperature, setTemperature] = useState("&units=metric");
  const [isHidden, setIsHidden] = useState(false); // hidden element
  const [location, setLocation] = useState(false); // location
  const [currentWeather, setCurrentWeather] = useState(null); // current weather
  const [fiveDays, setFiveDays] = useState(null); // 5 days weather
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
  useEffect(() => {
    const fetchLocation = async () => {
      // city name, state code, country code, limit
      const url = `http://api.openweathermap.org/geo/1.0/direct?q=london&limit=1&appid=${apiKey}`;
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
  }, []);
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
        <City toggleSearch={toggleSearch} />
        <SearchCityButton toggleSearch={toggleSearch} isHidden={isHidden} />
        <div className="mr-4 flex gap-2 z-[99] xl:mr-20 ">
          <div>
            <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
          </div>
          <TempToggle temperature={temperature} handleToggle={handleToggle} />
        </div>
      </nav>
      <div className="h-70 overflow-hidden relative -mt-10 md:h-80 xl:h-85 dark:bg-slate-800 -z-10 transition-colors">
        <Header
          state={location?.state || "lodaing.."}
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
