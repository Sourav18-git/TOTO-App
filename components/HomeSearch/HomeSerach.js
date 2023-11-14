import React from "react";
import { View, StyleSheet, Text } from "react-native";
// import { MaterialIcons } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

const HomeSearch = () => {
    return (
        <View>
            <View style={styles.inputboX}>
                <Text style={styles.inputText}>Where To</Text>
            
            <View style={styles.timeContainer}>
                <AntDesign name="clockcircle" size={20} color="black" />
                <Text>Now</Text>
                <MaterialIcons name="keyboard-arrow-down" size={20} color="black" />
            </View>
            </View>
        </View>
    ) 
}
export default HomeSearch;
const styles = StyleSheet.create({
    inputboX: {
        width:379,
        backgroundColor: '#d9d9d9',
        padding:10,
        margin: 10 ,
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    inputText: {
fontSize:20,
fontWeight:'600',
color:"#6e6e6e"

    },
    timeContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        width:100,
        backgroundColor:'#fff',
        padding:10,
        borderRadius:50

    }

})