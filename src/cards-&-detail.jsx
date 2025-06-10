const backgrounds = {
  Rain: "./img/rain.jpg",
  Snow: "./img/snow.jpg",
  Mist: "./img/mist.jpg",
  Thunderstorm: "./img/thunderstorm.jpg",
  Clear: "./img/clear-sky.jpg",
  Clouds: "./img/broken-cloud.jpg",
};

// cards
export function Card({
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
export function Details({
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