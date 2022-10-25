import React, { FC, ReactNode, useState } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import { Icon, Text } from '@rneui/themed';

interface Props {
    title: string,
    content: ReactNode
    isCollapsable?: boolean
}

const RecipeTitledSection: FC<Props> = ({title, content, isCollapsable = false}) => {

    const [isCollapsed, setIsCollapsed] = useState(!isCollapsable)

    return (
        <View style={style.container}>
            <Pressable onPress={() => setIsCollapsed(!isCollapsed)}>
                <Text style={style.title}>{title}
                    {isCollapsable &&
                        <Icon name={isCollapsed ? 'chevron-down' : 'chevron-forward'} type='ionicon'/>
                    }
                </Text>
            </Pressable>
            {isCollapsed && content}
        </View>
    );
};

const style = StyleSheet.create({
    container: {
        marginBottom: 6
    },
    title: {
        marginBottom: 3,
        fontSize: 20,
        fontWeight: 'bold',
    },
})

export default RecipeTitledSection;
