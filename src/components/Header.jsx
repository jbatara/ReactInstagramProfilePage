import React from 'react';
import logo from '../img/yoda-profile-pic.jpg';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog } from '@fortawesome/free-solid-svg-icons'
function Header(props){
  return (
    <div className = "Header">
      <div className="Header-Img">
        <img src={logo} className="Header-Profile-Img" alt="profile-img" />
      </div>
      <div className="Header-Stats">
        <h1>{props.userName} <span><button type="button" class="btn btn-outline-dark btn-sm">Edit Profile</button></span> <FontAwesomeIcon size="xs" icon={faCog}/></h1>

        <p><strong>{props.posts}</strong> posts <span></span>
        <strong>{props.followers}</strong> followers <span></span><strong>{props.following}</strong> following</p>
        <p><strong>{props.name}</strong></p>
      </div>
    </div>
  );

}
export default Header;
