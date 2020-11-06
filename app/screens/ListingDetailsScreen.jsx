import React from 'react';
import { View, Image, StyleSheet} from 'react-native';

import AppText from '../components/AppText';
import ListItem from '../components/ListItem';

import colors from '../config/colors';

function ListingDetailsScreen(props) {
    return (
       <View>
            <Image style={styles.image} source={require("../assets/jacket.jpg")}/>
            <View style={styles.detailsContainer}>
                <AppText style={styles.title}>Red Couch for sale</AppText>
                <AppText style={styles.price}>$200</AppText>
                <View style={styles.userConatainer}>
                    <ListItem 
                        image={require('../assets/mosh.jpg')}
                        title="Festus Alabo"
                        subTitle="5 Listings"
                        />
                </View>
                

            </View>
       </View>
    );
}

const styles = StyleSheet.create({
    image:{
        width:"100%",
        height:300,
    }, 
    detailsContainer: {
        padding:20
    },
   
    title:{
        fontWeight:"500",
        fontSize:24
    },
    price:{
        color:colors.secondary,
        fontWeight:"bold",
        fontSize:20,
        marginVertical:10
    },
    userConatainer:{
        marginVertical:35
    }
})
export default ListingDetailsScreen;