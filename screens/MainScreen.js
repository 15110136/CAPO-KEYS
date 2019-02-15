import React, { Component } from 'react';
import { View, Platform } from "react-native";
import icon from '../assets/icons/pure-icon.png'
import { STATUS_BAR_HEIGHT } from "../constants";

class MainScreen extends Component {
    static navigatorOptions = () => ({
        title: 'Capo Keys',
        headerStyle: {
            height: Platform.OS === 'android' ? 54 + STATUS_BAR_HEIGHT : 54,
            backgroundColor: '#2196F3'
        },
        headerTitleStyle: {
            marginTop: Platform.OS === 'android' ? STATUS_BAR_HEIGHT : 0,
            color: 'white'
        },
        headerLeft: (
            <Image source={icon} style={styles.imageStyle} />
        )
    })
    render() {
        return(
            <View style={{ flex: 1, backgroundColor: '#ddd' }}></View>
        )
    }
}
const styles={
    imageStyle:{
        marginTop:20,
        marginLeft:10,
        width:40,
        height:40
    }
}
export default MainScreen;