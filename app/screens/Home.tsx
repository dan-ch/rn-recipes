import React, { FC } from 'react';
import { ImageBackground, View, StyleSheet } from 'react-native';
import { Text } from "@rneui/themed";
import { useDimensions } from '../hooks/useDimensions';

interface Props {

}

const Home: FC<Props> = () => {

    return (
        <View style={styles.container}>
            <ImageBackground resizeMode="cover" style={styles.image} source={require('../../assets/pizza.jpeg')}>
                <Text style={styles.text}>Are you hungry?</Text>
            </ImageBackground>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        flex: 1,
        justifyContent: "flex-start"
    },
    text: {
        color: "white",
        fontSize: 24,
        lineHeight: 50,
        fontWeight: "bold",
        textAlign: "center",
        backgroundColor: "black"
    }
});

export default Home;
