import React, { Component } from "react";
import "./ExpenseItem.css";

class ExpenseItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="expense-item">
        <div>March 28th 2021</div>
        <div className="expense-item__description">
          <h2>Car Insurance</h2>
          <div className="expense-item__price">$295.65</div>
        </div>
      </div>
    );
  }
}

export default ExpenseItem;
