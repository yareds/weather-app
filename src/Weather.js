import React from "react";
import "./styles.css";
import moment from "moment";
import { Button } from "semantic-ui-react";

const refresh = () => {
  window.location.reload();
};

const CardExampleCard = ({ weatherData }) => {
  return (
    <div className="main">
      <div className="top">
        <p className="header">{weatherData.name}</p>
        <Button
          className="button"
          inverted
          color="blue"
          circular
          icon="refresh"
          onClick={refresh}
        />

        <div className="top">
          <img
            id="image"
            src="https://openweathermap.org/img/wn/02n@2x.png"
          ></img>{" "}
        </div>
      </div>
      <div className="flex">
        <p className="day">Day: {moment().format("dddd")}</p>
        <p className="day">{moment().format("LL")}</p>
      </div>
      <div className="flex">
        <p className="temp">Temprature: {weatherData.main.temp} &deg;C</p>
        <p className="temp">Humidity: {weatherData.main.humidity} %</p>
      </div>
      {/* <a
        class="weatherwidget-io"
        href="https://forecast7.com/en/40d71n74d01/new-york/"
        data-label_1="Arlington"
        data-label_2="WEATHER"
        data-theme="original"
        onClick={false}
      >
        Arlington WEATHER
      </a>
      <div>
        {
          !(function (d, s, id) {
            var js,
              fjs = d.getElementsByTagName(s)[0];
            if (!d.getElementById(id)) {
              js = d.createElement(s);
              js.id = id;
              js.src = "https://weatherwidget.io/js/widget.min.js";
              fjs.parentNode.insertBefore(js, fjs);
            }
          })(document, "script", "weatherwidget-io-js")
        }
        ;
      </div> */}

      {/* <div id="openweathermap-widget-11"></div>
      <div src="//openweathermap.org/themes/openweathermap/assets/vendor/owm/js/d3.min.js"></div>
      {window.myWidgetParam
        ? window.myWidgetParam
        : (window.myWidgetParam = [])}
      {window.myWidgetParam.push({
        id: 11,
        cityid: "4671240",
        appid: "f070781c6d2624cd1c02a523aeca5f6c",
        units: "imperial",
        containerid: "openweathermap-widget-11",
      })}
      ;
      {(function () {
        var script = document.createElement("script");
        script.charAt = true;
        script.charset = "utf-8";
        script.src =
          "//openweathermap.org/themes/openweathermap/assets/vendor/owm/js/weather-widget-generator.js";
        var s = document.getElementsByTagName("script")[0];
        s.parentNode.insertBefore(script, s);
      })()}
      ; */}
    </div>
  );
};

export default CardExampleCard;
