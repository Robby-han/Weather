import { useState } from "react";
import search from "./assets/img/search-city.svg";
import spark from "./assets/img/spark1.svg";
import light from "./assets/img/sun1.svg";
import "./App.css";

function App() {
  return (
    <>
      <nav className="mt-4 flex justify-between">
        <div className="ml-4">
          <img
            src={search}
            alt="search city"
            className="drop-shadow-[2px_3px_2px] cursor-pointer"
          />
        </div>
        <div className="mr-4 flex gap-2">
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
      <div className="h-screen w-sceen rounded-full overflow-hidden">
        <header className="bg-[url('./assets/img/snow.jpg')] w-full h-2/5 bg-cover bg-no-repeat bg-center rounded-bl-3xl rounded-br-3xl absolute top-0 -z-10">
          <div className="mt-16 ml-6">
            {/* today */}
            <h1 className="text-white text-5xl font-[albert] text-shadow-md">Today</h1>
            {/* city */}
            <p className="text-white font-[albert] text-shadow-md">Jakarta, Indonesia</p>
            {/* temp */}
            <h1 className="text-white text-7xl mt-3 font-[albert] text-shadow-md">19°C</h1>
            {/* weather + icon */}
            <h2 className="text-white font-[albert] mt-3 ml-3 text-shadow-md">Snow</h2>
          </div>
        </header>
      </div>
    </>
  );
}

export default App;
