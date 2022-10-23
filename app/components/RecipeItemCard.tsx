import React, { FC } from 'react';
import { Card } from '@rneui/themed';
import { StyleSheet } from 'react-native';
import { RecipeBasicInfo } from '../model';
import { useDimensions } from '../hooks/useDimensions';
import AutoHeightImage from 'react-native-auto-height-image';

interface Props {
    recipe: RecipeBasicInfo
}

const RecipeItemCard: FC<Props> = ({recipe}) => {

    const { width, height } = useDimensions();

    return (
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

export default RecipeItemCard;
