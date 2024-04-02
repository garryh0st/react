import search_img from "../assets/search.webp";
import wind from "../assets/wind.png";
import humidity from "../assets/humidity.png";
import brokenclouds from "../assets/brokenclouds.png";
import clear_n from "../assets/clear_n.png";
import clear from "../assets/clear.png";
import cloudy from "../assets/cloudy.png";
import few_d from "../assets/few_d.png";
import few_n from "../assets/few_n.png";
import mist from "../assets/mist.png";
import rain_d from "../assets/rain_d.png";
import rain_n from "../assets/rain_n.png";
import shower from "../assets/shower.png";
import snow from "../assets/snow.png";
import thunder_d from "../assets/thunder_d.png";
import thunder_n from "../assets/thunder_n.png";
import search_weather from "../assets/search_weather.png";
import { useState } from "react";

const WeatherCard = () => {
  let api_key = "9071291927329757085dda730e6cb308";

  const [weathericon, setweathericon] = useState(search_weather);
  const [SearchInput, setSearchInput] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    search();
  };

  const search = async () => {
    if (SearchInput === "") {
      return 0;
    }
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${SearchInput}&units=metric&appid=${api_key}`;

    let responce = await fetch(url);
    let data = await responce.json();
    const humidity = document.getElementById("humidity");
    const wind_speed = document.getElementById("wind_speed");
    const location_el = document.getElementById("location_el");
    const temp_el = document.getElementById("temprature_el");
    console.log(temp_el);

    humidity.innerHTML = Math.floor(data.main.humidity) + "%";
    wind_speed.innerHTML = Math.floor(data.wind.speed) + "Km/Hr";
    temp_el.innerHTML = Math.floor(data.main.temp) + "°C";
    location_el.innerHTML = data.name;

    if (data.weather[0].icon === "01d" || data.weather[0].icon === "01n") {
      setweathericon(data.weather[0].icon === "01d" ? clear : clear_n);
    } else if (
      data.weather[0].icon === "02d" ||
      data.weather[0].icon === "02n"
    ) {
      setweathericon(data.weather[0].icon === "02d" ? few_d : few_n);
    } else if (
      data.weather[0].icon === "03d" ||
      data.weather[0].icon === "03n"
    ) {
      setweathericon(data.weather[0].icon === "03d" ? cloudy : cloudy);
    } else if (
      data.weather[0].icon === "04d" ||
      data.weather[0].icon === "04n"
    ) {
      setweathericon(
        data.weather[0].icon === "04d" ? brokenclouds : brokenclouds
      );
    } else if (
      data.weather[0].icon === "09d" ||
      data.weather[0].icon === "09n"
    ) {
      setweathericon(data.weather[0].icon === "09d" ? shower : shower);
    } else if (
      data.weather[0].icon === "10d" ||
      data.weather[0].icon === "10n"
    ) {
      setweathericon(data.weather[0].icon === "10d" ? rain_d : rain_n);
    } else if (
      data.weather[0].icon === "11d" ||
      data.weather[0].icon === "11n"
    ) {
      setweathericon(data.weather[0].icon === "11d" ? thunder_d : thunder_n);
    } else if (
      data.weather[0].icon === "13d" ||
      data.weather[0].icon === "13n"
    ) {
      setweathericon(data.weather[0].icon === "13d" ? snow : snow);
    } else if (
      data.weather[0].icon === "50d" ||
      data.weather[0].icon === "50n"
    ) {
      setweathericon(data.weather[0].icon === "50d" ? mist : mist);
    }
  };

  return (
    <>
      <div className="bg-hero bg-no-repeat bg-cover ">
        <div className="  bg-white bg-opacity-10 backdrop-blur-lg rounded drop-shadow-lg  h-screen grid place-items-center  text-white shadow-lg shadow-black">
          <div className="bg-[conic-gradient(at_bottom_left,_var(--tw-gradient-stops))] from-fuchsia-300 via-green-400 to-rose-700  w-[45vh]  max-w-full h-[60vh] rounded-[10px] ">
            <div className="grid grid-row grid-cols-3  p-[2vh]  ">
              <form
                onSubmit={handleFormSubmit}
                className="p-1   mt-1  text-black   font-semibold rounded-[30px] max-w-full col-span-2 "
              >
                <div className="bg-white text-xl  w-[40vh] h-14 text-black  font-semibold rounded-[30px] uppercase">
                  <input
                    type="input"
                    value={SearchInput}
                    onChange={(e) => setSearchInput(e.target.value)}
                    placeholder="Search"
                    className="text-xl  w-[37vh] h-14 text-black focus:outline-none p-2 bg-white font-semibold rounded-[30px] uppercase ml-3 mr-3"
                  />
                </div>
              </form>

              <div
                onClick={() => {
                  search();
                }}
                className="  w-14 h-14 mt-2  rounded-[40px]"
              >
                <img src={search_img} className="w-14 ml-9 " />
              </div>
            </div>

            {/* WEATHER_IMAGE */}

            <div className="flex justify-center ">
              <img
                src={weathericon}
                className="w-40 h-36 sm:h-56 sm:w-60 sm:mt-3 flex justify-center"
              />
            </div>

            {/* LOCATION */}

            <h1
              id="location_el"
              className="text-3xl max-w-full text-center tracking-tight font-akira mt-5 sm:text-5xl "
            >
              Search
            </h1>

            {/* TEMPRATURE */}

            <p
              id="temprature_el"
              className="font-akira text-3xl text-center mt-1 sm:text-6xl"
            >
              {/* - - */}- -
            </p>

            <div className="flex flex-row gap-16 sm:gap-36 sm:text-xl font-akira text-sm tracking-wide ml-4 mt-7">
              {/* HUMIDITY_GROUP */}

              <div className="flex items-center">
                <img src={humidity} className="w-14 " />
                <p id="humidity"> - -</p>
              </div>

              {/* WIND_SPEED_GROUP */}
              <div className="flex items-center">
                <img src={wind} className="w-14 " />
                <p id="wind_speed" className="ml-2">
                  - - -
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WeatherCard;
