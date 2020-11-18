import React, { Component } from "react";
import Button from "../../../components/UI/Button/Button";
import styles from "./ContactForm.module.css";

class ContactForm extends Component {
  state = {
    name: "",
    email: "",
    address: {
      street: "",
      postalCode: "",
    },
  };
  render() {
    return (
      <div className={styles.Contact_Form}>
        <h4>Enter your contact Information</h4>
        <form>
          <input type="text" name="name" placeholder="Name" />
          <input type="email" name="email" placeholder="Email Address" />
          <input type="text" name="Street" placeholder="Street Name" />
          <input type="text" name="Postal" placeholder="PostalCode" />
          <Button btnType="Success"> ORDER </Button>
        </form>
      </div>
    );
  }
}

export default ContactForm;
