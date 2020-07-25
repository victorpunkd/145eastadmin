import React, { Component } from "react";
import "./Orders.css";
import { OrderCard } from "../OrderCard/OrderCard";

export class Orders extends Component {
  constructor() {
    super();
    this.state = {
      isLoaded: false,
      data: [],
    };
  }

  componentDidMount() {
    fetch(`https://api.the145east.com/api/getAllOrdersForAdmin`)
      .then((res) => res.json())
      .then(
        (data) => {
          this.setState({
            isLoaded: true,
            data: data,
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
          console.log(error);
        }
      );
  }

  handleOrderCardClick = (order_id) => {
    console.log(order_id);
    alert("coming soon");
  };

  render() {
    return (
      <div className="ordersCcontainer">
        <div className="w3-xlarge">Orders Page</div>
        {this.state.isLoaded ? (
          this.state.data.length ? (
            <div>
              {this.state.data.map((data) => (
                <OrderCard
                  data={data}
                  key={data.order_id}
                  orderDetailsClicked={this.handleOrderCardClick}
                />
              ))}
            </div>
          ) : (
            <div>No orders yet</div>
          )
        ) : (
          <div>Loading...</div>
        )}
      </div>
    );
  }
}

export default Orders;
