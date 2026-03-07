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
    customer: "Mikayla Hampton",
    shipped: true,
    items: [{ name: "Slim Shirt", qty: 2 }],
  },
  {
    id: "1002",
    customer: "Ashton Jones",
    shipped: false,
    items: [{ name: "Shirt", qty: 1 }],
  },
  {
    id: "1003",
    customer: "Jake Sully",
    shipped: true,
    items: [{ name: "Classic Tee", qty: 2 }],
  },
  {
    id: "1004",
    customer: "Don Toliver",
    shipped: true,
    items: [{ name: "Slim Shirt", qty: 3 }],
  },
  {
    id: "1005",
    customer: "Tiffany Wilson",
    shipped: true,
    items: [
      { name: "Classic Tee", qty: 3 },
      { name: "Slim Shirt", qty: 1},
    ]
  },

  {
    id: "1006",
    customer: "Lauren Riley",
    shipped: false,
    items: [
      { name: "Classic Tee", qty: 1 },
    ],
  },
];


function Fulfillment() {
  return (
    <div className="content">
      <h2>Fulfillment</h2>
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