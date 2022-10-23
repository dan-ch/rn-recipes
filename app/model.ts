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

export interface Recipe extends RecipeBasicInfo{

}