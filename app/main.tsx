import Main from "./components/mainPage";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Layout from "./layout";
export default function main() {
  return (
    <Layout>
      <Main />
    </Layout>
  );
}
