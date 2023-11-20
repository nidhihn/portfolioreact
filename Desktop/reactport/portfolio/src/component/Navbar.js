import "../css/Navbar.css";
import React, { useState } from "react";
import {Link} from "react-router-dom";


function Navbar() {
  const [navbar, setNavbar] = useState(false);
  const hamb = (value) => {
    setNavbar(value);
    console.log("hi");
  };
  return (
    <>
      <nav>
        <div className="left"><b>Nidhi</b></div>
        <div className="right">
          <ul>
            <li>
              <Link className="elem" to="/">
                Home
              </Link>
            </li>
            <li>
            <Link className="elem" to="/About">
                About
              </Link>
            </li>
            <li>
              <a href="/" className="elem"> Projects</a>
            </li>
            <li>
              <a href="/" className="elem">Contact me</a>
            </li>
            <li>
              <a href="#" onClick={() => hamb(true)} id="hamb">
                &#9776;
              </a>
            </li>
          </ul>
          {navbar ?
          <>
            <ul class="sidebar">
              <li>
                <a href="#" onClick={() => hamb(false)} id="hamb">&#x2715;</a>
              </li>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/">About me</a>
              </li>           
              <li>
                <a href="/">Projects</a>
              </li>
              <li>
                <a href="/">Contact me</a>
              </li>
            </ul>
          </>
          :
          ""
        }

        </div>
      </nav>
    </>
  );
}
export default Navbar;
