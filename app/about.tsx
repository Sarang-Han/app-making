import { Text, Image, View } from "react-native";

var text_st = {fontSize:20, margin:10};

export default function About() {
  return (
    <View>
    <Text style={text_st}>This is about the app</Text>
    <Image style={{width:200, height:200}}
      source={require('./cat-icon.png')} />
    </View>
  );
}