import search from "./assets/img/search-city.svg";
import spark from "./assets/img/spark1.svg";
import light from "./assets/img/sun1.svg";
import close from "./assets/img/close.svg";
import look from "./assets/img/search.svg";

// search City
export function SearchCityButton({
  isHidden,
  setIsHidden,
  toggleSearch,
  inputValue,
  handleValue,
  setInputValue,
}) {
  return (
    <div
      className={`search-city w-screen h-screen fixed bg-white top-0 z-[100] transition-all duration-300 dark:bg-slate-700 ${
        isHidden ? "" : "-translate-x-full"
      }`}
    >
      <div className="flex mt-10 ml-5 justify-end">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleValue}
          placeholder="Enter city name..."
          className="border-1 border-cyan-500 h-10 w-1/2 p-2.5 rounded-tl-2xl rounded-bl-2xl outline-cyan-500 focus:outline-cyan-500 focus:shadow-lg hover:shadow-lg transition-all dark:text-slate-100 dark:placeholder:text-slate-50 placeholder:text-gray-500"
        />
        <img
          src={look}
          alt="search"
          onClick={() => {
            localStorage.setItem("inputValue", inputValue);
            setIsHidden("");
          }}
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
          onClick={(e) => {
            e.preventDefault();
            setInputValue("london", inputValue);
            setIsHidden("");
          }}
          className="border-1 p-2 rounded-lg w-4/5 hover:border-slate-400 hover:text-slate-400"
        >
          London
        </a>
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            setInputValue("tokyo", inputValue);
            setIsHidden("");
          }}
          className="border-1 p-2 rounded-lg w-4/5 hover:border-slate-400 hover:text-slate-400"
        >
          Tokyo
        </a>
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            setInputValue("paris", inputValue);
            setIsHidden("");
          }}
          className="border-1 p-2 rounded-lg w-4/5 hover:border-slate-400 hover:text-slate-400"
        >
          Paris
        </a>
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            setInputValue("new_york", inputValue);
            setIsHidden("");
          }}
          className="border-1 p-2 rounded-lg w-4/5 hover:border-slate-400 hover:text-slate-400"
        >
          New York
        </a>
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            setInputValue("singapore", inputValue);
            setIsHidden("");
          }}
          className="border-1 p-2 rounded-lg w-4/5 hover:border-slate-400 hover:text-slate-400"
        >
          Singapore
        </a>
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            setInputValue("barcelona", inputValue);
            setIsHidden("");
          }}
          className="border-1 p-2 rounded-lg w-4/5 hover:border-slate-400 hover:text-slate-400"
        >
          Barcelona
        </a>
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            setInputValue("dubai", inputValue);
            setIsHidden("");
          }}
          className="border-1 p-2 rounded-lg w-4/5 hover:border-slate-400 hover:text-slate-400"
        >
          Dubai
        </a>
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            setInputValue("los_anegles", inputValue);
            setIsHidden("");
          }}
          className="border-1 p-2 rounded-lg w-4/5 hover:border-slate-400 hover:text-slate-400"
        >
          Los Angeles
        </a>
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            setInputValue("madrid", inputValue);
            setIsHidden("");
          }}
          className="border-1 p-2 rounded-lg w-4/5 hover:border-slate-400 hover:text-slate-400"
        >
          Madrid
        </a>
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            setInputValue("amsterdam", inputValue);
            setIsHidden("");
          }}
          className="border-1 p-2 rounded-lg w-4/5 hover:border-slate-400 hover:text-slate-400"
        >
          Amsterdam
        </a>
      </div>
    </div>
  );
}

// search city component
export function City({ toggleSearch, inputValue, state }) {
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
        <a className="text-sm">
          {inputValue.split("_").join(" ").toLowerCase().replace(/^./, (match) => match.toUpperCase())}
          {state ? ` , ${state}` : " "}
        </a>
        <img src={look} alt="search" className="w-4 h-4 ml-1 mt-0.5" />
      </div>
    </div>
  );
}

// dark mode
export function DarkModeToggle({ darkMode, setDarkMode }) {
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
export function TempToggle({ handleToggle, temperature }) {
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
