import React from 'react';
import { useParams } from 'react-router-dom';
import data from './data';

function OrderDetail() {
  const { id } = useParams<{ id: string }>();

  const order = data.orders.find(
    (o) => o._id === parseInt(id as string)
  );

  if (!order) {
    return <div>Order Not Found</div>;
  }

  return (
    <div className="content content-margined">
      <h2>Order {order._id}</h2>
      <p><strong>User:</strong> {order.user.name}</p>
      <p><strong>Total:</strong> ${order.totalPrice}</p>
      <p><strong>Paid:</strong> {order.isPaid ? 'Yes' : 'No'}</p>
      <p><strong>Delivered:</strong> {order.isDelivered ? 'Yes' : 'No'}</p>
    </div>
  );
}

export default OrderDetail;