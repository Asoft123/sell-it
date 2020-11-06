import React from 'react';
import { TextInput, StyleSheet} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import colors from '../config/colors';



function AppTextInput(props) {
    return (
        <View style={styles.container}>
            <MaterialCommunityIcons />
            <TextInput />
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:colors.lightgray,
        borderRadius:25,
        flexDirection:"row",
        width:"100%",
        
    }
})
export default AppTextInput;