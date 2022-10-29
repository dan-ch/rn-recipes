import React, { FC, useEffect } from 'react';
import { ActivityIndicator, FlatList, Pressable, StyleSheet } from 'react-native';
import { useFavourites } from '../hooks/useFavourites';
import { RecipeItemCard } from '../components/RecipeItemCard';
import { Text } from '@rneui/themed';
import { useIsFocused, useNavigation } from '@react-navigation/native';
import { Recipe } from '../model';


interface Props {
}

const Favourites: FC<Props> = () => {
    const {data, isLoading, reloadData} = useFavourites();
    const navigation = useNavigation();
    const isFocused = useIsFocused();

    useEffect(() => {
        if (isFocused)
            void reloadData();
    }, [isFocused]);

    const renderFavouriteRecipe = (recipe: Recipe) => (
        // @ts-ignore
        <Pressable onPress={() => navigation.navigate("Recipe", {recipe: recipe})}>
            <RecipeItemCard recipe={recipe} />
        </Pressable>
    );

    return (
        <>
            {isLoading
                ? <ActivityIndicator size="large" color='darkgreen'/>
                : <FlatList
                      data={data}
                      renderItem={data => renderFavouriteRecipe(data.item)}
                      ListEmptyComponent={<Text style={style.noFavourites}>No favourites found</Text>}
                  />
            }
        </>
    );
};

const style = StyleSheet.create({
    noFavourites: {
        marginTop: 50,
        textAlign: 'center'
    }
});

export default Favourites;
