import React, { useState } from "react";
import { Container, Button, Checkbox, Form, Header, Segment } from 'semantic-ui-react';
import axios from "axios";
import { v4 as uuid } from 'uuid';

import '../Styles/styles.css';

function UserAdd() {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [userPosition, setUserPosition] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);
  const [checked, setChecked] = useState(false);




  const handleSubmit = (event) => {
    event.preventDefault();

    if (!userName || !userPassword || !userPosition) {
      alert("Please fill in all fields.");
      return;
    }

    const formData = {}
    formData.userId = uuid(); 
    formData.name  = userName;
    formData.email  = email;
    formData.password = userPassword;
    formData.position = userPosition;


    console.log(formData);
    

     axios
      .post("http://localhost:4000/user/register", formData)
      .then(() => {
        alert("User Added Successfully");
         window.location.reload(false);
      })
      .catch((error) => {
        console.log(error);
     });
  };


  return (
    <div>
      <div className="allbox">

        <div className="form">
        <div className="title">Create New User</div>
        <form onSubmit={handleSubmit}>
              <div>
                <div className="input-container ic1">
                  {/* <label htmlFor="height" className="placeholder">Height:</label> */}
                  <input
                    type="text"
                    className="input"
                    id="userName"
                    placeholder="User Name:"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                  />
                </div>
              </div>
              <div>
                <div className="input-container ic1">
                  {/* <label htmlFor="height" className="placeholder">Height:</label> */}
                  <input
                    type="text"
                    className="input"
                    id="email"
                    placeholder="Email:"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>

              <div>
                <div className="input-container ic1">
                  {/* <label htmlFor="weight" className="placeholder">Weight:</label> */}
                  <input
                    type="text"
                    className="input"
                    id="userPassword"
                    placeholder="Password:"
                    value={userPassword}
                    onChange={(e) => setUserPassword(e.target.value)}
                  />
                </div>
              </div>

              <div>
                <div className="input-container ic1">
                  {/* <label htmlFor="gender">Gender:</label> */}
                  <select
                    type="text"
                    id="gender"
                    className="input"
                    placeholder="userPosition:"
                    value={userPosition}
                    onChange={(e) => setUserPosition(e.target.value)}
                  >
                  <option value="">Select role</option>
                  <option value="1">Admin</option>
                  <option value="0">Users</option>
            </select>
                </div>
              </div>

              <button type="submit" className="submit">Submit</button>
        </form>
        </div>
        
        
        {/* <Container>

          <Segment color='green'>
            <Form onSubmit={handleSubmit} color='red'>
              <div className="title" >Users Add</div>
                
              
              <Form.Field>
                <label>User Name</label>
                <input
                  placeholder='User Name'
                  onChange={(event) => {
                    setUserName(event.target.value); }}
                />
              </Form.Field>
              <Form.Field>
                <label>User Password</label>
                <input
                  placeholder='User Password'
                  onChange={(event) => {
                    setUserPassword(event.target.value); }}
                />
              </Form.Field>
              <Form.Field>
                <label>User type</label>
                <input
                  placeholder='User type'
                  onChange={(event) => {
                    setUserPosition(event.target.value); }}
                />
              </Form.Field>
              <div>
                <Checkbox onClick={handleCheckboxClick} checked={checked} label='All Details are Correct' />
              </div>
              <Button type='submit' disabled={isDisabled}>Submit</Button>
            </Form>
          </Segment>
        </Container> */}

      </div>
    </div>
  );
}

export default UserAdd;
