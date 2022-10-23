import React, { FC } from 'react';
import { ActivityIndicator, FlatList, StyleSheet, View } from 'react-native';
import { Icon, Input, Text } from '@rneui/themed';
import { RecipeItemCard } from '../components/RecipeItemCard';
import { RecipeBasicInfo } from '../model';
import { useDebouncedCallback } from 'use-debounce';
import { useRecipeSearch } from '../hooks/useRecipeSearch';
import { ErrorMessage } from '../components/ErrorMessage';

interface Props {

}

const Search: FC<Props> = () => {

    const {
        data,
        isLoading,
        searchForRecipe,
        loadMore,
        error,
        isLastPage,
    } = useRecipeSearch();

    const json: RecipeBasicInfo[] = [
        {
            "id": 656329,
            "title": "Pizza bites with pumpkin",
            "image": "https://spoonacular.com/recipeImages/656329-312x231.jpg",
            "imageType": "jpg"
        },
        {
            "id": 680975,
            "title": "BLT Pizza",
            "image": "https://spoonacular.com/recipeImages/680975-312x231.jpg",
            "imageType": "jpg"
        },
        {
            "id": 663136,
            "title": "Thai Pizza",
            "image": "https://spoonacular.com/recipeImages/663136-312x231.jpg",
            "imageType": "jpg"
        },
        {
            "id": 716300,
            "title": "Plantain Pizza",
            "image": "https://spoonacular.com/recipeImages/716300-312x231.jpg",
            "imageType": "jpg"
        },
        {
            "id": 665769,
            "title": "Zucchini Pizza Boats",
            "image": "https://spoonacular.com/recipeImages/665769-312x231.jpg",
            "imageType": "jpg"
        },
        {
            "id": 655698,
            "title": "Pepperoni Pizza Muffins",
            "image": "https://spoonacular.com/recipeImages/655698-312x231.jpg",
            "imageType": "jpg"
        },
        {
            "id": 622598,
            "title": "Pittata - Pizza Frittata",
            "image": "https://spoonacular.com/recipeImages/622598-312x231.jpg",
            "imageType": "jpg"
        },
        {
            "id": 641893,
            "title": "Easy Cheesy Pizza Casserole",
            "image": "https://spoonacular.com/recipeImages/641893-312x231.jpg",
            "imageType": "jpg"
        },
        {
            "id": 655847,
            "title": "Pesto Veggie Pizza",
            "image": "https://spoonacular.com/recipeImages/655847-312x231.jpg",
            "imageType": "jpg"
        },
        {
            "id": 654523,
            "title": "Paneer & Fig Pizza",
            "image": "https://spoonacular.com/recipeImages/654523-312x231.jpg",
            "imageType": "jpg"
        }
    ];

    const onInputChange = useDebouncedCallback(value => searchForRecipe(value), 1000)

    return (
        <View>
            <Input
                placeholder='Search for recipes'
                rightIcon={<Icon name='ios-search' type='ionicon'/>}
                // onChangeText={onInputChange}
                onChangeText={value => console.log(value)}
            />
            <FlatList
                style={style.list}
                data={json}
                renderItem={data => <RecipeItemCard recipe={data.item} />}
                // onEndReached={loadMore}
                // onEndReachedThreshold={0.3}
            />
            {/*<FlatList*/}
            {/*    style={style.list}*/}
            {/*    data={data}*/}
            {/*    renderItem={data => <RecipeItemCard recipe={data.item} />}*/}
            {/*    onEndReached={loadMore}*/}
            {/*    onEndReachedThreshold={0.3}*/}
            {/*/>*/}
            {isLoading && <ActivityIndicator size="large" color='darkgreen'/>}
            {error && <ErrorMessage message={error}/>}
            {isLastPage && <Text>No more results</Text>}
        </View>
    );
};

const style = StyleSheet.create({
    list: {
        marginBottom: 100
    },
});

export default Search;
