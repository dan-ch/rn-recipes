import { useState } from 'react';
import { RecipeBasicInfo, SearchRecipeResponse } from '../model';
import { axios } from '../uilts';


export const useRecipeSearch = () => {
    const [data, setData] = useState<RecipeBasicInfo []>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState('');
    const [isLastPage, setIsLastPage] = useState(false)
    const [lastQuery, setLastQuery] = useState('');

    const fetch = (query: string, offset: number) => {
        setIsLoading(true);
        axios.get<SearchRecipeResponse>('/recipes/complexSearch', {params: { query, number: 10, offset }})
            .then(response => {
                const {results, totalResults, offset, number} = response.data
                setData(prevState => [...prevState, ...results]);
                setIsLastPage(offset + number >= totalResults)
            })
            .catch(error => {
                setError(error.toString());
                console.error(error.toString())
            })
            .finally(() => setIsLoading(false))
    }

    const searchForRecipe = (query: string) => {
        setData([]);
        setLastQuery(query);
        fetch(query, 0);
    };

    const loadMore = () => fetch(lastQuery, data.length);

    return {
        data,
        isLoading,
        searchForRecipe,
        loadMore,
        error,
        isLastPage,
    };
};
