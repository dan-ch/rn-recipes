import React, { FC } from 'react';
import RecipeTitledSection from './RecipeTitledSection';
import { Ingredient } from '../../../model';
import { Text } from '@rneui/themed';

interface Props {
    ingredients: Ingredient[]
}

const RecipeIngredientsSection: FC<Props> = ({ingredients}) => {

    const renderIngredientsContent = () => (
        <>
            {ingredients.map(({name, amount, unit}) =>
                <Text>{`\u2022 ${name}: ${amount} ${unit}`}</Text>)}
        </>
    )

    return <RecipeTitledSection title='Ingredients' content={renderIngredientsContent()} />
};

export default RecipeIngredientsSection;
