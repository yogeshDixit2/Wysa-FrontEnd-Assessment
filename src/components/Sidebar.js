
import React, { useEffect, useState } from "react";
import axios from "axios";
const Sidebar = ({ onUserSelect, onUsersFetch }) => {
 const [users, setUsers] = useState([]);
 const [searchTerm, setSearchTerm] = useState("");
 useEffect(() => {
   axios
     .get("https://dummyjson.com/users")
     .then((response) => {
       const fetchedUsers = response.data.users;
       setUsers(fetchedUsers);
       onUsersFetch(fetchedUsers); 
     })
     .catch((error) => console.error("Error fetching users:", error));
 }, [onUsersFetch]);
 const filteredUsers = users.filter((user) =>
   `${user.firstName} ${user.lastName}`
     .toLowerCase()
     .includes(searchTerm.toLowerCase())
 );
 return (
<aside className="sidebar">
<h2>Users</h2>
<input
       className="search-bar"
       type="text"
       placeholder="Search users"
       value={searchTerm}
       onChange={(e) => setSearchTerm(e.target.value)}
     />
<ul className="user-list">
       {filteredUsers.map((user) => (
<li
           key={user.id}
           className="user-item"
           onClick={() => onUserSelect(user)}
>
           {user.firstName} {user.lastName}
</li>
       ))}
</ul>
</aside>
 );
};
export default Sidebar;
