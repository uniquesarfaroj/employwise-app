import React from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const UserCard = ({ user, refreshUsers }) => {
  const navigate = useNavigate();

  const handleDelete = async () => {
    try {
      await axios.delete(`https://reqres.in/api/users/${user.id}`);
      refreshUsers();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="col-md-4 mb-3">
      <div className="card">
        <img src={user.avatar} className="card-img-top" alt="avatar" />
        <div className="card-body">
          <h5 className="card-title">{user.first_name} {user.last_name}</h5>
          <button
            className="btn btn-warning me-2"
            onClick={() => navigate(`/edit/${user.id}`)}
          >
            Edit
          </button>
          <button
            className="btn btn-danger"
            onClick={handleDelete}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
