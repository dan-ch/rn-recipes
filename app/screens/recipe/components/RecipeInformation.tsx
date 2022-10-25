import React, { FC } from 'react';
import RecipeTextSection from './RecipeTextSection';
import { StyleSheet, View } from 'react-native';
import { Recipe } from '../../../model';
import RecipeInstructionSection from './RecipeInstructionSection';
import RecipeIngredientsSection from './RecipeIngredientsSection';
import RecipeAdditionalInfo from './RecipeAdditionalInfo';

interface Props {
    recipe: Recipe
}

const RecipeInformation: FC<Props> = ({recipe}) => {
    return (
        <View style={style.container}>
            <RecipeTextSection title='Summary' content={recipe.summary} />
            <RecipeIngredientsSection ingredients={recipe.extendedIngredients} />
            <RecipeInstructionSection instructions={recipe.analyzedInstructions} />
            <RecipeAdditionalInfo recipe={recipe} />
        </View>
    );
};

const style = StyleSheet.create({
    container: {
        paddingTop: 10
    }
})

export default RecipeInformation;
