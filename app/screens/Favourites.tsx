import React, { FC } from 'react';
import { View } from 'react-native';
import { Button, Text } from '@rneui/themed';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useRecipe } from '../hooks/useRecipe';

interface Props {
}

const Favourites: FC<Props> = () => {
    const navigation = useNavigation();

    return (
        <View >
            <Text>Fav</Text>
        </View>
    );
};

export default Favourites;
