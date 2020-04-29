import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setRecipes } from '../actions';


class SearchRecipes extends Component {
  state ={
    ingredients:'',
    dish:''
  }

  Search =( event) => {
    event.preventDefault();
    const url = `http://www.recipepuppy.com/api/?i=garlic,chicken&q=adobo?`;
    console.log(this.state)

    fetch (url, {
      method:'GET'
    }).then(response => response.json())
      .then(json => {
          this.props.setRecipes(json.results)
      });
  }


  ChangeHandler = (event) =>
  {
    this.setState({ [event.target.name]: event.target.value})
    


  }
    render() {
     const {ingredients, dish} = this.state;

        return (
        
                <form className="inline">
                  <div className="form-group">
                  <label><b><h2>Ingredient</h2></b></label>
                  <input type="text" 
                  className="form-control"
                  onChange={this.ChangeHandler}
                  placeholder="Ingredients"
                  name="ingredients"
                  value={ingredients}/>
                  </div>
                  <div className="form-group">
                  <label><b><h2>Dish</h2></b></label>
                  <input type="text"
                   className="form-control"
                   placeholder="Dish"
                   name="dish"
                   onChange={this.ChangeHandler}
                   value={dish}
                  />
                  </div>
                  <div>

        <button className="btn btn-primary"
                  onClick={this.Search }>Submit</button>
                  </div>




                </form>


            
           
          
     
        )
    }



}


export default connect(null, {setRecipes})(SearchRecipes);