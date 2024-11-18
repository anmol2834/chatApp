
import React from 'react';
import '../component style/Sidemenu.css';
import user from '../assets/user.png';

export default function Sidemenu(props) {

  const containerClass = props.ishow==='none'?'none-container':'block-container';

  document.documentElement.setAttribute('darkTheme', props.sideMenuMode);
  

  return (
    <>
      <div className={containerClass}>
        <div className="menu-container">
        <div className="menuBox">
          <div className="profile">
            <div className="profilePic">
              <img src={user} alt='src not found'/>
            </div>
            <p>User</p>
          </div>
          <div className="mainMenu">
            <div className="catelogs">
            <div className="menu">
              <p>home</p>
              </div>
              <div className="menu" onClick={props.onchagemode}>
              <p>{props.textHere}</p>
              </div>
              <div className="menu">
              <p>help center</p>
              </div>
              <div className="menu">
              <p>about us</p>
              </div>
              <div className="menu">
              <p>privacy policy</p>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </>
  )
}
