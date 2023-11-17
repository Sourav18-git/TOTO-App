import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const Referral = () => {
    return (
        <>
            <View style={styles.referBOx}>
                <View  >
                    <Text style={styles.referText}>Invite your friends to try TOTO</Text>
                </View>
                <View style={styles.refercodeBox}>
                    <Text style={styles.referCode}>G E X K 5 W U</Text>
                    <AntDesign name="copy1" size={20} color="black"  />

                </View>
                <Text style={styles.referLink}>Share invite code</Text>

                <View>
                    <Image style={styles.referImage} source={{ uri: "https://yashus.in/wp-content/uploads/2020/07/refer-a-friend.jpg" }} />
                </View>
            </View>
        </>
    );
}
export default Referral;
const styles = StyleSheet.create({
    referBOx: {
        // backgroundColor:'lightgrey',
        borderRadius:20,borderWidth:1,
        marginLeft: 10,width:375,height:150,marginTop:7

    },
    referText: {
        fontSize: 20,
        color: 'lightbalck',
        marginLeft:6
        // padding:4

    },
    refercodeBox:{
        flexDirection:'row',
        justifyContent:'space-between',alignItems:'center',
        backgroundColor: 'lightgrey',
        borderRadius: 60, marginTop: 10,
        width: 180,
        padding: 10,
        marginLeft:4


    }
    ,
    referCode: {
        marginRight:7,
        fontSize: 20,
        fontWeight:'600'
     
        
    },
    referLink: {
        color: 'blue', 
        fontSize: 15,
        padding: 10

    },
    referImage: {
        width: 180, height: 121,
        alignItems: 'flex-end'
        , position: 'absolute',
        right: 2,
        top: -100
    }
})