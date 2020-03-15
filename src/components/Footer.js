import React, { Component } from "react";
import styled from "styled-components";
import Logo from '../images/logo2.png';

class Footer extends Component {
    render() {
        return (
            <FooterWrapper>
                <footer className="ct-footer">
                    <div className="container">
            x 
            <ul className="ct-footer-list text-center-sm">
                            <li>
                                <h2 className="ct-footer-list-header">About Us</h2>
                                <ul>
                                    <li>
                                        <a href="">How We Start</a>
                                    </li>
                                    <li>
                                        <a href="">Philosophy, Ethos And Values</a>
                                    </li>
                                    <li>
                                        <a href="">Our Core Values</a>
                                    </li>
                                    <li>
                                        <a href="">Our Mission </a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <h2 className="ct-footer-list-header">Curriculum</h2>
                                <ul>
                                    <li>
                                        <a href="">Early Years Stage</a>
                                    </li>
                                    <li>
                                        <a href="">The Montessori Teacher at IJK </a>
                                    </li>
                                    <li>
                                        <a href="">Junior Montessori</a>
                                    </li>
                                    <li>
                                        <a href="">Senior Montessori</a>
                                    </li>
                                    <li>
                                        <a href="">Advance Montessori</a>
                                    </li>
                                    <li>
                                        <a href="">Primary Section</a>
                                    </li><li>
                                        <a href="">Secondary Section</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <h2 className="ct-footer-list-header">Extra Activities</h2>
                                <ul>
                                    <li>
                                        <a href="">Thought Leadership</a>
                                    </li>
                                    <li>
                                        <a href="">Webinars</a>
                                    </li>
                                    <li>
                                        <a href="">Events</a>
                                    </li>
                                    <li>
                                        <a href="">Sponsorships</a>
                                    </li>
                                    <li>
                                        <a href="">Advisors</a>
                                    </li>
                                    <li>
                                        <a href="">Training Program</a>
                                    </li>
                                    <li>
                                        <a href="">Activities & Campaigns</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <h2 className="ct-footer-list-header">Fee Policy</h2>
                                <ul>
                                    <li>
                                        <a href="">WebCorpCo Blog</a>
                                    </li>
                                    <li>
                                        <a href="">Hackathons</a>
                                    </li>
                                    <li>
                                        <a href="">Videos</a>
                                    </li>
                                    <li>
                                        <a href="">News Releases</a>
                                    </li>
                                    <li>
                                        <a href="">Newsletters</a>
                                    </li>
                                </ul> <ul className="logUl">
                                    <li>
                                <img src={Logo}className="logo" className="col-sm-d-none" />
                                </li>
                                    
                                </ul>
                          
                            </li>
                            <li>
                              
                            </li>
                        </ul>
                    </div>
                        <div className="ct-footer-post mb-5 ">
                            <div className="container">
                                <div

                                    style={{ fontSize: "20px", color: "white" }}
                                >
                                    <ul>
                                        <li>
                                           <a href="https://www.facebook.com/ijkschoolingandcoachingsystem/" target="_blank"> <i class="fab fa-facebook"></i></a>
                                        </li>
                                      
                                        <li >
                                        <i class="far fa-envelope"></i>   ijkeducation@hotmail.com
                                        </li >
                                       
                                        <li >
                                        <i class="fas fa-phone-square-alt"></i> 021 3459 0538
                                        </li >
                                    
                                        <li>
                                        <i class="fas fa-map-marker-alt"></i> House no. F-5, Rafa-e-aam Soceity, Malir Halt. Karachi, Pakistan
                                    </li>
                                        
                                       
                                    </ul>

                                </div>
                            </div>
                        </div>
                </footer>
            </FooterWrapper>
        );
    }
}
const FooterWrapper = styled.footer`
.logo{
    width:300px;
    height: 150px;
    margin-left: 300px;
    margin-top:
    -180px;
}

}
  html,
  body,
  img,
  figure {
    max-width: 100%;
  }
  .footer-foot{
      display:flex !important;

      overflow: hidden;
      background: transparent;
  }
  html,
  body {
    overflow-x: hidden;
    color: #000;
    -ms-overflow-style: scrollbar;
    -webkit-font-smoothing: antialiased;
  }
  a,
  a:hover,
  a:focus,
  a:active {
    text-decoration: none;
    color: inherit;
  }
  a {
    -webkit-transition: all 0.25s ease-in-out;
    transition: all 0.25s ease-in-out;
  }
  .ct-u-paddingTop10 {
    padding-top: 10px !important;
  }
  .ct-footer {
    background-color: #111;
  padding:0px;
    margin-top: 20px;
    position: relative;
  }
  .ct-footer-pre {
    width: 100%;
    padding-bottom: 55px;
    border-bottom: 1px solid #555;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  }
  .ct-footer-pre span {
    font-family: "Open Sans Condensed", sans-serif;
    color: #ebebeb;
    font-size: 30px;
  }
  .ct-footer-pre .form-group {
    position: relative;
    margin: 0;
  }
  .ct-footer-pre .form-group:before,
  .ct-footer-pre .form-group:after {
    content: "";
    display: table;
  }
  .ct-footer-pre .form-group:after {
    clear: both;
  }
  .ct-footer-pre .form-group input {
    border: 1px solid #00bff3;
    background-color: #333;
    color: #fff;
    height: 50px;
    padding: 0 30px;
    margin: 0 5px;
    border-radius: 0 !important;
  }
  .ct-footer-pre .form-group button {
    height: 50px;
    position: relative;
    width: 80px;
    padding: 0;
  }
  .ct-footer-list {
    padding: 50px 0;
    list-style: none;
    padding-left: 0;
    width: 100%;
    border-bottom: 1px solid #555;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  }
  .ct-footer-list > li .ct-footer-list-header {
    font-family: "Open Sans Condensed", sans-serif;
    color: #00bff3;
    font-size: 30px;
  }
  .ct-footer-list > li ul {
    list-style: none;
    padding-left: 0;
  }
  .ct-footer-list > li ul li a {
    color: #fff;
  }
  .ct-footer-list > li ul li a:hover,
  .ct-footer-post a:hover {
    text-decoration: underline;
  }
  .ct-footer-post {
    background: #000;
    padding: 30px 0;
  }
  .ct-footer-post .inner-left,
  .ct-footer-post .inner-right {
    padding: 20px 0;
  }
  .ct-footer-post ul {
    list-style: none;
    padding-left: 0;
    margin: 0 -20px;
  }
  .ct-footer-post ul li {
    display: inline-block;
    margin: 0 20px;
  }
  .ct-footer-post a {
    color: #fff;
  }
  .ct-footer-post p {
    color: #fff;
  }
  .ct-footer-meta {
    padding-top: 30px;
  }
  .ct-footer-meta .ct-socials {
    padding: 20px 0;
  }
  .ct-footer-meta .ct-socials li {
    padding: 0 3px;
  }
  .ct-footer--with-button {
    padding-top: 150px;
  }
  address {
    color: #fff;
    display: inline-block;
  }
  address span {
    font-weight: 600;
  }
  address a {
    color: #fff;
  }
  address a:hover {
    text-decoration: underline;
  }
  .btn {
    font-family: "Open Sans Condensed", sans-serif;
    border-radius: 0;
    border: none;
    text-transform: uppercase;
    color: #111;
    font-size: 26px;
    padding: 12px 30px;
  }
  .btn.btn-motive {
    background-color: #00bff3;
    -webkit-transition: all 0.25s ease;
    transition: all 0.25s ease;
  }
  .btn.btn-motive:hover,
  .btn.btn-motive:hover:active {
    background-color: #00bff3;
  }
  .btn.btn-violet {
    color: #fff;
    background-color: #4f4f99;
    -webkit-transition: all 0.25s ease;
    transition: all 0.25s ease;
  }
  .btn.btn-violet:hover {
    background-color: #37376b;
  }
  .btn.btn-violet:hover:active {
    background-color: #2f2f5b;
  }
  .btn.btn-green {
    color: #fff;
    background-color: #43670f;
    -webkit-transition: all 0.25s ease;
    transition: all 0.25s ease;
  }
  .btn.btn-green:hover {
    background-color: #36520c;
  }
  .btn.btn-green:hover:active {
    background-color: #314a0b;
  }
  .btn.btn-red {
    color: #fff;
    background-color: #da2229;
    -webkit-transition: all 0.25s ease;
    transition: all 0.25s ease;
  }
  .btn.btn-red:hover {
    background-color: #ae1b21;
  }
  .btn.btn-red:hover:active {
    background-color: #9d181e;
  }
  .btn.btn-white {
    background-color: #fff;
    -webkit-transition: all 0.25s ease;
    transition: all 0.25s ease;
  }
  .btn.btn-white:hover {
    background-color: #d9d9d9;
  }
  .btn.btn-white:hover:active {
    background-color: #c9c9c9;
  }
  .btn.btn-large {
    padding: 20px 50px;
    font-size: 30px;
    white-space: normal;
  }
  .ct-mediaSection {
    background-attachment: fixed;
  }
  .ct-section_header--type1 {
    font-family: "Open Sans Condensed", sans-serif;
    color: #000;
    font-size: 115px;
    text-transform: uppercase;
  }
  .ct-section_header--type2 small {
    font-family: "coquette", fantasy;
    font-size: 58px;
    line-height: 0.7;
    display: block;
    font-weight: 700;
    position: relative;
    left: -12px;
  }
  .ct-section_header--type2 span {
    font-family: "Bebas Neue";
    font-size: 115px;
    line-height: 0.8;
  }
  .ct-section_header--type2 img {
    display: inline-block;
    float: left;
    position: relative;
    top: 15px;
    padding-right: 3px;
  }
  .ct-section_header--type3 {
    text-align: center;
  }
  .ct-section_header--type3 small {
    font-family: "coquette", fantasy;
    font-size: 50px;
    padding: 15px 0;
    font-weight: 700;
    color: #fff;
    background-image: url("/core/fileparse.php/16/urlt/../images/ribbon.png");
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    display: block;
  }
  .ct-section_header--type3 span {
    font-family: "Bebas Neue";
    font-size: 150px;
    font-weight: 400;
    text-transform: uppercase;
    line-height: 0.85;
  }
  .ct-section_header--type4 {
    text-align: center;
  }
  .ct-section_header--type4:before,
  .ct-section_header--type4:after {
    content: "";
    display: table;
  }
  .ct-section_header--type4:after {
    clear: both;
  }
  .ct-section_header--type4 small {
    font-family: "coquette", fantasy;
    font-size: 50px;
    color: inherit;
    font-weight: 700;
    display: block;
  }
  .ct-section_header--type4 span {
    font-family: "nimbus-sans-condensed", sans-serif;
    font-weight: 400;
    font-weight: bold;
    font-size: 150px;
    text-transform: uppercase;
    display: block;
    line-height: 0.7;
  }
  .ct-section_header + p {
    font-size: 30px;
    font-weight: 700;
    letter-spacing: -1.5px;
    text-align: center;
  }
  .ct-section_header--type4 + p {
    font-family: "nimbus-sans-condensed", sans-serif;
    font-weight: 400;
    font-size: 40px;
    font-weight: 700;
    line-height: 1;
  }

  /* Media Queries */

  @media (min-width: 1200px) {
    .ct-footer-pre {
      display: table;
    }
    .ct-footer-pre > .inner {
      display: table-cell;
      vertical-align: middle;
    }
    .ct-footer-list > li {
      width: 20%;
      display: table-cell;
      vertical-align: top;
    }
    .ct-footer-list > li:last-child {
      width: 7%;
    }
  }

  @media (max-width: 1199px) {
    .ct-footer-pre .form-group {
      padding-top: 15px;
    }
  }
  @media (max-width: 1199px) {
    .ct-footer-list > li {
      display: inline-block;
      float: left;
    }
  }
  @media (min-width: 992px) {
    .ct-footer-post .inner-left {
      float: left;
    }
    .ct-footer-post .inner-right {
      float: right;
    }
  }
  @media (max-width: 991px) {
    .ct-footer-post {
      text-align: center;
    }
  }
  @media (min-width: 768px) and (max-width: 1199px) {
    .ct-footer-list > li {
      width: 33.3333%;
    }
  }
  @media (min-width: 768px) {
    .ct-footer-post p {
      display: inline-block;
    }
    .ct-footer-post p + p {
      padding-left: 50px;
    }
  }
  @media (max-width: 767px) {
    address {
      padding-top: 30px;
    }
  }
  @media (min-width: 480px) and (max-width: 767px) {
    .ct-footer-list > li {
      width: 50%;
    }
  }
  @media (min-width: 480px) {
    .ct-footer-pre .form-group button {
      top: -1px;
    }
    .ct-footer-pre .form-group input {
      width: 331px;
    }
  }
  @media (max-width: 479px) {
    .ct-footer-pre .form-group input {
      float: left;
      width: 70%;
      margin: 0;
    }
    .ct-footer-pre .form-group button {
      float: left;
      width: 30%;
    }
    .ct-footer-list > li {
      width: 100%;
      text-align: center;
    }
    .ct-footer-list {
      padding: 20px 0;
    }
    .btn.btn-large {
      padding: 20px 10px;
      line-height: 0.9;
      font-size: 26px;
      letter-spacing: -0.2px;
    }
    .ct-section_header--type1 {
      font-size: 60px;
      line-height: 0.8;
    }
    .ct-section_header + p {
      font-size: 22px;
    }
    .ct-section_header--type3 small {
      font-size: 25px;
    }
    .ct-section_header--type4 small {
      font-size: 40px;
    }
    .ct-section_header--type3 span {
      font-size: 90px;
    }
    .ct-section_header--type4 span {
      font-size: 80px;
    }
    .ct-section_header--type4 + p {
      font-size: 28px;
    }
  }
`;
export default Footer;
