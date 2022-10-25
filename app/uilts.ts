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
    instructions: recipe.instructions.replaceAll( /(<([^>]+)>)/ig, ''),
    summary: recipe.summary.replaceAll( /(<([^>]+)>)/ig, ''),
});

export const mockedRecipe = {
    "vegetarian": false,
    "vegan": false,
    "glutenFree": true,
    "dairyFree": false,
    "veryHealthy": false,
    "cheap": false,
    "veryPopular": false,
    "sustainable": false,
    "lowFodmap": false,
    "weightWatcherSmartPoints": 5,
    "gaps": "no",
    "preparationMinutes": -1,
    "cookingMinutes": -1,
    "aggregateLikes": 1,
    "healthScore": 8,
    "creditsText": "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
    "license": "CC BY 3.0",
    "sourceName": "Foodista",
    "pricePerServing": 123.11,
    "extendedIngredients": [
        {
            "id": 4053,
            "aisle": "Oil, Vinegar, Salad Dressing",
            "image": "olive-oil.jpg",
            "consistency": "LIQUID",
            "name": "olive oil",
            "nameClean": "olive oil",
            "original": "1 tablespoon olive oil",
            "originalName": "olive oil",
            "amount": 1.0,
            "unit": "tablespoon",
            "meta": [],
            "measures": {
                "us": {
                    "amount": 1.0,
                    "unitShort": "Tbsp",
                    "unitLong": "Tbsp"
                },
                "metric": {
                    "amount": 1.0,
                    "unitShort": "Tbsp",
                    "unitLong": "Tbsp"
                }
            }
        },
        {
            "id": 1001,
            "aisle": "Milk, Eggs, Other Dairy",
            "image": "butter-sliced.jpg",
            "consistency": "SOLID",
            "name": "butter",
            "nameClean": "butter",
            "original": "1 tablespoon butter",
            "originalName": "butter",
            "amount": 1.0,
            "unit": "tablespoon",
            "meta": [],
            "measures": {
                "us": {
                    "amount": 1.0,
                    "unitShort": "Tbsp",
                    "unitLong": "Tbsp"
                },
                "metric": {
                    "amount": 1.0,
                    "unitShort": "Tbsp",
                    "unitLong": "Tbsp"
                }
            }
        },
        {
            "id": 11282,
            "aisle": "Produce",
            "image": "brown-onion.png",
            "consistency": "SOLID",
            "name": "onion",
            "nameClean": "onion",
            "original": "1/2 medium onion, chopped",
            "originalName": "onion, chopped",
            "amount": 0.5,
            "unit": "medium",
            "meta": [
                "chopped"
            ],
            "measures": {
                "us": {
                    "amount": 0.5,
                    "unitShort": "medium",
                    "unitLong": "mediums"
                },
                "metric": {
                    "amount": 0.5,
                    "unitShort": "medium",
                    "unitLong": "mediums"
                }
            }
        },
        {
            "id": 11215,
            "aisle": "Produce",
            "image": "garlic.png",
            "consistency": "SOLID",
            "name": "garlic",
            "nameClean": "garlic",
            "original": "2 cloves garlic, minced",
            "originalName": "garlic, minced",
            "amount": 2.0,
            "unit": "cloves",
            "meta": [
                "minced"
            ],
            "measures": {
                "us": {
                    "amount": 2.0,
                    "unitShort": "cloves",
                    "unitLong": "cloves"
                },
                "metric": {
                    "amount": 2.0,
                    "unitShort": "cloves",
                    "unitLong": "cloves"
                }
            }
        },
        {
            "id": 6615,
            "aisle": "Canned and Jarred",
            "image": "chicken-broth.png",
            "consistency": "LIQUID",
            "name": "vegetable broth",
            "nameClean": "vegetable stock",
            "original": "4 cups vegetable broth",
            "originalName": "vegetable broth",
            "amount": 4.0,
            "unit": "cups",
            "meta": [],
            "measures": {
                "us": {
                    "amount": 4.0,
                    "unitShort": "cups",
                    "unitLong": "cups"
                },
                "metric": {
                    "amount": 946.352,
                    "unitShort": "ml",
                    "unitLong": "milliliters"
                }
            }
        },
        {
            "id": 2004,
            "aisle": "Produce;Spices and Seasonings",
            "image": "bay-leaves.jpg",
            "consistency": "SOLID",
            "name": "bay leaves",
            "nameClean": "bay leaves",
            "original": "2 large bay leaves",
            "originalName": "bay leaves",
            "amount": 2.0,
            "unit": "large",
            "meta": [],
            "measures": {
                "us": {
                    "amount": 2.0,
                    "unitShort": "large",
                    "unitLong": "larges"
                },
                "metric": {
                    "amount": 2.0,
                    "unitShort": "large",
                    "unitLong": "larges"
                }
            }
        },
        {
            "id": 10211362,
            "aisle": "Produce",
            "image": "potatoes-yukon-gold.png",
            "consistency": "SOLID",
            "name": "yukon gold potatoes",
            "nameClean": "yukon gold potato",
            "original": "4 large Yukon Gold potatoes, cubed",
            "originalName": "Yukon Gold potatoes, cubed",
            "amount": 4.0,
            "unit": "large",
            "meta": [
                "cubed"
            ],
            "measures": {
                "us": {
                    "amount": 4.0,
                    "unitShort": "large",
                    "unitLong": "larges"
                },
                "metric": {
                    "amount": 4.0,
                    "unitShort": "large",
                    "unitLong": "larges"
                }
            }
        },
        {
            "id": 2049,
            "aisle": "Produce;Spices and Seasonings",
            "image": "thyme.jpg",
            "consistency": "SOLID",
            "name": "fresh thyme",
            "nameClean": "thyme",
            "original": "1 tablespoon thyme, fresh leaves",
            "originalName": "thyme, fresh leaves",
            "amount": 1.0,
            "unit": "tablespoon",
            "meta": [
                "fresh"
            ],
            "measures": {
                "us": {
                    "amount": 1.0,
                    "unitShort": "Tbsp",
                    "unitLong": "Tbsp"
                },
                "metric": {
                    "amount": 1.0,
                    "unitShort": "Tbsp",
                    "unitLong": "Tbsp"
                }
            }
        },
        {
            "id": 11955,
            "aisle": "Canned and Jarred;Produce",
            "image": "sundried-tomatoes.jpg",
            "consistency": "SOLID",
            "name": "sun dried tomato",
            "nameClean": "sun dried tomatoes",
            "original": "1/4 cup sun dried tomato, chopped",
            "originalName": "sun dried tomato, chopped",
            "amount": 0.25,
            "unit": "cup",
            "meta": [
                "dried",
                "chopped"
            ],
            "measures": {
                "us": {
                    "amount": 0.25,
                    "unitShort": "cups",
                    "unitLong": "cups"
                },
                "metric": {
                    "amount": 59.147,
                    "unitShort": "ml",
                    "unitLong": "milliliters"
                }
            }
        },
        {
            "id": 1088,
            "aisle": "Milk, Eggs, Other Dairy",
            "image": "buttermilk.jpg",
            "consistency": "SOLID",
            "name": "low fat buttermilk",
            "nameClean": "low fat buttermilk",
            "original": "1 cup low fat buttermilk",
            "originalName": "low fat buttermilk",
            "amount": 1.0,
            "unit": "cup",
            "meta": [
                "low fat"
            ],
            "measures": {
                "us": {
                    "amount": 1.0,
                    "unitShort": "cup",
                    "unitLong": "cup"
                },
                "metric": {
                    "amount": 236.588,
                    "unitShort": "ml",
                    "unitLong": "milliliters"
                }
            }
        },
        {
            "id": 10151,
            "aisle": "Meat",
            "image": "ham-whole.jpg",
            "consistency": "SOLID",
            "name": "ham",
            "nameClean": "ham",
            "original": "1 cup extra lean turkey ham, chopped into small pieces",
            "originalName": "extra lean turkey ham, chopped into small pieces",
            "amount": 1.0,
            "unit": "cup",
            "meta": [
                "lean",
                "chopped"
            ],
            "measures": {
                "us": {
                    "amount": 1.0,
                    "unitShort": "cup",
                    "unitLong": "cup"
                },
                "metric": {
                    "amount": 236.588,
                    "unitShort": "ml",
                    "unitLong": "milliliters"
                }
            }
        },
        {
            "id": 11297,
            "aisle": "Produce;Spices and Seasonings",
            "image": "parsley.jpg",
            "consistency": "SOLID",
            "name": "parsley",
            "nameClean": "parsley",
            "original": "8 tablespoons parsley, chopped",
            "originalName": "parsley, chopped",
            "amount": 8.0,
            "unit": "tablespoons",
            "meta": [
                "chopped"
            ],
            "measures": {
                "us": {
                    "amount": 8.0,
                    "unitShort": "Tbsps",
                    "unitLong": "Tbsps"
                },
                "metric": {
                    "amount": 8.0,
                    "unitShort": "Tbsps",
                    "unitLong": "Tbsps"
                }
            }
        },
        {
            "id": 1056,
            "aisle": "Milk, Eggs, Other Dairy",
            "image": "sour-cream.jpg",
            "consistency": "SOLID",
            "name": "sour cream",
            "nameClean": "sour cream",
            "original": "8 tablespoons light sour cream",
            "originalName": "light sour cream",
            "amount": 8.0,
            "unit": "tablespoons",
            "meta": [
                "light",
                "sour"
            ],
            "measures": {
                "us": {
                    "amount": 8.0,
                    "unitShort": "Tbsps",
                    "unitLong": "Tbsps"
                },
                "metric": {
                    "amount": 8.0,
                    "unitShort": "Tbsps",
                    "unitLong": "Tbsps"
                }
            }
        }
    ],
    "id": 657003,
    "title": "Potato Soup with Sun Dried Tomato and Ham",
    "readyInMinutes": 45,
    "servings": 8,
    "sourceUrl": "https://www.foodista.com/recipe/R258FZGZ/potato-soup-with-sun-dried-tomato-and-ham",
    "image": "https://spoonacular.com/recipeImages/657003-556x370.jpg",
    "imageType": "jpg",
    "summary": "Potato Soup with Sun Dried Tomato and Ham might be just the soup you are searching for. This recipe serves 8 and costs $1.23 per serving. Watching your figure? This gluten free recipe has <b>176 calories</b>, <b>8g of protein</b>, and <b>9g of fat</b> per serving. Only a few people made this recipe, and 1 would say it hit the spot. From preparation to the plate, this recipe takes around <b>around 45 minutes</b>. <b>Autumn</b> will be even more special with this recipe. It is brought to you by Foodista. A mixture of extra turkey ham, vegetable broth, thyme, and a handful of other ingredients are all it takes to make this recipe so yummy. Taking all factors into account, this recipe <b>earns a spoonacular score of 39%</b>, which is rather bad. Users who liked this recipe also liked <a href=\"https://spoonacular.com/recipes/potato-soup-with-sun-dried-tomato-and-ham-530994\">Potato Soup with Sun Dried Tomato and Ham</a>, <a href=\"https://spoonacular.com/recipes/turkey-ham-sun-dried-tomato-sub-280654\">Turkey, Ham & Sun-Dried Tomato Sub</a>, and <a href=\"https://spoonacular.com/recipes/ham-cheese-sun-dried-tomato-omelet-270529\">Ham, Cheese & Sun-Dried Tomato Omelet</a>.",
    "cuisines": [],
    "dishTypes": [
        "soup"
    ],
    "diets": [
        "gluten free"
    ],
    "occasions": [
        "fall",
        "winter"
    ],
    "winePairing": {
        "pairedWines": [],
        "pairingText": "",
        "productMatches": []
    },
    "instructions": "Heat oil and butter in a Dutch oven or large pan over medium heat. Add onions and cook for 5 minutes to soften. Add garlic and cook another few minutes. Then add vegetable broth, potatoes, bay leaves, and thyme. Bring to a boil and cover. Cook for 20 minutes until vegetables are very tender.\nWhen potatoes are tender add sun-dried tomatoes. Cook for another 5 minutes, remove bay leaves and add buttermilk. Remove from heat and using an immersion blender, blend being sure to leave small chunks of potatoes.\nAdd turkey ham and return to the burner for a few minutes to heat the ham through. Serve with sour cream and parsley.",
    "analyzedInstructions": [
        {
            "name": "",
            "steps": [
                {
                    "number": 1,
                    "step": "Heat oil and butter in a Dutch oven or large pan over medium heat.",
                    "ingredients": [
                        {
                            "id": 1001,
                            "name": "butter",
                            "localizedName": "butter",
                            "image": "butter-sliced.jpg"
                        },
                        {
                            "id": 4582,
                            "name": "cooking oil",
                            "localizedName": "cooking oil",
                            "image": "vegetable-oil.jpg"
                        }
                    ],
                    "equipment": [
                        {
                            "id": 404667,
                            "name": "dutch oven",
                            "localizedName": "dutch oven",
                            "image": "dutch-oven.jpg"
                        },
                        {
                            "id": 404645,
                            "name": "frying pan",
                            "localizedName": "frying pan",
                            "image": "pan.png"
                        }
                    ]
                },
                {
                    "number": 2,
                    "step": "Add onions and cook for 5 minutes to soften.",
                    "ingredients": [
                        {
                            "id": 11282,
                            "name": "onion",
                            "localizedName": "onion",
                            "image": "brown-onion.png"
                        }
                    ],
                    "equipment": [],
                    "length": {
                        "number": 5,
                        "unit": "minutes"
                    }
                },
                {
                    "number": 3,
                    "step": "Add garlic and cook another few minutes. Then add vegetable broth, potatoes, bay leaves, and thyme. Bring to a boil and cover. Cook for 20 minutes until vegetables are very tender.",
                    "ingredients": [
                        {
                            "id": 6615,
                            "name": "vegetable broth",
                            "localizedName": "vegetable broth",
                            "image": "chicken-broth.png"
                        },
                        {
                            "id": 2004,
                            "name": "bay leaves",
                            "localizedName": "bay leaves",
                            "image": "bay-leaves.jpg"
                        },
                        {
                            "id": 11583,
                            "name": "vegetable",
                            "localizedName": "vegetable",
                            "image": "mixed-vegetables.png"
                        },
                        {
                            "id": 11352,
                            "name": "potato",
                            "localizedName": "potato",
                            "image": "potatoes-yukon-gold.png"
                        },
                        {
                            "id": 11215,
                            "name": "garlic",
                            "localizedName": "garlic",
                            "image": "garlic.png"
                        },
                        {
                            "id": 2049,
                            "name": "thyme",
                            "localizedName": "thyme",
                            "image": "thyme.jpg"
                        }
                    ],
                    "equipment": [],
                    "length": {
                        "number": 20,
                        "unit": "minutes"
                    }
                },
                {
                    "number": 4,
                    "step": "When potatoes are tender add sun-dried tomatoes. Cook for another 5 minutes, remove bay leaves and add buttermilk.",
                    "ingredients": [
                        {
                            "id": 11955,
                            "name": "sun dried tomatoes",
                            "localizedName": "sun dried tomatoes",
                            "image": "sundried-tomatoes.jpg"
                        },
                        {
                            "id": 2004,
                            "name": "bay leaves",
                            "localizedName": "bay leaves",
                            "image": "bay-leaves.jpg"
                        },
                        {
                            "id": 1230,
                            "name": "buttermilk",
                            "localizedName": "buttermilk",
                            "image": "buttermilk.jpg"
                        },
                        {
                            "id": 11352,
                            "name": "potato",
                            "localizedName": "potato",
                            "image": "potatoes-yukon-gold.png"
                        }
                    ],
                    "equipment": [],
                    "length": {
                        "number": 5,
                        "unit": "minutes"
                    }
                },
                {
                    "number": 5,
                    "step": "Remove from heat and using an immersion blender, blend being sure to leave small chunks of potatoes.",
                    "ingredients": [
                        {
                            "id": 11352,
                            "name": "potato",
                            "localizedName": "potato",
                            "image": "potatoes-yukon-gold.png"
                        }
                    ],
                    "equipment": [
                        {
                            "id": 404776,
                            "name": "immersion blender",
                            "localizedName": "immersion blender",
                            "image": "immersion-blender.png"
                        }
                    ]
                },
                {
                    "number": 6,
                    "step": "Add turkey ham and return to the burner for a few minutes to heat the ham through.",
                    "ingredients": [
                        {
                            "id": 5165,
                            "name": "whole turkey",
                            "localizedName": "whole turkey",
                            "image": "turkey-raw-whole.jpg"
                        },
                        {
                            "id": 10151,
                            "name": "ham",
                            "localizedName": "ham",
                            "image": "ham-whole.jpg"
                        }
                    ],
                    "equipment": []
                },
                {
                    "number": 7,
                    "step": "Serve with sour cream and parsley.",
                    "ingredients": [
                        {
                            "id": 1056,
                            "name": "sour cream",
                            "localizedName": "sour cream",
                            "image": "sour-cream.jpg"
                        },
                        {
                            "id": 11297,
                            "name": "parsley",
                            "localizedName": "parsley",
                            "image": "parsley.jpg"
                        }
                    ],
                    "equipment": []
                }
            ]
        }
    ],
    "originalId": null,
    "spoonacularSourceUrl": "https://spoonacular.com/potato-soup-with-sun-dried-tomato-and-ham-657003"
}