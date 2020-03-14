import React, { Component } from "react";
import styled from "styled-components";
import "../App.css";

import Img from "../images/Logo.png";
import Img1 from "../images/Img1.jpg";
import Img2 from "../images/Img2.jpg";
import Img3 from "../images/Img3.jpg";


import { Link } from "react-router-dom";
const couroselSlide = document.querySelector('.courosel-slide');
const couroselImages = document.querySelectorAll('.courosel-slide img')
// button
const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');
//counter
let counter = 1;
// const size = couroselImages[0].clientWidth;


// couroselSlide.style.transform = 'translateX (' + (-size * counter) + 'px)';
 
// //button listener
// nextBtn.addEventListener('click', ()=> {
//   couroselSlide.style.transition = 'transform 0.4s ease-in-out';
//   counter++;
// })

export default class Navbar extends Component {
  render() {
    return (
      <NavWrapper>
        <header>
          <nav>
            <div className="nav-container ">
              <img src={Img} />
              <div className="btn">
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
              </div>
            </div>
            <ul>
              <div className="navbar" style={{ color: "#fffaf0" }}>
                <Link to="/">
                  <li>Home</li>
                </Link>

                <Link to="About">
                  <li>About Us</li>
                </Link>

                <Link to="/Curriculum">
                  <li>Curriculum</li>
                </Link>
                <Link to="/Extra_Activities">
                  <li>Extra Activities</li>
                </Link>
                <Link to="/Fee_Policy">
                  <li>Fee Policy</li>
                </Link>
                <Link to="/Policy">
                  <li>Addmission Policy</li>
                </Link>
              </div>
            </ul>
          </nav>
          
<div className="courosel-container">
  <div className="courosel-slide">
    <img src={Img1} />
    <img src={Img2} />
    <img src={Img3} />

  </div>
</div>
{/* <button className="prevBtn">Prev</button>
<button className="nextBtn">Next</button> */}

           
        </header>
       
      </NavWrapper>
    );
  }
}

const NavWrapper = styled.div`
.courosel-container{
  margin:auto;
  width: 70%;
  overflow : hidden;
  
}
.courosel-slide{
  display:flex;
  width: 100%;
  height:700px;

}
header{
  width:100%;
}
.navbar{
background: var(--mainDark)

}
  nav ul {
    list-style: none;
    display : none;
  }
nav  ul li {
    display : block;
    background: var(--mainDark);
    padding: 15px;
    font-size: 20px;
    text-decoration: none !important;
    text-transform: uppercase !important;
    color: #fffaf0 !important;
    transition: color 2s ease, background 2s ease, padding 2s ease;
  }
  ul > div :hover{
    background: #474747;
    color: #e0e0ce;
    text-decoration: none !important;
    padding-left : 10px;
  }
  }
  .nav-container > img{
    width:100px;
    align-self:center;
  }
.nav-container{
  padding: 0 30px;
  background : #474747;
  border-bottom: 2px solid #fffaf0;
  display:flex;
  justify-content : space-between;
}
.bar{
  width: 30px;
  height : 2px;
  margin:7px;
  border: 1px solid #fffaf0;
}
.btn{
  padding: 2px;
  display : inline-block;
  border: 2px solid #fffaf0;
  align-self: center;
}
nav {
  position : fixed;
  width : 100%;
 
}
.banner{
  flex:1 0 auto;
  display : flex;
  justify-content : center;
  align-items: center;
  text-align: center;
}
.banner h1{
  font-size: 50px;
  text-transform : uppercase;
}
nav{
  flex: 0 0 auto;
  z-index:10;
}

@media screen and (min-width:776px) {
  .nav-container {
    display: none !important;
  }
  nav ul {
    display : flex !important;
    justify-content: center;
    flex-wrap: wrap;
    background: rgba(13, 19, 23, 0.8);
  }
 nav ul li {
   background: transparent;
 }
 ul > div :hover{
   background : transparent;
  color : green !important;
 }
 .navbar{
   background : transparent;
 }
}
`;
