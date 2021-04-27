import React from 'react';

class Orders extends React.Component {
  render() {
    const orders = [{
      id: 102,
      user: "cena@gmail.com",
      product: "Razer Headphone",
      price: {
        value: 99.99,
        currency: "dollars"
      }
    },
    {
      id: 77,
      user: "cena@gmail.com",
      product: "Monster 500mL",
      price: {
        value: 9.99,
        currency: "dollars"
      }
    }]

    return (
      orders.map(order => {
        const { user, product, price } = order;
        return (<div className="order">
          <p> {user} bought {product} for {price.value} {price.currency} </p>
        </div>)}
      )
    );
  }
}

export default Orders;