import Home from "./components/homePage";
import SafeAreaView  from 'react-native-gesture-handler';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from "react-native-safe-area-context";
import Layout from './layout'
export default function HomePage() {

  return( 
    <Layout>
      <Home />
      </Layout>

)
}
