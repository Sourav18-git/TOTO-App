import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, SafeAreaView,Pressable } from "react-native";
import HomeMap from "../../../components/HomeMaps/HomeMaps";
import Veichle from "../../../components/VeichleType/Veichle";
import { FontAwesome } from '@expo/vector-icons';
import types from "../../../assets/data/types";

const VeichleType=()=>{
    const confirm=()=>{
        console.warn('confirm')
    }

    return(
       <SafeAreaView>
<HomeMap></HomeMap>
{/* <Text style={{fontSize:20,fontWeight:400,
alignItems:'center',marginLeft:78}}><FontAwesome name="rupee" size={16} color="green" /> 70 discount applied</Text> */}
<View>
    {types.map(types=> <Veichle types={types} />)}
</View>
<Pressable onPress={confirm} style={{width:"100",backgroundColor:"black",padding:10,margin:10,alignItems:'center'}}>
    <Text style={{color:'white',fontWeight:"bold"}}>Confirm Ride</Text>
</Pressable>
       </SafeAreaView> 
    )
}
export default VeichleType;