import React, { Component } from "react";
import Aux from "../../../src/hoc/Auxillary";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7,
};

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0,
    },
    basePrice: 4,
    purchaseable: false,
    purchasing: false,
  };

  updatePurchaseState = (ingredients) => {
    const sum = Object.keys(ingredients)
      .map((igKey) => {
        return ingredients[igKey];
      })
      .reduce((sum, elem) => {
        return sum + elem;
      }, 0);

    this.setState({ purchaseable: sum > 0 });
  };

  addIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount + 1;

    // state is immutable so create another object with SPREAD operator
    const updatedIngredients = {
      ...this.state.ingredients,
    };
    // Update ingredients with updated count
    updatedIngredients[type] = updatedCount;

    // Get price from INGREDIENT_PRICES
    const totalPrice = INGREDIENT_PRICES[type];
    const basePrice = this.state.basePrice;
    const calculatedCost = basePrice + totalPrice;

    this.setState({
      ingredients: updatedIngredients,
      basePrice: calculatedCost,
    });

    //After a ingredient is added run this to inable or disable order button
    this.updatePurchaseState(updatedIngredients);
  };

  removeIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount - 1;

    const updatedIngredients = {
      ...this.state.ingredients,
    };

    updatedIngredients[type] = updatedCount <= 0 ? 0 : updatedCount;
    const totalPrice = INGREDIENT_PRICES[type];
    const basePrice = this.state.basePrice;
    const calculatedCost = basePrice - totalPrice;

    this.setState({
      ingredients: updatedIngredients,
      basePrice: calculatedCost,
    });

    this.updatePurchaseState(updatedIngredients);
  };

  purchaseHandler = () => {
    this.setState({ purchasing: true });
  };

  purchaseCancelHandler = () => {
    this.setState({ purchasing: false });
  };

  purchaseContinueHandler = () => {
    alert("You can Continue");
  };

  render() {
    const disabledInfo = {
      ...this.state.ingredients,
    };

    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] === 0;
    }

    return (
      <Aux>
        <Modal
          show={this.state.purchasing}
          modalClosed={this.purchaseCancelHandler}
        >
          <OrderSummary
            ingredients={this.state.ingredients}
            price={this.state.basePrice}
            purchaseCancel={this.purchaseCancelHandler}
            purchaseContinue={this.purchaseContinueHandler}
          />
        </Modal>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          addIngredients={this.addIngredientHandler}
          removeIngredients={this.removeIngredientHandler}
          disabled={disabledInfo}
          purchaseable={this.state.purchaseable}
          price={this.state.basePrice}
          purchased={this.purchaseHandler}
        />
      </Aux>
    );
  }
}

export default BurgerBuilder;
