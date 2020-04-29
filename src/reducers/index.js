import {combineReducers} from 'redux';
import { SET_RECIPES} from '../actions';

function recipes(state = [], action){
    switch(action.type) {
        case SET_RECIPES:
            return action.payload.items;
        default:
            return state;
    }
}

const rootReducer = combineReducers({recipes: recipes});

export default rootReducer;