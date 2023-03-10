import React from 'react'

export default function Header({on_click_sidebar}) {
   
  return (
    <div>
<nav className="navbar is-light" role="navigation" aria-label="main navigation" >

  <div id="navbarBasicExample" className="navbar-menu">
    <div className="navbar-start">
    <button onClick = {()=>{on_click_sidebar()}}>&#9776;</button>
    </div>
    <div>
      <p className="navbar-item text-is-centered is-size-5">
        Lotion
      </p>
      <p className="is-size-6">LIKE NOTION BUT WORSE</p>
      </div>

      <div className="navbar-end">
    </div>   
    </div>
    </nav>
    </div>
  );
}
