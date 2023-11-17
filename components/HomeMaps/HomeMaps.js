// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View ,Image} from 'react-native';  


const HomeMap=()=>{
    return(
                     
        <View>

{/* <Image source={require('./assets/images/faviicon.png')} /> */}
<Image  style={{width:500,height:360}} source={{uri:"https://www.researchgate.net/publication/327930833/figure/fig1/AS:675683210645504@1538106839183/General-location-map-Google-Maps-2010.png"}} />
        </View>  
    );
}
export default HomeMap;


