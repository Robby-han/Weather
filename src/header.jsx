const backgrounds = {
  Rain: "/img/rain.jpg",
  Snow: "/img/snow.jpg",
  Mist: "/img/mist.jpg",
  Thunderstorm: "/img/thunderstorm.jpg",
  Clear: "/img/clear-sky.jpg",
  Clouds: "/img/broken-cloud.jpg",
};

// header
export function Header({
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
          {city}
          {state ? ` , ${state}` : ``}
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
