import baseAxios from 'axios';
import { Recipe } from './model';

export const IOS_BLUE = "#1E90FF";

export const axios = baseAxios.create({
    baseURL: 'https://api.spoonacular.com',
    headers: {
        'x-api-key': '16544078f75a4653a222f7bd3654769c',
        'Accept': 'application/json'
    }
});

export const parseRecipeResponse = (recipe: Recipe): Recipe => ({
    ...recipe,
    instructions: recipe.instructions.replace( /(<([^>]+)>)/ig, '')
});