import {combineReducers} from 'redux';
import { SET_RECIPES , FAVORITE_RECIPE} from '../actions';

function recipes(state = [], action){
    switch(action.type) {
        case SET_RECIPES:
            return action.payload.items;
        default:
            return state;
    }
}


function favoriteRecipes(state = [], action) {
    switch(action.type) {
        case FAVORITE_RECIPE:
            state = [...state, action.payload.recipe]
            return state;
            default:
                return state;

    }
}

const rootReducer = combineReducers({
    
    recipes: recipes,
    favoriteRecipes: favoriteRecipes });

export default rootReducer;