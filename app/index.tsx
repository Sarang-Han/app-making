import React from 'react';
import { View, Text } from 'react-native';

let el = <Text>Hello World</Text>; //재할당 가능 변수에 담기

  for (let i = 0; i < 5; i++) {
    el = <View style={{borderWidth: 2, padding: 20}}>{el}</View>;
  }

export default function App() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      {el}
    </View>
  );
}