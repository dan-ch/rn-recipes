import React, { FC } from 'react';
import { StyleSheet } from 'react-native';
import { Text } from '@rneui/themed';

interface Props {
    message: string
}

export const ErrorMessage: FC<Props> = ({message}) => {
    return (
        <Text style={styles.errorText}>{message}</Text>
    );
};

const styles = StyleSheet.create({
    errorText: {
        fontSize: 14,
        color: 'red'
    }
});
