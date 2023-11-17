import { StatusBar } from 'expo-status-bar';
// import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomeMap from '../HomeMaps/HomeMaps';
import PromoMessage from '../PromotionalMessage/promotionalMessage';
import HomeSearch from '../HomeSearch/HomeSerach';
import Referral from '../PromotionalMessage/ReferralMessage';


const HomeScreen = () => {
  return (
    <>
      <View style={styles.container}>


        <HomeMap></HomeMap>
        <PromoMessage></PromoMessage>
      </View>
      <View style={{ flex: 1 ,}}>
        <HomeSearch></HomeSearch>
        <Referral></Referral>
      </View>
    </>
  );
}
export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

});
