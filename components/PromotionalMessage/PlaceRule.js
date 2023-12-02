import React from "react";
import { View,Text, StyleSheet } from "react-native";
import { Entypo } from '@expo/vector-icons';
const PlaceRule=({data})=>{
    console.log(data)
    return(
        <View style={styles.row}>
            <View style={styles.iconContainer}>
            <Entypo name="location-pin" size={20} color="white" /></View>
            <Text style={styles.locationText}>{data.description}</Text>
        </View>
    )
}
export default PlaceRule;
const styles=StyleSheet.create({
row:{
flexDirection:'row',
alignItems:'center',
marginVertical:10,
},
iconContainer:{
backgroundColor:"#a2a2a2",
padding:5,
borderRadius:50,
marginRight:15
},
locationText:{

}
})