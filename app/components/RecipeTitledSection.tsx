import React, { FC, ReactNode } from 'react';
import { StyleSheet, View } from 'react-native';
import { Text } from '@rneui/themed';

interface Props {
    title: string,
    content: ReactNode
}

const RecipeTitledSection: FC<Props> = ({title, content}) => {
    return (
        <View>
            <Text style={style.title}>{title}</Text>
            {content}
        </View>
    );
};

const style = StyleSheet.create({
    title: {
        marginBottom: 5,
        fontSize: 20,
        fontWeight: 'bold'
    }
})

export default RecipeTitledSection;
