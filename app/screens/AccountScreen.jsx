import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';;


import Icon from '../components/Icon';
import ListItem from '../components/ListItem';
import ListSeperatorComponent from '../components/ListSeperatorComponent';
import Screen from '../components/Screen';
import colors from '../config/colors';

const menuItems =[
    {
        title:"My Listings",
        icon:{
            name:"format-list-bulleted",
            backgroundColor:colors.primary
        }
   },
   {
    title:"My Messages",
    icon:{
        name:"email",
        backgroundColor:colors.secondary
    }
}
]

function AccountScreen(props) {
    return (
        <Screen style={styles.screen}>
            <View style={styles.container}>
                <ListItem title="Festus Alabo" subTitle="festusalabo@gmail.com"image={require('../assets/mosh.jpg')}/>
            </View>
            <View style={styles.container}>
                <FlatList 
                data={menuItems}
                keyExtractor={menuItem => menuItem.title}
                ItemSeparatorComponent={ListSeperatorComponent}
                renderItem={({item}) => 
                  <ListItem 
                  title={item.title}
                  ImageComponent={
                      <Icon name={item.icon.name}  backgroundColor={item.icon.backgroundColor}/>
                  }/>
                }/>
            </View>
            <ListItem 
              title="Logout"
              ImageComponent={
                  <Icon name="logout" backgroundColor="yellow"/>
              }/>
        </Screen>
    );
}

const styles = StyleSheet.create({
    container:{
        marginVertical:20
    },
    screen:{
        backgroundColor:colors.light
    }
})
export default AccountScreen;