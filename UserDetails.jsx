import React from "react";
import { useParams, Link } from "react-router-dom";

function UserDetails() {
  const { id } = useParams();

  const users = [
    {
      id: 1,
      name: "John Doe",
      email: "john@gmail.com",
      phone: "9876543210",
      address: "12 Main Street",
      city: "Chennai",
    },
    {
      id: 2,
      name: "Priya Sharma",
      email: "priya@gmail.com",
      phone: "9876501234",
      address: "45 Anna Nagar",
      city: "Coimbatore",
    },
    {
      id: 3,
      name: "Rahul Kumar",
      email: "rahul@gmail.com",
      phone: "9876549876",
      address: "78 Gandhi Road",
      city: "Madurai",
    },
    {
      id: 4,
      name: "Anjali Singh",
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

  const selectedUser = users.find(
    (user) => user.id === Number(id)
  );

  if (!selectedUser) {
    return <h2>User Not Found</h2>;
  }

  return (
    <div className="details-card">
      <h2>User Details</h2>

      <p>
        <strong>Name:</strong> {selectedUser.name}
      </p>

      <p>
        <strong>Email:</strong> {selectedUser.email}
      </p>

      <p>
        <strong>Phone:</strong> {selectedUser.phone}
      </p>

      <p>
        <strong>Address:</strong> {selectedUser.address}
      </p>

      <p>
        <strong>City:</strong> {selectedUser.city}
      </p>

      <Link to="/" className="back-btn">
        Back to Users
      </Link>
    </div>
  );
}

export default UserDetails;
