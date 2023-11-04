import { Image, ImageBackground, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Fonts from '../../utils/Fonts';

const WelcomeScreen = ({ navigation }) => {
    const btnGoHome = () => {
        navigation.navigate('TabStack');
    }
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ImageBackground source={require('../../assets/images/bgImage.png')} style={{ width: '100%', height: '100%', }}>
                <View style={{ height: 126, width:'100%'  }}>

                    <Image source={require('../../assets/images/Aspen.png')} resizeMode='contain' style={{ alignSelf: 'center', marginTop: '30%' , height:126 , width:263 }} />
                </View>
                <View style={styles.textContainer}>
                    <Text style={[styles.text, { color: '#fff', fontSize: 28, fontFamily:Fonts.Montserrat.Montserrat_Medium }]}>Plan Your</Text>
                    <Text style={[styles.text, { color: '#fff', fontSize: 40 , fontFamily:Fonts.Montserrat.Montserrat_Bold }]}>Luxurious</Text>
                    <Text style={[styles.text, { color: '#fff', fontSize: 40 }]}>Vacation</Text>
                </View>
                <TouchableOpacity style={styles.button} activeOpacity={0.7} onPress={()=>btnGoHome()}>
                    <Text style={styles.buttonText}>Explore</Text>
                </TouchableOpacity>
            </ImageBackground>
        </SafeAreaView>
    )
}

export default WelcomeScreen

const styles = StyleSheet.create({
    textContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        marginBottom: 24,
        paddingLeft: 32
    },
    text: {
        fontSize: 15,
        textAlign: 'left'
    },
    button: {
        backgroundColor: '#176FF2',
        // padding: 10,
        paddingHorizontal:127,
        paddingVertical:18,
        borderRadius: 5,
        // width: '70%',
        alignItems: 'center',
        marginBottom: 48,
        alignSelf: 'center',
        borderRadius: 10

    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        
    },
})