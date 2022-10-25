import React, { FC } from 'react';
import RecipeTitledSection from './RecipeTitledSection';
import { Text } from '@rneui/base';

interface Props {
    title: string,
    content: string
}

const RecipeTextSection: FC<Props> = ({title,content}) =>
    <RecipeTitledSection title={title} content={<Text>{content}</Text>} isCollapsable={true}/>

export default RecipeTextSection;
