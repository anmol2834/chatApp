import React from 'react'
import '../component style/Mainbody.css'
import Sidemenu from './Sidemenu'
import Renderpage from './Renderpage'
import Allchats from './Allchats'

export default function Mainbody(props) {



  return (
    <>
      <div className="container2">
        <Allchats allChatsMode={props.mode}/>
        <Renderpage RenderPageMode={props.mode}/>
        <Sidemenu ishow={props.menu} onchagemode={props.changeMode} sideMenuMode={props.mode} textHere={props.modeText}/>
      </div>
    </>
  )
}
