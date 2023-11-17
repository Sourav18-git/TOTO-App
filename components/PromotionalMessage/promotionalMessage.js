import { StatusBar } from 'expo-status-bar';
// import React from 'react';
import react from 'react';
import { StyleSheet, Text, View } from 'react-native';  


const PromoMessage=()=>{
    return(
        <View style={styles.container}>
            <Text style ={ styles.PromoText}>
                50% off On Your First Ride
            </Text>
        </View>

    );
}
export default PromoMessage; 

const styles = StyleSheet.create({
    PromoText:{
        // flex:1,
        color:'white',
fontSize:20,

    },
    container:{
        // flex:1,
        justifyContent:'center',
        alignItems:'center',
        padding:10,
        width:397,
        backgroundColor:"green",
        // borderRadius:10,
        // marginTop:-9,
borderTopLeftRadius:10,
borderTopRightRadius:10,
    }
})