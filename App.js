// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image,StatusBar } from 'react-native';
import HomeScreen from './components/HomeMaps/Homescreen';
import HomeMap from './components/HomeMaps/HomeMaps';
import PromoMessage from './components/HomeMaps/promotionalMessage';
import HomeSearch from './components/HomeSearch/HomeSerach';    
 
export default function App() {
  return (
    <>     
    <StatusBar barStyle="light-content" />
   <View style={styles.container}>
    
  
      <HomeMap></HomeMap> 
   <PromoMessage></PromoMessage> 
   </View>  
   <View style={{flex:1}}> 
      <HomeSearch></HomeSearch> 
  
   </View> 
    </>
 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

});
