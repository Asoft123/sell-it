import React from 'react'
import { StyleSheet, ImageBackground, View, Image, Text, Alert } from 'react-native';

import AppButton from '../components/AppButton';
import colors from '../config/colors';


export default function WelcomeScreen() {
    return (
       <ImageBackground blurRadius={5} style={styles.background} source={require('../assets/background.jpg')}>
            <View style={styles.logoContainer}>
            
                <Image style={styles.logo} source={require('../assets/logo-red.png')} /> 
                <Text style={styles.tagLine}>Sell anything you don't need</Text>
            </View>
            <View style={styles.buttonContainer}>
                <AppButton title="Login" onPress={()=>Alert.alert("How i suck", "Hello from login end")}/>
                <AppButton title="Register" onPress={()=>Alert.alert("How i suck", "Hello from registration End")}color="secondary"/>
            </View>
            
       </ImageBackground>
    )
}

const styles = StyleSheet.create({
    background:{
        flex:1,
        justifyContent:"flex-end",
        alignItems:"center"
    },
    buttonContainer:{
        padding:20,
        width:"100%"
    },
    logo:{
        width:100,
        height:100,
        
    },
    logoContainer: {
        position:"absolute",
        top:70,
        alignItems:"center"
    },
    registerButton: {
        width:'100%',
        height:70,
        backgroundColor:colors.secondary
    },
    tagLine: {
        fontSize:25,
        fontWeight:'600',
        paddingVertical:20,
    }
    
})