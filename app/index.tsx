import React from 'react';
import { View, Text } from 'react-native';

var text_st = {flex:1, fontSize:20, borderWidth:2, padding:5, margin:2};

var N = ['A', 'B', 'C', 'D'];
var P = [1234, 5678, 9101, 1121];

export default function App() {

  var L = [];

  for (var i = 0; i < N.length; i++){
    var a = <View style={{flexDirection:"row"}}>
      <Text style={text_st}>{N[i]}</Text>
      <Text style={text_st}>{P[i]}</Text>
      </View>;
    L.push(a);
  }
  return (
    <View>
      {L}
    </View>

  );
}