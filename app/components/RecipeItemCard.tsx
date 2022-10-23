import React, { FC } from 'react';
import { Card } from '@rneui/themed';
import { Pressable, StyleSheet } from 'react-native';
import { RecipeBasicInfo } from '../model';
import { useDimensions } from '../hooks/useDimensions';
import AutoHeightImage from 'react-native-auto-height-image';
import { useNavigation } from '@react-navigation/native';

interface Props {
    recipe: RecipeBasicInfo
}

export const RecipeItemCard: FC<Props> = ({recipe}) => {

    const { width, height } = useDimensions();
    const navigation = useNavigation();


    return (
        // @ts-ignore
        <Pressable onPress={() => navigation.navigate("Recipe", {recipeId: recipe.id})}>
            <Card containerStyle={styles.card}>
                <Card.Title>{recipe.title}</Card.Title>
                <Card.Divider />
                <AutoHeightImage
                    source={{uri: recipe.image}}
                    width={width * 0.835}
                    maxHeight={height * 0.3}
                    style={styles.image}
                />
            </Card>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    card: {
        marginTop: 15,
        borderRadius: 3
    },
    image: {
        borderRadius: 3
    },
});
