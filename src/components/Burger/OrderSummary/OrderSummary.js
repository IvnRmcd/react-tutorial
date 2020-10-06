import React from "react";
import Aux from "../../../hoc/Auxillary";

const orderSummary = (props) => {
  const ingredientSummary = Object.keys(props.ingredients).map((igKey) => {
    return (
      <li key={igKey}>
        <span style={{ textTransform: "capitalize" }}>{igKey}</span>:{" "}
        {props.ingredients[igKey]}
      </li>
    );
  });
  return (
    <Aux>
      <h3>Your Order Summary</h3>
      <p> Ingredients List</p>
      <ul>{ingredientSummary}</ul>
      <p>Continue To Checkout?</p>
    </Aux>
  );
};

export default orderSummary;
