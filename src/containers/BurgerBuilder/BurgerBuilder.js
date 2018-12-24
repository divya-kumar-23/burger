import React, {Component} from 'react';

import Auxiliary from '../../hoc/Auxiliary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

class BurgerBuilder extends Component{
    state={
        ingredients:{
            salad:0,
            bacon:0,
            cheese:0,
            meat:0
        },
        totalPrice:4
    }
    addIngredientHandler=(type)=>{
      const oldCount=this.state.ingredients[type];
      const updatedCount=oldCount+1;
      const updatedIngredients={
          ...this.state.ingredients
      };
      updatedIngredients[type]=updatedCount;

    }
    removeIngredientHandler=(type)=>{

    }
    render(){
        
        return(
            <Auxiliary>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls />

            </Auxiliary>
        );
    }
}
export default BurgerBuilder;