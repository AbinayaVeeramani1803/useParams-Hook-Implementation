import React from "react";
import { Link } from "react-router-dom";

function UserList() {
  const users = [
    {
      id: 1,
      name: "John ",
      email: "john@gmail.com",
      phone: "9876543210",
      address: "12 Main Street",
      city: "Chennai",
    },
    {
      id: 2,
      name: "Priya ",
      email: "priya@gmail.com",
      phone: "9876501234",
      address: "45 Anna Nagar",
      city: "Coimbatore",
    },
    {
      id: 3,
      name: "Kumar",
      email: "rahul@gmail.com",
      phone: "9876549876",
      address: "78 Gandhi Road",
      city: "Madurai",
    },
    {
      id: 4,
      name: "Anjali ",
      email: "anjali@gmail.com",
      phone: "9123456780",
      address: "21 Park Avenue",
      city: "Trichy",
    },
    {
      id: 5,
      name: "Karthik",
      email: "karthik@gmail.com",
      phone: "9988776655",
      address: "Lake View",
      city: "Salem",
    },
  ];

  return (
    <div className="card">
      <h2>User List</h2>

      {users.map((user) => (
        <Link
          key={user.id}
          to={`/user/${user.id}`}
          className="user-link"
        >
          {user.name}
        </Link>
      ))}
    </div>
  );
}

export default UserList;
