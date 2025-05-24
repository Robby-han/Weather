import { useState } from "react";
import search from "./assets/img/search-city.svg";
import spark from "./assets/img/spark1.svg";
import light from "./assets/img/sun1.svg";
import "./App.css";

function App() {
  return (
    <>
      <nav className="mt-4 flex justify-between">
        <div className="ml-4 z-[99] flex gap-2 items-center xl:ml-20">
          <img
            src={search}
            alt="search city"
            className="drop-shadow-md/40 cursor-pointer"
          />
          <div className="bg-white px-3  rounded-xl hidden gap-1 items-center cursor-pointer drop-shadow-lg/10 sm:flex">
            Jakarta, Indonesia <span>a</span> {/* icon */}
          </div>
        </div>
        <div className="mr-4 flex gap-2 z-[99] xl:mr-20">
          <div>
            <div className="relative bg-white w-6 h-6 rounded-full shadow-md">
              <input
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
          </div>
          <div className="flex items-center">
            <input type="checkbox" id="temp" className="hidden temp peer" />
            <label
              htmlFor="temp"
              className="w-6 h-6 bg-white rounded-full absolute cursor-pointer peer-[.temp]:peer-checked:translate-x-7 transition-all"
            ></label>
            <label
              htmlFor="temp"
              className="w-13 h-6 bg-sky-400 rounded-full flex items-center justify-between cursor-pointer shadow-md"
            >
              <span className="font-[albert] text-sm m-auto text-white">
                C°
              </span>
              <span className="font-[albert] text-sm m-auto text-white">
                F°
              </span>
            </label>
          </div>
        </div>
      </nav>
      <div className="h-70 overflow-hidden relative -top-10 md:h-80 xl:h-85">
        <header className="bg-[url('./assets/img/rain.jpg')] w-full h-full bg-cover bg-no-repeat bg-center rounded-bl-3xl rounded-br-3xl absolute top-0 -z-10 md:flex md:justify-between lg:rounded-b-[3rem]">
          <div className="mt-16 ml-6 md:ml-10 md:mt-20 xl:ml-30">
            {/* today */}
            <h1 className="text-white text-5xl font-[albert] text-shadow-md">
              Today
            </h1>
            {/* city */}
            <p className="text-white font-[albert] text-shadow-md sm:hidden">
              Jakarta, Indonesia
            </p>
            {/* temp */}
            <h1 className="text-white text-7xl mt-3 font-[albert] text-shadow-md lg:text-9xl">
              19°C
            </h1>
            <p className="text-white font-[albert] text-shadow-md font-semibold ml-5 mt-2 hidden md:block">
              19°C/22°C
            </p>
            {/* weather + icon */}
          </div>
          <div className="text-white font-[albert] mt-2 text-shadow-md ml-9 flex items-center gap-2 md:flex-col-reverse md:mx-30 md:mb-15 xl:mx-35">
            <p className="text-lg font-semibold">Snow</p>
            <span className=" w-5 h-5 md:w-30 md:h-30 bg-amber-50"></span>
          </div>
        </header>
      </div>
      <div className="min-[1172px]:grid min-[1172px]:grid-cols-2">
        <main className="mt-0 mx-auto lg:w-full lg:mx-0">
          <h2 className="font-[overlock] text-lg ml-3 md:ml-5 xl:ml-22">
            5 Day weather forcast
          </h2>
          <div className="container w-[96%] mx-auto flex mt-3 gap-1 justify-center min-[525px]:gap-2 min-[1172px]:ml-22 min-[1172px]:justify-start ">
            {/* card fro 5 days */}
            <div className="card h-48 min-w-15 w-20 bg-[url('./assets/img/rain.jpg')] bg-cover bg-center six rounded-full min-[252px]:w-25 min-[252px]:rounded-4xl md:min-w-30 md:rounded-3xl min-[1172px]:min-w-10 min-[1172px]:rounded-4xl">
              <div className="mt-4 place-items-center">
                {/* logo */}
                <span className="text-white text-shadow-md/20">Logo</span>
                {/* day */}
                <h1 className="text-white my-2.5 font-bold text-shadow-md/20 text-sm md:text-lg">
                  Today
                </h1>
                {/* temp feel */}
                <h1 className="text-white font-bold text-shadow-md/20 md:text-lg">
                  15°C°
                </h1>
                <hr className="h-0.5 w-4/5 bg-white text-white text-shadow-md/20" />
                <h1 className="text-white font-bold text-shadow-md/20 md:text-lg">
                  17°C°
                </h1>
                {/* weather */}
                <p className="text-white text-[0.6rem] mt-3 text-shadow-md/20 md:text-sm lg:text-[0.8rem]">
                  Rain
                </p>
              </div>
            </div>
            <div className="card h-48 min-w-15 w-20 bg-[url('./assets/img/snow.jpg')] bg-cover bg-center six rounded-full min-[252px]:w-25 min-[252px]:rounded-4xl md:min-w-30 md:rounded-3xl min-[1172px]:min-w-10 min-[1172px]:rounded-4xl">
              <div className="mt-4 place-items-center">
                <span className="text-white text-shadow-md/30">Logo</span>
                {/* day */}
                <h1 className="text-white my-2.5 font-bold text-shadow-md/20 text-sm md:text-lg">
                  Thursday
                </h1>
                {/* temp feel */}
                <h1 className="text-white font-bold text-shadow-md/20 md:text-lg">
                  15°C°
                </h1>
                <hr className="h-0.5 w-4/5 bg-white text-white text-shadow-md/20" />
                <h1 className="text-white font-bold text-shadow-md/20 md:text-lg">
                  17°C°
                </h1>
                <p className="text-white text-[0.6rem] mt-3 text-shadow-md/20 md:text-sm lg:text-[0.8rem]">
                  Snow
                </p>
              </div>
            </div>
            <div className="card h-48 min-w-15 w-20 bg-[url('./assets/img/mist.jpg')] bg-cover bg-center six rounded-full min-[252px]:w-25 min-[252px]:rounded-4xl md:min-w-30 md:rounded-3xl min-[1172px]:min-w-10 min-[1172px]:rounded-4xl">
              <div className="mt-4 place-items-center">
                <span className="text-white text-shadow-md/20">Logo</span>
                {/* day */}
                <h1 className="text-white my-2.5 font-bold text-shadow-md/20 text-sm md:text-lg">
                  Friday
                </h1>
                {/* temp feel */}
                <h1 className="text-white font-bold text-shadow-md/20 md:text-lg">
                  15°C°
                </h1>
                <hr className="h-0.5 w-4/5 bg-white text-white text-shadow-md/20" />
                <h1 className="text-white font-bold text-shadow-md/20 md:text-lg">
                  17°C°
                </h1>
                <p className="text-white text-[0.6rem] mt-3 text-shadow-md/20 md:text-sm lg:text-[0.8rem]">
                  Mist
                </p>
              </div>
            </div>
            <div className="card h-48 min-w-15 w-20 bg-[url('./assets/img/thunderstorm.jpg')] bg-cover bg-center six rounded-full min-[252px]:w-25 min-[252px]:rounded-4xl md:min-w-30 md:rounded-3xl min-[1172px]:min-w-10 min-[1172px]:rounded-4xl">
              <div className="mt-4 place-items-center">
                <span className="text-white text-shadow-md/20">Logo</span>
                {/* day */}
                <h1 className="text-white my-2.5 font-bold text-shadow-md/20 text-sm md:text-lg">
                  Saturday
                </h1>
                {/* temp feel */}
                <h1 className="text-white font-bold text-shadow-md/20 md:text-lg">
                  15°C°
                </h1>
                <hr className="h-0.5 w-4/5 bg-white text-white text-shadow-md/20" />
                <h1 className="text-white font-bold text-shadow-md/20 md:text-lg">
                  17°C°
                </h1>
                <p className="text-white text-[0.6rem] mt-3 text-shadow-md/20 md:text-sm lg:text-[0.8rem]">
                  Thunderstorm
                </p>
              </div>
            </div>
            <div className="card h-48 min-w-15 w-20 bg-[url('./assets/img/clear-sky.jpg')] bg-cover bg-center six rounded-full min-[252px]:w-25 min-[252px]:rounded-4xl md:min-w-30 md:rounded-3xl min-[1172px]:min-w-10 min-[1172px]:rounded-4xl">
              <div className="mt-4 place-items-center">
                <span className="text-white text-shadow-md/20">Logo</span>
                {/* day */}
                <h1 className="text-white my-2.5 font-bold text-shadow-md/20 text-sm md:text-lg">
                  Sunday
                </h1>
                {/* temp feel */}
                <h1 className="text-white font-bold text-shadow-md/20 md:text-lg">
                  15°C°
                </h1>
                <hr className="h-0.5 w-4/5 bg-white text-white text-shadow-md/20" />
                <h1 className="text-white font-bold text-shadow-md/20 md:text-lg">
                  17°C°
                </h1>
                <p className="text-white text-[0.6rem] mt-3 text-shadow-md/20 md:text-sm lg:text-[0.8rem]">
                  Clear sky
                </p>
              </div>
            </div>
          </div>
        </main>
        <div className="overflow-hidden md:ml-5 min-[1172px]:ml-0">
          <h2 className="font-[overlock] text-lg ml-3 mt-4 min-[1172px]:mt-0">
            Detail Weather :
          </h2>
          <div className=" w-screen flex">
            <div className="w-1/2 font-[albert] ml-10 min-[1172px]:w-1/5">
              {/* temp feel */}
              <h1 className="text-2xl mt-3 font-bold">26°C</h1>
              <p className="text-sm text-slate-600">Temperature Felt</p>
              {/* temp feel */}
              <h1 className="text-2xl mt-3 font-bold">1007hPa</h1>
              <p className="text-sm text-slate-600">Air Pressure</p>
              {/* temp feel */}
              <h1 className="text-2xl mt-3 font-bold">98%</h1>
              <p className="text-sm text-slate-600">Humidity</p>
            </div>
            <div className="w-1/2 font-[albert] grid justify-end mr-10 md:mr-20 min-[1172px]:w-1/5">
              {/* temp feel */}
              <h1 className="text-2xl mt-3 font-bold">4 Km</h1>
              <p className="text-sm text-slate-600">Visibility</p>
              {/* temp feel */}
              <h1 className="text-2xl mt-3 font-bold">Very weak</h1>
              <p className="text-sm text-slate-600">UV</p>
              {/* temp feel */}
              <h1 className="text-2xl mt-3 font-bold">6 km/h</h1>
              <p className="text-sm text-slate-600">S</p>
            </div>
          </div>
        </div>
      </div>
      <a href="#" className="flex justify-center text-slate-500 font-bold my-5 lg:mt-23 lg:mb-0">
        Robihan Ramadani
      </a>
    </>
  );
}

export default App;
