import React, { FC } from 'react';
import { StyleSheet } from 'react-native';
import { Instruction } from '../../../model';
import { Text } from '@rneui/themed';
import RecipeTitledSection from './RecipeTitledSection';

interface Props {
    instructions: Instruction[]
}

const RecipeInstructionSection: FC<Props> = ({instructions}) => {

    const renderInstructionsContent = () => (
        instructions.map(({name, steps}) => (
                <>
                    {name && <Text style={style.instruction}>{name}</Text>}
                    {steps.map(step =>
                        <Text key={step.number} style={style.singleStep}>{`${step.number}. ${step.step}`}</Text>
                    )}
                </>
            )
        )
    )

    return (
        <RecipeTitledSection title='Instructions' content={renderInstructionsContent()} />
    );
};

const style = StyleSheet.create({
    instruction: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    singleStep: {
        paddingLeft: 10,
    }
})

export default RecipeInstructionSection;
