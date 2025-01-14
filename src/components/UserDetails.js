import React from "react";
import "./UserDetails.css";
const UserDetails = ({ user }) => {
 return (
<div className="user-details">
<div className="user-block">
<div className="user-info">
<h2>{user.firstName} {user.lastName}</h2>
<p>{user.designation || "Frontend Developer"}</p>
<p>{user.address.city}, {user.address.state}, {user.address.country}</p>
</div>
<button className="edit-button">Edit</button>
</div>
 
<div className="user-block">
<div className="user-info">
<h3>Personal Information</h3>
<p><strong>Age:</strong> {user.age}</p>
<p><strong>Email:</strong> {user.email}</p>
<p><strong>Phone:</strong> {user.phone}</p>
</div>
<button className="edit-button">Edit</button>
</div>
<div className="user-block">
<div className="user-info">
<h3>Address</h3>
<p><strong>City:</strong> {user.address.city}</p>
<p><strong>State:</strong> {user.address.state}</p>
<p><strong>Country:</strong> {user.address.country}</p>
</div>
<button className="edit-button">Edit</button>
</div>
<div className="user-block">
<div className="user-info">
<h3>Company</h3>
<p><strong>Company Name:</strong> {user.company.name}</p>
<p><strong>Title:</strong> {user.company.title}</p>
</div>
<button className="edit-button">Edit</button>
</div>
</div>
 );
};
export default UserDetails;