import React from 'react';
import { Dimensions } from 'react-native';

export const useDimensions = () => (
    {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    }
);
