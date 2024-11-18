import React from 'react';
import '../component style/Allchats.css';
import addfreind from '../assets/add-user.png';

export default function Allchats(props) {

  document.documentElement.setAttribute('darkTheme', props.allChatsMode);

  return (
    <>
      <div className="left-container">
        <div className="all-chats">
          <div className="add-freind">
            <div className="inner-add-freind">
          <img src={addfreind} alt="src error..." />
          <h3>add freind</h3>
          </div>
          </div>
        </div>
      </div>
    </>
  )
}

