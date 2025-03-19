import React, { useState, useEffect } from "react";
import axios from "axios";
import "./UserEntities.css";

const UserEntities = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState("");
  const [entities, setEntities] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/users");
        setUsers(response.data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  useEffect(() => {
    if (selectedUser) {
      const fetchEntities = async () => {
        try {
          const response = await axios.get(`http://localhost:5000/api/droplets?created_by=${selectedUser}`);
          setEntities(response.data);
        } catch (error) {
          console.error("Error fetching entities:", error);
        }
      };

      fetchEntities();
    }
  }, [selectedUser]);

  const handleUserChange = (e) => {
    setSelectedUser(e.target.value);
  };

  return (
    <div className="user-entities-container">
      <h1>Entities Created by User</h1>
      <label>
        Select User:
        <select value={selectedUser} onChange={handleUserChange}>
          <option value="">Select User</option>
          {users.map((user) => (
            <option key={user._id} value={user._id}>
              {user.name}
            </option>
          ))}
        </select>
      </label>
      <div className="entities-list">
        {entities.map((entity) => (
          <div key={entity._id} className="entity-item">
            <h2>{entity.name}</h2>
            <p>{entity.description}</p>
            <p>Price: ₹{entity.price}</p>
            {entity.isDiscounted && <p>Discount: {entity.discountPercentage}% OFF</p>}
            <a href={entity.link} target="_blank" rel="noopener noreferrer">
              Buy Now
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserEntities;