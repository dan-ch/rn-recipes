export interface RecipeBasicInfo {
    id: number
    title: string
    image: string
    imageType: string
}

export interface SearchRecipeResponse {
    results: RecipeBasicInfo[],
    offset: number,
    number: number,
    totalResults: number
}

export interface Ingredient {
    aisle: string;
    amount: number;
    consitency: string;
    id: number;
    image: string;
    meta?: Array<string>;
    name: string;
    original: string;
    originalName: string;
    unit: string;
}

export interface Instruction {
    name: string
    steps: {step: string, number: number}[]
}

export interface Recipe extends RecipeBasicInfo{
    servings: number;
    readyInMinutes: number;
    license: string;
    sourceName: string;
    sourceUrl: string;
    spoonacularSourceUrl: string;
    aggregateLikes: number;
    healthScore: number;
    spoonacularScore: number;
    pricePerServing: number;
    analyzedInstructions: Instruction[]
    cheap: boolean;
    creditsText: string;
    cuisines: Array<string>;
    dairyFree: boolean;
    diets: Array<string>;
    gaps: string;
    glutenFree: boolean;
    instructions: string;
    ketogenic: boolean;
    lowFodmap: boolean;
    occasions: Array<string>;
    sustainable: boolean;
    vegan: boolean;
    vegetarian: boolean;
    veryHealthy: boolean;
    veryPopular: boolean;
    whole30: boolean;
    weightWatcherSmartPoints: number;
    dishTypes: Array<string>;
    extendedIngredients: Ingredient[];
    summary: string;
    winePairing: any;
}