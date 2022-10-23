import baseAxios from 'axios';

export const axios = baseAxios.create({
    baseURL: 'https://api.spoonacular.com',
    headers: {
        'x-api-key': '16544078f75a4653a222f7bd3654769c',
        'Accept': 'application/json'
    }
});