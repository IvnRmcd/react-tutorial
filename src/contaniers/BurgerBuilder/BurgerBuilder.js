import React, {Component} from 'react';
import Aux from '../../../src/hoc/Auxillary'
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';


const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
}

class BurgerBuilder extends Component {

    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        basePrice: 4
    }

    addIngredientHandler = (type) =>{
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;

        // state is immutable so create another object with SPREAD operator
        const updatedIngredients = {
            ...this.state.ingredients
        };
        // Update ingredients with updated count
        updatedIngredients[type] = updatedCount;

        // Get price from INGREDIENT_PRICES
        const totalPrice = INGREDIENT_PRICES[type]
        const basePrice = this.state.basePrice;
        const calculatedCost = basePrice + totalPrice;


        this.setState({ingredients:updatedIngredients,
                        basePrice: calculatedCost});
    }

    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount - 1; 

        const updatedIngredients = {
            ...this.state.ingredients
        }

        updatedIngredients[type] = updatedCount <= 0 ? 0:updatedCount;
        const totalPrice = INGREDIENT_PRICES[type];
        const basePrice = this.state.basePrice;
        const calculatedCost = basePrice - totalPrice;


        this.setState({ingredients:updatedIngredients,
                        basePrice: calculatedCost});
    }

    render(){
        const disabledInfo = {
            ...this.state.ingredients
        }

        for(let key in disabledInfo){
            disabledInfo[key] = disabledInfo[key] === 0
        }


        return (
            <Aux>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls 
                addIngredients={this.addIngredientHandler}
                removeIngredients = {this.removeIngredientHandler}
                disabled={disabledInfo}/>
            </Aux>
        );
    }
}

export default BurgerBuilder;