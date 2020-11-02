import React, { Component } from "react";
import Aux from "../../../src/hoc/Auxillary";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";
import axios from "../../../src/axios-orders";
import Spinner from "../../components/UI/Spinner/Spinner";
import withErrorHandler from "../../hoc/WithErrorHanlder/withErrorHandler";

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7,
};

class BurgerBuilder extends Component {
  state = {
    ingredients: null,
    basePrice: 4,
    purchaseable: false,
    purchasing: false,
    loading: false,
    error: false,
  };

  componentDidMount() {
    axios
      .get("https://react-burgerbuilder-9e72f.firebaseio.com/ingredients.json")
      .then((response) => {
        this.setState({ ingredients: response.data });
      })
      .catch((error) => {
        console.log(error);
        this.setState({ error: true });
      });
  }

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
    this.setState({ loading: true });
    const order = {
      ingredient: this.state.ingredients,
      price: this.state.totalPrice,
      customer: {
        name: "John Doe",
        address: {
          street: "Test data",
          zipCode: "331223",
          country: "Narnia",
        },
        email: "test@yahoo.com",
      },
    };
    axios
      .post("/orders.json", order)
      .then((response) => {
        console.log(response);
        this.setState({ loading: false, purchasing: false });
      })
      .catch((error) => {
        console.log(error);
        this.setState({ loading: false, purchasing: false });
      });
  };

  render() {
    const disabledInfo = {
      ...this.state.ingredients,
    };

    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] === 0;
    }

    let orderSummary = null;
    let burger = this.state.error ? (
      <p>Cannot load ingredients</p>
    ) : (
      <Spinner />
    );

    if (this.state.ingredients) {
      burger = (
        <Aux>
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
      orderSummary = (
        <OrderSummary
          ingredients={this.state.ingredients}
          price={this.state.basePrice}
          purchaseCancel={this.purchaseCancelHandler}
          purchaseContinue={this.purchaseContinueHandler}
        />
      );
    }
    if (this.state.loading) {
      orderSummary = <Spinner />;
    }

    return (
      <Aux>
        <Modal
          show={this.state.purchasing}
          modalClosed={this.purchaseCancelHandler}
        >
          {orderSummary}
        </Modal>
        {burger}
      </Aux>
    );
  }
}

export default withErrorHandler(BurgerBuilder, axios);
