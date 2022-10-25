import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Button, Icon, Text } from '@rneui/themed';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useRecipe } from '../../hooks/useRecipe';
import { LoadingIndicator } from '../../components/LoadingIndicator';
import { ErrorMessage } from '../../components/ErrorMessage';
import { IOS_BLUE, mockedRecipe } from '../../uilts';
import AutoHeightImage from 'react-native-auto-height-image';
import { useDimensions } from '../../hooks/useDimensions';
import RecipeTitledSection from './components/RecipeTitledSection';
import RecipeTextSection from './components/RecipeTextSection';
import RecipeInformation from './components/RecipeInformation';
import { Recipe as RecipeModel } from '../../model';

const Recipe = () => {
    const { width, height } = useDimensions();
    const navigation = useNavigation();
    const { recipeId }  = useRoute().params as {recipeId: string};
    // const { data, isLoading, error } = useRecipe(recipeId);

    // @ts-ignore
    const data = mockedRecipe as RecipeModel;
    const isLiked = false;

    return (
        <View style={{flex: 1}}>
            <View style={style.buttonGroup}>
                <Button type='clear' onPress={() => navigation.goBack()}>
                    <Icon name='md-chevron-back' type='ionicon' color={IOS_BLUE} />
                    <Text style={style.backButtonText}>Go back</Text>
                </Button>
                <Button
                    type='clear'
                    onPress={() => console.log('Right button pressed')}
                    icon={{
                        name: 'star',
                        type: 'antdesign',
                        color: isLiked ? 'gold' : 'gray'
                    }}
                />
            </View>
            <ScrollView >
                {/*{error && <ErrorMessage message={error}/>}*/}
                {/*{isLoading && <LoadingIndicator />}*/}
                {data &&
                    <View style={{margin: width*0.05, flex: 1}}>
                        <Text style={style.recipeTitle}>{data.title}</Text>
                        <AutoHeightImage
                         source={{uri: data.image}}
                         width={width * 0.9}
                         maxHeight={height * 0.3}
                         style={{borderRadius: 5}}
                        />
                        <RecipeInformation recipe={data} />
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
