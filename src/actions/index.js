export const SET_RECIPES ='SET_RECIPES';
export const FAVORITE_RECIPE = 'FAVORITE_RECIPE';

export function setRecipes(items){
    return {
        type:SET_RECIPES,
        payload:{items : items}
    }
}

export function favoriteRecipe(recipe) {
    return {
        type: FAVORITE_RECIPE,
        payload:{recipe : recipe}
    }
}