import React from 'react';
import { View, Text } from 'react-native';
import { useEffect, useState } from 'react';

var url = "http://api.openweathermap.org/data/2.5/weather?q=Seoul&units=metric&appid=6af8dad4784c634d3674f60110f2a015";
var text_st = {fontSize:20};

export default function App() {
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const [temp, setTemp] = useState('');
  const [weather, setWeather] = useState('');
  const [wind, setWind] = useState('');

  useEffect(function() {
    fetch(url)
    .then(function (response) { return response.json(); })
    .then(function (json) {
      console.log(json);
      setCity(json.name);
      setCountry(json.sys.country);
      setTemp(json.main.temp);
      setWeather(json.weather[0].description);
      setWind(json.wind.speed);
    })
    .catch(function (error) {console.error(error);})
  }, []);

  return (
    <View style={{ flex:1, padding: 20}}>
      <Text style={text_st}>City: {city}</Text>
      <Text style={text_st}>Country: {country}</Text>
      <Text style={text_st}>Temp: {temp}</Text>
      <Text style={text_st}>Weather: {weather}</Text>
      <Text style={text_st}>Wind: {wind}</Text>
    </View>
  );
};