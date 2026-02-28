export default {
  orders: [
    {
      _id: 1,
      createdAt: '02/20/2021',
      totalPrice: 42.99,
      user: { name: 'Taylor' },
      isPaid: true,
      paidAt: '02/20/2021',
      isDelivered: false,
      deliveredAt: null,
    },
    {
      _id: 2,
      createdAt: '02/22/2021',
      totalPrice: 52.99,
      user: { name: 'Pedro' },
      isPaid: true,
      paidAt: '02/22/2021',
      isDelivered: true,
      deliveredAt: '02/25/2021',
    },
    {
      _id: 3,
      createdAt: '02/25/2021',
      totalPrice: 60.0,
      user: { name: 'Sanjay' },
      isPaid: false,
      paidAt: null,
      isDelivered: false,
      deliveredAt: null,
    },
  ],
};