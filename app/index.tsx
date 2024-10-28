import { Text, View, Button, StyleSheet } from "react-native";
import { useState } from "react";
import React from "react";

// npx expo start

var st_circle = {
  width: 30,
  height: 30,
  borderRadius: 20,
  backgroundColor: 'rgb(0, 200, 255)', 
  margin: 2
};

var st_dice = {
  backgroundColor: 'rgb(255, 240, 200)',
  padding: 10,
  margin: 5  // 주사위 사이 간격을 위해 추가
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
  const [N1, setN1] = useState(1);  // 첫 번째 주사위
  const [N2, setN2] = useState(1);  // 두 번째 주사위

  const rollDice = () => {
    setN1(Math.floor(Math.random() * 6) + 1);
    setN2(Math.floor(Math.random() * 6) + 1);
  };

  return (
    <View style={{flex:1}}>
      <Text style={styles.text}>Double Dice</Text>
        <Text style={styles.text}>{N1 + N2}</Text>
      <View style={{flexDirection: 'row', justifyContent: 'center'}}>
        <Dice num={N1} />
        <Dice num={N2} />
      </View>
      
      <View style={{marginHorizontal:100, marginVertical:30}}>
        <Button title="Roll" onPress={rollDice} />
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
  sumContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  sumText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'rgb(0, 200, 255)',
  }
});