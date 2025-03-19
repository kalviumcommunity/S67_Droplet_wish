import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "./UpdateEntity.css";

const UpdateEntity = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [entity, setEntity] = useState({
    name: "",
    description: "",
    price: "",
    isDiscounted: false,
    discountPercentage: "",
    link: "",
    image: "",
    created_by: ""
  });
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchEntity = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/droplets/${id}`);
        setEntity(response.data);
      } catch (error) {
        console.error("Error fetching entity:", error);
      }
    };

    const fetchUsers = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/users");
        setUsers(response.data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchEntity();
    fetchUsers();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEntity((prevEntity) => ({
      ...prevEntity,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:5000/api/droplets/${id}`, entity);
      navigate("/wishlist");
    } catch (error) {
      setError(error.response.data.error);
      console.error("Error updating entity:", error);
    }
  };

  return (
    <div className="update-entity-container">
      <h1>Update Entity</h1>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={entity.name} onChange={handleChange} />
        </label>
        <label>
          Description:
          <input type="text" name="description" value={entity.description} onChange={handleChange} />
        </label>
        <label>
          Price:
          <input type="number" name="price" value={entity.price} onChange={handleChange} />
        </label>
        <label>
          Discount Percentage:
          <input type="number" name="discountPercentage" value={entity.discountPercentage} onChange={handleChange} />
        </label>
        <label>
          Link:
          <input type="text" name="link" value={entity.link} onChange={handleChange} />
        </label>
        <label>
          Image URL:
          <input type="text" name="image" value={entity.image} onChange={handleChange} />
        </label>
        <label>
          Created By:
          <select name="created_by" value={entity.created_by} onChange={handleChange}>
            <option value="">Select User</option>
            {users.map((user) => (
              <option key={user._id} value={user._id}>
                {user.name}
              </option>
            ))}
          </select>
        </label>
        <button type="submit">Update Entity</button>
      </form>
    </div>
  );
};

export default UpdateEntity;