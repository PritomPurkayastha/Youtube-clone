import React from 'react'
import "./SidebarRow.css"
function SidebarRow({Icon, title}) {
  return (
    <div className='sidebarRow'>
        <Icon className="sidebar_icon"/>
        <div className="sidebar_title">{title}</div>
    </div>
  )
}

export default SidebarRow