// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, StatusBar } from 'react-native';

import DestinationSerach from './Screens/HomeScreen/DestinationsScreen/DestinationsScreen';
import HomeScreen from './Screens/HomeScreen/HomeScreen/Homescreen';
import VeichleType from './Screens/HomeScreen/VeichleTypeScreen/veichleType';
import Payment from './Screens/HomeScreen/PaymentScreen/Payment';

export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" />
      {/* <HomeScreen></HomeScreen> */}
      {/* <DestinationSerach></DestinationSerach> */}
      {/* <VeichleType></VeichleType> */}
      <Payment></Payment>
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
