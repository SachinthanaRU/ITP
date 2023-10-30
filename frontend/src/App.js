import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddUserForm from './components/userform';
import Sidebar from './components/sidebar';
import UserList from './components/UserList';
import UserEdit from './components/editUserForm';
import './Styles/styles.css';

function App() {
  return (
    <Router>
      <div className="App">
        <div className='allbox'>
          <Sidebar />
          <div className="itemboxset">
            <Routes>
              <Route path="/userlist" element={<UserList />} />
                
              <Route path="/useradd"  element={<AddUserForm />} />
                
              <Route path="/userEdit/:id"  element={<UserEdit/>} />

            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
