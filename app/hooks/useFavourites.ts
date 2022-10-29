import { useEffect, useState } from 'react';
import { Recipe } from '../model';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { STORAGE_FAVOURITES_KEY } from '../uilts';

export const useFavourites = () => {

    const [data, setData] = useState<Recipe[]>();
    const [isLoading, setIsLoading] = useState(false);

    const addToFavourites = async(recipe: Recipe) => {
        const newData = data ? [...data, recipe] : [recipe];
        setData(newData);
        await AsyncStorage.setItem(STORAGE_FAVOURITES_KEY, JSON.stringify(newData));
    }

    const removeFromFavourites = async(recipe: Recipe) => {
        const newData = data?.filter(storedRecipe => storedRecipe.id !== recipe.id);
        setData(newData);
        await AsyncStorage.setItem(STORAGE_FAVOURITES_KEY, JSON.stringify(newData));
    }

    const loadFavouritesFromStorage = async() => {
        setIsLoading(true);
        const signifiedData = await AsyncStorage.getItem(STORAGE_FAVOURITES_KEY);
        signifiedData && setData(JSON.parse(signifiedData) as Recipe[]);
        setIsLoading(false);
    }

    const isInFavourites = (recipe: Recipe) =>
        data?.some(storedRecipe => storedRecipe.id === recipe.id)

    const toggleFavourites = (recipe: Recipe) => {
        isInFavourites(recipe)
            ? removeFromFavourites(recipe)
            : addToFavourites(recipe)
    }

    useEffect(() => {
        void loadFavouritesFromStorage();
    }, []);

    return {
        data,
        isLoading,
        isInFavourites,
        toggleFavourites,
        reloadData: loadFavouritesFromStorage
    }

}