// UserList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import uuid from 'uuid';

const UserList = () => {
  const [users, setUsers] = useState([]);

  const navigate = useNavigate();

  const handleDelete =(userId) =>{
    axios
      .delete(`http://localhost:4000/user/delete/${userId}`)
      .then(() => {
        alert("User deleted Successfully");
        window.location.reload(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  const handleEdit =(userName) =>{
    axios
      .put("http://localhost:4000/user/edit",{name:userName})
      .then(() => {
        alert("User updated Successfully");
        window.location.reload(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:4000/user/'); // Replace with the appropriate API endpoint
        setUsers(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div>
      <div className="Userlitsbox">
        <div className='titlebox'>
      <div className="title">User List</div>
      </div>
      <ul>
        {users.map((user) => (

          <div className='listbox'>
            <div key={user._id}>
              <div>
                 <div className='allboxaling'>
                  <p>Name: {user.name}</p>
                  <p>Email: {user.email}</p>

                </div>

            <div><button onClick={()=>navigate(`/userEdit/${user.userid}`)}>Edit</button></div>
            <div><button onClick={()=>handleDelete(user.userid)}>Delete</button></div>
            {/* Add more user details as needed */}
            </div>
            </div>
          </div>
        ))}
      </ul>

      </div>
    </div>
  );
};

export default UserList;
