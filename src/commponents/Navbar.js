import React from 'react'
import PropTypes from 'react'
import { Link } from 'react-router-dom'
export default function Navbar(props) {
  return (
    <nav className={`navar avar-expand-lg navbar-${props.mode}) bg-${props.mode}` }>
    

    <ul className="nav nav-tabs">
  <li className="nav-item">
    {/* <a className="nav-link active" aria-current="page" href="/aout">aout</a> */}
  </li>
  <li className="nav-item dropdown">
    <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Dropdown</a>
    <ul className="dropdown-menu">
      <li><a className="dropdown-item" href="#">Action{props.title}</a></li>
      <li><a className="dropdown-item" href="#">Another action</a></li>
      <li><a className="dropdown-item" href="#">Something else here</a></li>
      <li><hr className="dropdown-divider"/></li>
      <li><a className="dropdown-item" href="#">Separated link</a></li>
    </ul> 
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#">Link</a>
  </li>
  <li className="nav-item">
    <a className="nav-link disabled"  href="#">Disabled</a>
  </li>
</ul>
<div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
  <input className="form-check-input" onClick={props.too} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Default switch checkbox input</label>
</div>
</nav>

  )
}
