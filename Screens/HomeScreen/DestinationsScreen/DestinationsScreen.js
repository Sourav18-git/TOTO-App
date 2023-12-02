import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, SafeAreaView, } from "react-native";
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import PlaceRule from "../../../components/PromotionalMessage/PlaceRule";

import Config from "../../../Config";
// import {Prod_Api} from '@env' 
import {APP_NAME, API_KEY, COMPANY_EMAIL,Prod_Api} from '@env'

const DestinationSerach = (props) => {
    const [fromText, setfromText] = useState('');
    const [destinationText, setdestinationText] = useState('');
    const [originPlace, SetOriginPlace] = useState(null);
    const [destinationPlace, SetDestinationPlace] = useState(null);

      
    return (
        <SafeAreaView>
   
            <View style={styles.container}>
            {/* <Text>{Prod_Api}</Text> */}
                <GooglePlacesAutocomplete
                    placeholder=' Where From'
                    onPress={(data,details= null) => {
                        // 'details' is provided when fetchDetails = true
                        SetOriginPlace({data,details});
                       
                    }}
                    enablePoweredByContainer={false}
                    suppressDefaultStyles
                    styles={{
                        textInput: styles.texinput,
                        container: {
                            position: "absolute",
                            top: 5,
                            left: 10,
                            right: 10,
                        },
                        listView: {
                            position: 'absolute',
                            top: 115,
                            marginLeft:5
                        },
                        separator: {
                            backgroundColor: '#efefef',
                            height: 1,
                        }

                    }}
                    fetchDetails
                    query={{
                        // key: 'AIzaSyDTv1-zwi5KTLgNM2UOmT93y1RT4tywzNs',
                        language: 'en',
                    }}
                    renderRow={(data:GooglePlaceData) => < PlaceRule data={data} />}
                    onFail={error => console.log(error)}
                    onNotFound={() => console.log('no results')}
                    listEmptyComponent={() => (
                        <View style={{flex: 1,marginTop:8}}>
                          <Text>No results were found</Text>
                        </View>)}
                />
                <GooglePlacesAutocomplete
                    placeholder="Where To"
                  enablePoweredByContainer={false}
                    suppressDefaultStyles
                    styles={{
                        textInput: styles.texinput,
                        container: {
                            position: "absolute",
                            top: 65,
                            left: 10,
                            right: 10,
                        },
                        separator: {
                            backgroundColor: '#efefef',
                            height: 1,
                        }
                    }}
               
                renderRow={(data: GooglePlaceData) => <PlaceRule data={data} />}

                query={{key:`${API_KEY}`}}
        fetchDetails={true}
        onPress={(data, details = null) =>SetDestinationPlace({data,details}) }
        onFail={error => console.log(error)}
        onNotFound={() => console.log('no results')}
        listEmptyComponent={() => (
            <View style={{flex: 1}}>
              <Text>No results were found</Text>
            </View>)}
        />
{/* circle near Origin Input */}
<View style={styles.circleIcon}></View>
{/* line between dots */}
<View style={styles.LineIcon}></View>
{/* icon near destination box */}
<View style={styles.destinationIcon}></View>

            </View>
        </SafeAreaView>
    );
}
export default DestinationSerach;

const styles = StyleSheet.create({
    container: {
        padding: 10,
        // backgroundColor: "#eee",
        height: '100%',
        // flex:1

    },
    texinput: {
        padding: 10,
        backgroundColor: '#eee',
        marginVertical: 5,
        marginLeft:24,
        marginTop:10
    },
    listView: {
        position: 'absolute',
        top: 105,
    },
    circleIcon:{
        width:10,
        height:10,
        position:"absolute",
        backgroundColor:'black',
        top:35,
        left:16,
        borderRadius:5
    },
    LineIcon:{
        width:1,
        height:55,
        position:"absolute",
        backgroundColor:'black',
        top:37,
        left:20
    },
    destinationIcon:{
        width:8,
        height:8,
        position:"absolute",
        backgroundColor:'black',
        top:90,
        left:16
    }

})