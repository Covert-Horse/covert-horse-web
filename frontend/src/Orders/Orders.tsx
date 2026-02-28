import React from 'react';
import { Link } from 'react-router-dom';
import data from './data';

function Orders() {
  return (
    <div className="content content-margined">
      <h2>Orders</h2>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>DATE</th>
            <th>TOTAL</th>
            <th>USER</th>
            <th>PAID</th>
            <th>DELIVERED</th>
            <th>ACTION</th>
          </tr>
        </thead>
        <tbody>
          {data.orders.map((order) => (
            <tr key={order._id}>
              <td>{order._id}</td>
              <td>{order.createdAt}</td>
              <td>${order.totalPrice}</td>
              <td>{order.user.name}</td>
              <td>{order.isPaid ? order.paidAt : 'No'}</td>
              <td>{order.isDelivered ? order.deliveredAt : 'No'}</td>
              <td>
                <Link to={`/orders/${order._id}`}>
                  Details
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Orders;