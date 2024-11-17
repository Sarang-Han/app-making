import { Text, View } from "react-native";
import { useState, useEffect } from "react";
import React from "react";

var text_st = { fontSize:50 };

export default function App() {
  const [hour, setHour] = useState("");
  const [min, setMin] = useState("");
  const [sec, setSec] = useState(""); 
  const [time, setTime] = useState("");

  useEffect(function () {
    setInterval(run_everysec, 1000);
  }, []);

  function run_everysec() {
    var date = new Date();
    var hours = date.getHours();
    var ampm = hours < 12 ? "am" : "pm";

    if (hours > 12) {
        hours -= 12;
    } else if (hours === 0) {
        hours = 12; // 0시를 12시로 변환
    }

    setHour(padZero(hours));
    setMin(padZero(date.getMinutes()));
    setSec(padZero(date.getSeconds()));
    setTime(ampm);
  }

  function padZero(num: number): string {
    return num < 10 ? `0${num}` : num.toString();
  }
  
  return (
    <View style={[{flexDirection: 'row'}, {padding:10}, {backgroundColor: '#FFF0E6'}]}>
      <Text style={[text_st, {fontWeight: 'bold'}]}>{hour}:{min}</Text>
      <Text style={text_st}>:{sec} {time}</Text>
    </View>
  );
}
