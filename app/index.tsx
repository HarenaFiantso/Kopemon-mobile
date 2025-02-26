import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Home() {
  return <View>
    <Text>Home screen</Text>
    <Link href="/details">Go to details</Link>
  </View>
}
