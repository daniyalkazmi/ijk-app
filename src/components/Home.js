import React, { Component } from "react";
import styled from "styled-components";
import Hbg from '../images/ijk.jpg';
class Home extends Component {
  render() {
    return (
      <HomeWrapper>
        <div className="row justify-content-md-center
        
        ">
          <div className="col-3  p-5 col-expand
          
          ">

            <h2> <i class="fas fa-school"></i> Schooling Life</h2>
          </div>
          <div className="col-3  p-5">
            <h2> <i class="fas fa-user-graduate"></i> Qualified Staff</h2>
          </div>
          <div className="col-3  p-5">

            <h2><i class="fas fa-running"></i>Sports Activities</h2>
          </div>
          <div className="col-3  p-5">

            <h2> <i class="fas fa-sms"></i> SMS Alert</h2>
          </div>
        </div>
        <div class="row home">
          <div className='col-6' >

           
          </div>
          <div className='col-6 add' >

           <h1>
           Apply for Admission
           </h1>
           <h3>
           IJK Schooling Addmission Policy
           </h3>
           <h4>
           To be considered for admission, the candidate must submit a completed admission form accompanied with a school leaving certificate (if any) and other documents as detailed in the admission form. An initial assessment for placement will be made based on documentation provided. A written test is then conducted which tests the student’s prior knowledge and standing. This will be followed by an interview of the student along with the parent.

The school reserves the right to deny admission to any student based on his/her performance in the test and interview.
           </h4>
          </div>
        </div>
      </HomeWrapper>
    );
  }
}
const HomeWrapper = styled.div`


h1 ,h3,h4{
  color : var(--mainWhite);
  padding:20px;
  font-family : TimesNewRoman;
}

`;
export default Home;
