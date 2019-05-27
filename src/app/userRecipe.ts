export interface Macros {
    carbs: number;
    protein: number;
    fat: number;
}

export interface Recipe {
    id: number;
    author: string;
    name: string;
    mainImage: string;
    totalTime: string;
    servings: string;
    ingredients: string;
    directions: string;
    notes: string;
    macros: Macros;
}

export interface IUserRecipe {
    bookName: string;
    recipes: Recipe[];
}

