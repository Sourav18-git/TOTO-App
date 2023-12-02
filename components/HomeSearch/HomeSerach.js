import React from "react";
import { View, StyleSheet, Text } from "react-native";
// import { MaterialIcons } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

const HomeSearch = () => {
    return (
        <View style={styles.mainContainer}>
            {/* input BOx */}
            <View style={styles.inputboX}>
                <Text style={styles.inputText}>Where To</Text>

                <View style={styles.timeContainer}>
                    <AntDesign name="clockcircle" size={20} color="black" />
                    <Text>Now</Text>
                    <MaterialIcons name="keyboard-arrow-down" size={20} color="black" />
                </View>
            </View>


            {/* previous destination */}
            <View style={styles.row}>
                <View style={styles.iconContainer}>
                    <AntDesign name="clockcircle" size={19} color="white" />
                </View>
                <Text style={styles.destinationText}>Kolkata club</Text>
            </View>

            {/* home destination */}

            <View style={styles.row}>
                <View style={[styles.iconContainer, {
                    backgroundColor: '#218cff', borderRadius: 50
                }]}>
                    <Entypo name="home" size={24} color="white" />
                </View>
                <Text style={styles.destinationText}>Home </Text>
            </View>
        </View>
    )
}
export default HomeSearch;
const styles = StyleSheet.create({
mainContainer:{
    borderRadius:20,borderWidth:1,width:375,height:230,
   borderColor:'balck',
   marginLeft:10,marginTop:5
    // justifyContent:'center',
    // alignItems:'center'
}
    ,
    inputboX: {
        width: 373,
        backgroundColor: '#d9d9d9',
        padding: 10,
        // margin: 10,
        // marginLeft:1,
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: 'center',
        borderTopLeftRadius:18,
        borderTopRightRadius:18,
    },
    inputText: {
        fontSize: 20,
        fontWeight: '600',
        color: "#434343"

    },
    timeContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 100,
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 50

    },
    // styles for destination

    row: {
        flexDirection: 'row',
        padding: 14
        ,
        alignItems: 'center',
        borderBottomWidth: 1,
        borderColor: "#dbdbdb"
    },

    iconContainer: {
        backgroundColor: "#b3b3b3",
        padding: 16,
        borderRadius: 30

    },
    destinationText: {
        marginLeft: 10,
        fontWeight: "400",
        fontSize: 18,
    }
})