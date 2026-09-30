                    CLIENT
                      │
                      │
                      ▼
              ┌───────────────┐
              │ API GATEWAY   │
              │    :4000      │
              └───────┬───────┘
                      │
              ┌───────┴───────┐
              │               │
              ▼               ▼
       ┌────────────┐   ┌────────────┐
       │   USER     │   │   ORDER    │
       │  SERVICE   │   │  SERVICE   │
       │   :4001    │   │   :4002    │
       └────────────┘   └────────────┘
              │               │
              ▼               ▼
           User DB         Order DB




GET /api/users/101
        │
        ▼
Gateway :4000
        │
        ▼
User Service :4001
        │
        ▼
GET /users/101



GET /api/orders/5001
        │
        ▼
Gateway :4000
        │
        ▼
Order Service :4002
        │
        ▼
GET /orders/5001


