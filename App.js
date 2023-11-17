// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, StatusBar } from 'react-native';
import HomeScreen from './components/HomeScreen/Homescreen';


export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <HomeScreen></HomeScreen>
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
