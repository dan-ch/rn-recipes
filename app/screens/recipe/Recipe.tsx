import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Button, Icon, Text } from '@rneui/themed';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useRecipe } from '../../hooks/useRecipe';
import { LoadingIndicator } from '../../components/LoadingIndicator';
import { ErrorMessage } from '../../components/ErrorMessage';
import { IOS_BLUE } from '../../uilts';
import AutoHeightImage from 'react-native-auto-height-image';
import { useDimensions } from '../../hooks/useDimensions';
import RecipeInformation from './components/RecipeInformation';
import { Recipe as RecipeModel } from '../../model';
import { useFavourites } from '../../hooks/useFavourites';

const Recipe = () => {
    const { width, height } = useDimensions();
    const navigation = useNavigation();
    const { recipeId, recipe }  = useRoute().params as {recipeId: number, recipe: RecipeModel | null};
    const { data, isLoading, error } = useRecipe(recipeId);
    const { toggleFavourites, isInFavourites } = useFavourites();

    const recipeToRender = recipeId ? data : recipe;

    return (
        <View style={{flex: 1}}>
            <View style={style.buttonGroup}>
                <Button type='clear' onPress={() => navigation.goBack()}>
                    <Icon name='md-chevron-back' type='ionicon' color={IOS_BLUE} />
                    <Text style={style.backButtonText}>Go back</Text>
                </Button>
                <Button
                    type='clear'
                    onPress={() => recipeToRender && toggleFavourites(recipeToRender)}
                    icon={{
                        name: 'star',
                        type: 'antdesign',
                        color: recipeToRender && isInFavourites(recipeToRender) ? 'gold' : 'gray'
                    }}
                />
            </View>
            <ScrollView >
                {error && <ErrorMessage message={error}/>}
                {isLoading && <LoadingIndicator />}
                {recipeToRender &&
                    <View style={{margin: width*0.05, flex: 1}}>
                        <Text style={style.recipeTitle}>{recipeToRender.title}</Text>
                        <AutoHeightImage
                         source={{uri: recipeToRender.image}}
                         width={width * 0.9}
                         maxHeight={height * 0.3}
                         style={{borderRadius: 5}}
                        />
                        <RecipeInformation recipe={recipeToRender} />
                    </View>
                }
            </ScrollView>
        </View>

    );
};

const style = StyleSheet.create({
    buttonGroup: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    backButton: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    backButtonText: {
        fontSize: 14,
        color: IOS_BLUE
    },
    recipeTitle: {
        fontSize: 26,
        textAlign: 'center',
        fontWeight: 'bold'
    }
})

export default Recipe;
