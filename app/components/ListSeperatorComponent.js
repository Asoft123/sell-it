import React from 'react';
import { View, StyleSheet } from 'react-native'
import colors from '../config/colors';


function ListSeperatorComponent(props) {
    return (
        <View style={styles.listSeperator} />
    );
}
const styles = StyleSheet.create({
    listSeperator:{
        width:"100%", 
        height:2, 
        backgroundColor:colors.danger
    }
})
export default ListSeperatorComponent;