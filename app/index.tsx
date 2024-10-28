import { Text, View, Button, TextInput } from "react-native";
import { useState } from "react";
import React from "react";

var input_st = { fontSize: 20, borderWidth: 1, borderColor: 'gray', flex: 1, padding: 5, margin: 2 };

var N = ['Ewha', 'June', 'Jane', "Nick"];
var P = [1234, 3344, 1111, 1212];

export default function App() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [refresh, setRefresh] = useState(0);

  function add_item() {
    N.push(name);
    P.push(Number(phone));
    setRefresh(refresh + 1);
  }

  var L = [];

  for (var i = 0; i < N.length; i++) {
    var a = (
      <View key={i} style={{ flexDirection: 'row', marginBottom: 5 }}>
        <TextInput 
          style={[input_st, { marginRight: 5 }]} 
          value={N[i]} 
          editable={false} 
        />
        <TextInput 
          style={input_st} 
          value={P[i].toString()} 
          editable={false} 
        />
      </View>
    );
    L.push(a);
  }

  return (
    <View>
      <Text style={{fontSize: 40}}>Phone Book</Text>
      <View style={{margin: 10, flexDirection: 'row'}}>
        <TextInput style={input_st} onChangeText={setName} placeholder="Name"/>
        <TextInput style={input_st} onChangeText={setPhone} placeholder="Phone"/>
        <Button title="ADD" onPress={add_item}/>
      </View>
      {L}
    </View>
  );
}