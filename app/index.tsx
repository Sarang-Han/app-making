import { Text, View, Button } from "react-native";
import { router } from "expo-router";

var text_st = { fontSize: 20, margin: 10 };

export default function Index() {
  return (
    <View>
      <Text style={text_st}>Home Screen</Text>
      <Button title="About" onPress={() => router.navigate({ pathname: '/about' })} />
      <View style={{ height: 10 }} />
      <Button title="Hello" onPress={() => router.navigate({ pathname: '/hello' })} />
      <View style={{ height: 10 }} />
      <Button title="구구단" onPress={() => router.navigate({ pathname: '/mult' })} />
    </View>
  );
}