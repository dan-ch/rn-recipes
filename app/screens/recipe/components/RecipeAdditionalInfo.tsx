import React, { FC } from 'react';
import { Recipe } from '../../../model';
import RecipeTitledSection from './RecipeTitledSection';
import { Text } from '@rneui/themed';

interface Props {
    recipe: Recipe
}

const RecipeAdditionalInfo: FC<Props> = ({recipe}) => {

    const renderAdditionalInfoContent = () => (
        <>
            <Text>Ready in: {recipe.readyInMinutes} min</Text>
            <Text>Servings : {recipe.servings}</Text>
            {recipe.vegetarian && <Text>Vegetarian</Text>}
            {recipe.vegan && <Text>Vegan</Text>}
            {recipe.glutenFree && <Text>Gluten free</Text>}
            {recipe.dairyFree && <Text>Dairy free</Text>}
            {recipe.veryHealthy && <Text>Very healthy</Text>}
        </>
    );

    return (
        <RecipeTitledSection
            title='Additional information'
            content={renderAdditionalInfoContent()}
            isCollapsable={true}
        />
    )
};

export default RecipeAdditionalInfo;
