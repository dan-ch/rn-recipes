import { useEffect, useState } from 'react';
import { Recipe } from '../model';
import { axios, parseRecipeResponse } from '../uilts';

export const useRecipe = (recipeId: string) => {
    const [data, setData] = useState<Recipe | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState("");

    const fetch = () => {
        if(!recipeId) return;

        setIsLoading(true);
        axios.get(`/recipes/${recipeId}/information`)
            .then(response => setData(parseRecipeResponse(response.data)))
            .catch(error => setError(error.toString()))
            .finally(() => setIsLoading(false))
    };

    useEffect(() => {
        fetch();
    }, [recipeId]);

    return {
        data,
        isLoading,
        error
    }

};
