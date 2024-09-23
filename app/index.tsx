import { Text, View, Image } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}>

      <View style={{backgroundColor:"cyan"}}>
        <Text style={{fontSize:30}}>Hello Ewha</Text>
        <Text style={{fontSize:24, color:"blue"}}>
        Nice to meet you!
      </Text>
    </View>
      <Image style={{width:200, height:200}}
        source={require('@/assets/images/cat.png')} />
    </View>
  );
}
