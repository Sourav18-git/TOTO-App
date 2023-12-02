import React from "react";
import { StyleSheet, Text, View, Image, StatusBar, SafeAreaView } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
const Invoice = () => {
    return (
        <>
            <SafeAreaView>
                <View style={styles.container} >
                    <View style={styles.heading} >
                        <Text style={styles.headingText}> Invoice</Text>
                    </View  >
                    <View  style={styles.container1}>
                        <View style={styles.pickup}>
                            <MaterialCommunityIcons name="home-map-marker" size={24} color="blue" />
                            <Text style={styles.PickupText}>Pickup</Text>
                        </View>
                        <View style={styles.adress}>

                            <Text style={styles.adressText}>your Pickup ADDRESS...TOTO APP ride</Text>
                        </View>
                    </View>
                </View>

            </SafeAreaView >
        </>

    );
}
export default Invoice;
const styles = StyleSheet.create(
    {
        container: {
            // flex: 1,
            // backgroundColor: '#fff',
            // alignItems: 'center',
            // justifyContent: 'center',
        },
        heading: {
            padding: 10
        },
        headingText: {
            fontWeight: 'bold',
            fontSize: 24,
        },
        container1:{
            padding: 20,
            borderWidth: .5,
            borderColor: 'lightblack',
            // backgroundColor: 'lightgrey',
        },

        pickup: {
            flexDirection: "row",
           marginLeft:5
           
        }
        , PickupText: {
            fontSize: 18

        }

    }
)