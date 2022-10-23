import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Button, Icon, Text } from '@rneui/themed';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useRecipe } from '../hooks/useRecipe';
import { LoadingIndicator } from '../components/LoadingIndicator';
import { ErrorMessage } from '../components/ErrorMessage';
import { IOS_BLUE } from '../uilts';
import AutoHeightImage from 'react-native-auto-height-image';
import { useDimensions } from '../hooks/useDimensions';
import RecipeTitledSection from '../components/RecipeTitledSection';

const Recipe = () => {
    const { width, height } = useDimensions();
    const navigation = useNavigation();
    const { recipeId }  = useRoute().params as {recipeId: string};
    const { data, isLoading, error } = useRecipe(recipeId);

    return (
        <View>
            <Button style={style.backButton} type='clear' onPress={() => navigation.goBack()}>
                <Icon name='md-chevron-back' type='ionicon' color={IOS_BLUE} />
                <Text style={style.backButtonText}>Go back</Text>
            </Button>
            <ScrollView >
                {error && <ErrorMessage message={error}/>}
                {isLoading && <LoadingIndicator />}
                {data &&
                    <View style={{margin: width*0.05, flex: 1}}>
                     <RecipeTitledSection title='Instructions' content={<Text>{data.instructions}</Text>}/>
                     <AutoHeightImage
                         source={{uri: data.image}}
                         width={width * 0.9}
                         maxHeight={height * 0.3}
                     />
                 </View>
                }
            </ScrollView>
        </View>

    );
};

const style = StyleSheet.create({
    backButton: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    backButtonText: {
        fontSize: 14,
        color: IOS_BLUE
    }
})

export default Recipe;
