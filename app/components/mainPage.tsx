import { useState } from "react";
import { TextInput } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Main() {
  const [searchMessage, setSearchMessage] = useState('');
  return (
    <SafeAreaView>
      <TextInput
        value={searchMessage}
        placeholder="Enter search query"
        onChangeText={setSearchMessage}
        className="color-pink-100"
      />
    </SafeAreaView>
  );
}
