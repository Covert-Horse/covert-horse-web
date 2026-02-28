import React from "react";

type FulfillmentOrder = {
  id: string;
  customer: string;
  shipped: boolean;
  items: { name: string; qty: number }[];
};

const mockOrders: FulfillmentOrder[] = [
  {
    id: "1001",
    customer: "Ava Johnson",
    shipped: true,
    items: [{ name: "Shirt", qty: 2 }],
  },
  {
    id: "1002",
    customer: "Noah Smith",
    shipped: false,
    items: [{ name: "Pants", qty: 1 }],
  },
  {
    id: "1003",
    customer: "Mia Davis",
    shipped: false,
    items: [
      { name: "Shirt", qty: 1 },
      { name: "Pants", qty: 1 },
    ],
  },
];

function Fulfillment() {
  return (
    <div className="content">
      <h2>Fulfillment</h2>

      <p>
        Shipped orders are normal. <span className="unshipped">Unshipped</span>{" "}
        orders are red.
      </p>

      <ul>
        {mockOrders.map((order) => (
          <li key={order.id} style={{ marginBottom: "1rem" }}>
            <div>
              <strong>Order #{order.id}</strong> — {order.customer} —{" "}
              <span className={order.shipped ? "" : "unshipped"}>
                {order.shipped ? "Shipped" : "Unshipped"}
              </span>
            </div>

            <div>
              Items:{" "}
              {order.items.map((i) => `${i.qty}x ${i.name}`).join(", ")}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Fulfillment;