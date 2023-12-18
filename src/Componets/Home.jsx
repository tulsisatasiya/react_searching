import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Home = () => {
  const [users, setUsers] = useState([]);
  const [searchdata, setsearchdata] = useState('');

  useEffect(() => {
    axios.get('https://dummyjson.com/users')
      .then(response => setUsers(response.data.users))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const filteredUsers = users.filter(user =>
    user.firstName.toLowerCase().includes(searchdata.toLowerCase())
  );

  return (
    <>
      <h2>Searching</h2><br />
      <form>
        <input type="text" placeholder="Search Firstname"  value={searchdata} onChange={(e) => setsearchdata(e.target.value)} />
      </form><br />
      <table className="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.age}</td>
              <td>{user.gender}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Home;
