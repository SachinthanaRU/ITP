import React from 'react';
import { Link , useNavigate } from 'react-router-dom';

const Sidebar = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className='allbox'>
        <div className="leftside">
          <div className="sidebar">


          <div className='adminlable'>
          <div className="title">
            Admin
          </div>
          </div>
          <div >
            <button className='sideMenuButton' onClick={()=>navigate("/useradd")}>Users Add</button>
          </div>
          <br/>
          
          <div >
            <button className='sideMenuButton' onClick={()=>navigate("/userlist")}>Users list</button>
          </div>
            {/* <ul className="nav flex-column">
              <li className="nav-item">
                <Link to="/users" className="nav-link text-white">
                  Users
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/add-user" className="nav-link text-white">
                  Add User
                </Link>
              </li>
            </ul> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
