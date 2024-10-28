import { Text, View, Button, StyleSheet } from "react-native";
import { useState } from "react";
import React from "react";

var st_circle = {
  width: 30,
  height: 30,
  borderRadius: 20,
  backgroundColor: 'rgb(0, 200, 255)', 
  margin: 2
};

var st_dice = {
  backgroundColor: 'rgb(255, 240, 200)',
  padding: 10
};

function Circle() {
  return <View style={st_circle} />;
}

function Blank() {
  return <View style={[st_circle, {backgroundColor: 'rgb(255, 240, 200)', borderWidth: 0}]} />;
}

interface DiceProps {
  num: number;
}

function Dice(props: DiceProps) {
  if(props.num == 1){
    return (
      <View style={st_dice}>
        <View style={{flexDirection: 'row'}}><Blank /><Blank /><Blank /></View>
        <View style={{flexDirection: 'row'}}><Blank /><Circle /><Blank /></View>
        <View style={{flexDirection: 'row'}}><Blank /><Blank /><Blank /></View>
      </View>
    );
  } else if(props.num == 2){
    return (
      <View style={st_dice}>
        <View style={{flexDirection: 'row'}}><Circle /><Blank /><Blank /></View>
        <View style={{flexDirection: 'row'}}><Blank /><Blank /><Blank /></View>
        <View style={{flexDirection: 'row'}}><Blank /><Blank /><Circle /></View>
      </View>
    );
  } else if(props.num == 3){
    return (
      <View style={st_dice}>
        <View style={{flexDirection: 'row'}}><Circle /><Blank /><Blank /></View>
        <View style={{flexDirection: 'row'}}><Blank /><Circle /><Blank /></View>
        <View style={{flexDirection: 'row'}}><Blank /><Blank /><Circle /></View>
      </View>
    );
  } else if(props.num == 4){
    return (
      <View style={st_dice}>
        <View style={{flexDirection: 'row'}}><Circle /><Blank /><Circle /></View>
        <View style={{flexDirection: 'row'}}><Blank /><Blank /><Blank /></View>
        <View style={{flexDirection: 'row'}}><Circle /><Blank /><Circle /></View>
      </View>
    );
  } else if(props.num == 5){
    return (
      <View style={st_dice}>
        <View style={{flexDirection: 'row'}}><Circle /><Blank /><Circle /></View>
        <View style={{flexDirection: 'row'}}><Blank /><Circle /><Blank /></View>
        <View style={{flexDirection: 'row'}}><Circle /><Blank /><Circle /></View>
      </View>
    );
  } else {
    return (
      <View style={st_dice}>
        <View style={{flexDirection: 'row'}}><Circle /><Blank /><Circle /></View>
        <View style={{flexDirection: 'row'}}><Circle /><Blank /><Circle /></View>
        <View style={{flexDirection: 'row'}}><Circle /><Blank /><Circle /></View>
      </View>
    );
  }
}

export default function App() {
  const [N, setN] = useState(1)

  return (
    <View style={{flex:1}}>
      <Text style={styles.text}>Dice</Text>
      <View style={{flexDirection: 'row', justifyContent: 'center'}}>
      <Dice num={N} />
    </View>
    <View style={{marginHorizontal:100, marginVertical:30}}>
      <Button title="Roll" onPress={
        () => setN(Math.floor(Math.random() * 6) + 1)} />
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
    fontSize: 20,
    margin: 10,
  },
});