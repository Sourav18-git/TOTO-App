import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, SafeAreaView, Image, Pressable } from "react-native";
import { Ionicons } from '@expo/vector-icons';

const Veichle = (props) => {
    const {types}=props;
    const [selected, setSelected] = useState(false);
    const getImage=()=>{
        if(types.type=='TotoX'){
            return require('../../assets/images/TotoX.jpeg')
        }
        if(types.type=='Comfort'){
            return require('../../assets/images/Comfort.jpeg')
        }
        if(types.type=='TotoXL'){
            return require('../../assets/images/TotoXL.jpeg')
        }
    }

    return (
        <SafeAreaView>
            <Pressable onPress={() => setSelected(!selected)}
        style={{ backgroundColor: selected ? "grey" : "transparent" }}>
            <View style={styles.container}>
                <Image style={styles.CarImage} source={getImage()} />

                <View style={styles.middlecontainer}>
                    <Text style={styles.types}>
                        {types.type}{'  '}
                        <Ionicons name="person" size={16} color="black" />3
                    </Text>
                    <Text style={styles.time} >
                        8.30PM drop off
                    </Text>

                </View>
                <View style={styles.rightcontainer}>
                    <Ionicons name="pricetag" size={18} color="green" />
                    <Text style={styles.price}>{types.price}</Text>
                </View>

            </View>
            </Pressable>
        </SafeAreaView>
    )
}
export default Veichle;


const styles = StyleSheet.create({
    container: {
       flexDirection:'row',
       justifyContent:'space-between',
       alignItems:'center',
       padding:16
    },

    CarImage: {
        width: 78,
        height: 50,
        resizeMode:'contain',
        marginLeft: 10,
        marginTop: 10,

    },
    middlecontainer:{
flex:1,
marginHorizontal:10
    },
    rightcontainer:{
width:100,
flexDirection:'row',
justifyContent:'flex-end'

    },
    time:{
color:'#5d5d5d'
    },
    types:{
fontWeight:"bold",
fontSize:18,
marginBottom:5
    },
    price:{
        fontWeight:"bold",
        fontSize:18,
        marginLeft:5
    }
})