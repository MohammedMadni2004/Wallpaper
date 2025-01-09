import { useState } from "react";
import { TouchableOpacity,Text,View ,TextInput} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
// import { API_KEY }from '@env';

export default function Main() {  
  async function getData(){
    let finalString='';
    const arr=searchMessage.split(' ');
    for (let i=0;i<arr.length;i++){
      if(i===arr.length-1){
        finalString+=`${arr[i]}`
      }
      else{
        finalString+=`${arr[i]}+`
      }
    }
    const apiKey='nwwsjex';
    console.log(apiKey);
     const rs=await fetch(`https://pixabay.com/api/?key=${apiKey}&&q=${finalString}&image_type=photo`)
     console.log(rs);
    }
  const [searchMessage, setSearchMessage] = useState('');
  return (
    <SafeAreaView>
      <View>
      <TextInput
        value={searchMessage}
        placeholder="Enter search query"
        onChangeText={setSearchMessage}
        className="color-pink-100"
      />
      <TouchableOpacity 
      className="bg-yellow-300"
      onPress={getData} 
      >
        <Text>Search Wallpaper</Text>
      </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
