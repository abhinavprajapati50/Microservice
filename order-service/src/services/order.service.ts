const orders = [
  {
    id: 5001,
    userId: 101,
    product: "Laptop",
    amount: 85000
  },
  {
    id: 5002,
    userId: 102,
    product: "Phone",
    amount: 60000
  }
];

export function getOrderById(id: number) {
  return orders.find(order => order.id === id);
}