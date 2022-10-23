import React, { useEffect, useState } from 'react';
import { Recipe } from '../model';
import { axios } from '../uilts';

export const useRecipe = (recipeId: string) => {
    const [data, setData] = useState<Recipe | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState("");

    const fetch = () => {
        setIsLoading(true);
        axios.get(`/${recipeId}/information`)
            .then(response => setData(response.data))
            .catch(error => setError(error.toString))
            .finally(() => setIsLoading(false))
    };

    useEffect(() => {
        fetch();
    }, [recipeId]);

    return {
        data,
        isLoading,
        error
    };

};
