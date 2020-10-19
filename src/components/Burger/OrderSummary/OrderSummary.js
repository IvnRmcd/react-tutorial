import React, { Component } from "react";
import Aux from "../../../hoc/Auxillary";
import Button from "../../UI/Button/Button";

class OrderSummary extends Component {
  componentDidUpdate() {
    console.log("Order Summary did Update");
  }
  render() {
    const ingredientSummary = Object.keys(this.props.ingredients).map(
      (igKey) => {
        return (
          <li key={igKey}>
            <span style={{ textTransform: "capitalize" }}>{igKey}</span>:{" "}
            {this.props.ingredients[igKey]}
          </li>
        );
      }
    );
    return (
      <Aux>
        <h3>Your Order Summary</h3>
        <p> Ingredients List</p>
        <ul>{ingredientSummary}</ul>
        <strong>Total Price: ${this.props.price.toFixed(2)}</strong>
        <p>Continue To Checkout?</p>
        <Button btnType="Danger" clicked={this.props.purchaseCancel}>
          CANCEL
        </Button>
        <Button btnType="Success" clicked={this.props.purchaseContinue}>
          CONTINUE
        </Button>
      </Aux>
    );
  }
}

export default OrderSummary;
