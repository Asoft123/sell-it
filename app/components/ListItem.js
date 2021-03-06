import React from 'react';
import { Image, View, StyleSheet, TouchableHighlight } from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';

import colors from '../config/colors';
import AppText from './AppText';

function ListItem({image, title, subTitle, ImageComponent, onPress, renderRightActions, }) {
    return (
        <Swipeable renderRightActions={renderRightActions}>
            <TouchableHighlight
            underlayColor={colors.light}
            onPress={onPress}
            >
            
                <View style={styles.container}>
                    {ImageComponent}
                    {image && <Image style={styles.image} source={image} />}
                    <View style={styles.userDetails}>
                    <AppText style={styles.title}>{title}</AppText>
                    {subTitle && <AppText style={styles.subTitle}>{subTitle}</AppText>}

                    </View>
                </View>
            </TouchableHighlight>
        </Swipeable>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection:"row",
        padding:15,
        backgroundColor:colors.white
    },
    image:{
        width:70,
        height:70,
        borderRadius:35
    },
    title:{
        fontWeight:"500"
    },
    userDetails: {
        marginLeft:7,
        justifyContent:"center"
    },
    subTitle:{
        color:colors.medium
    },

})
export default ListItem;