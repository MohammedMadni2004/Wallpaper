import { View, Text, Button, Touchable, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
export default function Home() {
  const router = useRouter();
  return (
    <>
      <View className="">
        <Text style={{ fontSize: 24, fontWeight: "bold" }}>
          Welcome to the Home Page
        </Text>
        <TouchableOpacity
          className="bg-yellow"
          onPress={() => router.push("/main")}
        >
          <Text>go to main</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}
