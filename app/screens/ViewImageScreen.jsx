import React from 'react'
import { StyleSheet,Image, View, Text, Alert } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import colors from '../config/colors'
import Screen from '../components/Screen';

export default function ViewImageScreen() {
    return (
        // <View style={styles.container} >
        <Screen>
                <View style={styles.closeIcon}>
                <MaterialCommunityIcons name="close" size={35} color={colors.danger}/>
                
                </View>
                <View style={styles.deleteIcon}>
                <MaterialCommunityIcons name="trash-can-outline" size={35} color={colors.secondary} onPress={()=>Alert.alert('Sell it', "Delete button was clicked")}/>
                </View>
                <Image 
                    style={styles.image} 
                    resizeMode="contain" 
                    source={require('../assets/chair.jpg')} />
                    </Screen>
            // </View>
    )
}

const styles = StyleSheet.create({
    closeIcon:{
        // width:50,
        // height:50,
        // backgroundColor:colors.primary,
        position:"absolute",
        top:20,
        left:40,
        zIndex:1
     
    },
    container:{
        backgroundColor:colors.medium,
        flex:1
    },
    deleteIcon:{
        // width:50,
        // height:50,
        // backgroundColor:colors.secondary,
        position:"absolute",
        top:20,
        right:40,
        zIndex:1
    },
    image:{
        width:"100%",
        height:"100%"
    }
    
})