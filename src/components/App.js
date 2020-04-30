import React, {Component} from 'react';
import SearchRecipes from './SearchRecipes';
import RecipeList from './RecipeList';



class App extends Component {
    render() {
        return(
            <div>
                <h1>Recipe Finder</h1>
                <hr/>
                <hr/>
                <hr/>
                <hr/>
                <SearchRecipes />
                <hr/>
                <hr/>
                <hr/>
                <hr/>
                <RecipeList />
                
            </div>
        )
    }
}

export default App;