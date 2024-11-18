import React from 'react'
import '../component style/Renderpage.css';
import Chatbox from './Chatbox';

export default function Renderpage(props) {

  document.documentElement.setAttribute('darkTheme', props.RenderPageMode);

  return (
    <>
    <div className="mid-container">
        <div className="render-page">
          <Chatbox chatBoxMode={props.RenderPageMode}/>
        </div>
    </div>
    </>
  )
}
