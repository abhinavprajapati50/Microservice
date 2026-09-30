const users = [
  {
    id: 101,
    name: "John",
    email: "john@example.com"
  },
  {
    id: 102,
    name: "Alice",
    email: "alice@example.com"
  }
];

export function getUserById(id: number) {
  return users.find(user => user.id === id);
}