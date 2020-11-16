import React, { Component } from "react";
import CheckoutSummary from "../../components/Order/CheckoutSummary/CheckoutSummary";

class Checkout extends Component {
  state = {
    ingredients: {},
  };

  componentDidMount() {
    /*THIS METHOD USES QUERY PARAMS TO PASS INFORMATION*/
    /*   const query = new URLSearchParams(this.props.location.search);
    const ingredients = {};
    for (let params of query.entries()) {
      ingredients[params[0]] = +params[1];
    }
    this.setState({ ingredients: ingredients }); */

    /** THIS METHOD USES THE STATE TO PASS INFORMATION, NO QUERY PARAMS ARE VISIBLE */
    /* ALSO MUCH CLEANER APPROACH */
    this.setState({
      ingredients: this.props.location.state.ingredients,
    });
  }

  checkoutCancelled = () => {
    this.props.history.goBack();
  };

  checkoutAccepted = () => {
    this.props.history.replace("/checkout/contact-form");
  };
  render() {
    return (
      <div>
        <CheckoutSummary
          ingredients={this.state.ingredients}
          checkoutCancelledHandler={this.checkoutCancelled}
          checkoutAcceptedHandler={this.checkoutAccepted}
        />
      </div>
    );
  }
}

export default Checkout;
