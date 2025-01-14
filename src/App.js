import React, { useEffect, useState } from "react";
import Sidebar from "./components/Sidebar";
import UserDetails from "./components/UserDetails";
import ToDoManager from "./components/ToDoManager";
import "./App.css";

const App = () => {

  const [selectedUser, setSelectedUser] = useState(null);
  const [activeTab, setActiveTab] = useState("details");
  const handleUserFetch = (users) => {
    if (!selectedUser && users.length > 0) {
      setSelectedUser(users[0]); 
    }
  };
  // function to handle tab change
  const handleTabChange = (tab) => setActiveTab(tab);
  return (
<div className="dashboard">
<Sidebar onUserSelect={setSelectedUser} onUsersFetch={handleUserFetch} />
<main className="main-content">
 {selectedUser ? (
<>
<div className="header"></div>
<div className="tab-navigation">
<button
 className={`tab-button ${activeTab === "details" ? "active" : ""}`}
 onClick={() => handleTabChange("details")}
> User Details
</button><button
 className={`tab-button ${activeTab === "todos" ? "active" : ""}`}
 onClick={() => handleTabChange("todos")}
>
 To-Dos
</button>
</div><div className="tab-content">
{activeTab === "details" && <UserDetails user={selectedUser} />}
{activeTab === "todos" && <ToDoManager userId={selectedUser.id} />}
</div>
</>
 ) : (
<div className="placeholder">
<h2>Select a user from the sidebar</h2>
</div>
 )}
</main>
</div>
  );
};
export default App; 