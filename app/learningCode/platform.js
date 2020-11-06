const { Platform } = require("react-native");


Platform.select({
    ios:{
        fontSize:20,
        fontFamily:"Avenir"
    },
    android:{
        fontSize:18,
        fontFamily:"Roboto"
    }
})