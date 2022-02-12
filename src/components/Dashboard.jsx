import React from "react";
import styled from "styled-components";
import images from "./util/img";


const Dashboard = () => {

  return(
    <Wrap>
      
      <div className="text-center hero">
        <h1 className="c-name">Randomizer</h1>
        <p>Our goal is to keep the system user-friendly and robust as possible, <br/>
          so that teachers and students can quickly and easily get started by themselves.
        </p>
      </div>
      <div className="text-center">
        <p className="note mx-auto">
          <span className="product_name">Randomizer</span> is a highly reliable cloud-based exam platform. Since 2016, 
          we have served millions of student exams across thousands of schools, 
          universities and organizations world-wide. <span className="product_name">Randomizer</span> replaces or complements 
          the use of pen and paper in classroom exams, and also allows for 
          remote examination. The platform puts the focus on teachers and students. 
          Teachers can easily get started by uploading a PDF of an existing test they 
          have or creating the test within <span className="product_name">Randomizer</span> so it is automatically marked.
        </p>
      </div>
      <div className="reliable p-3 row">
        <div className="col-md-6 col-sm-12 text-center">
          <h4 className="my-5">Reliablity</h4>
          <p className="mx-4">
            <span className="product_name">Randomizer</span> is deployed on cloud infrastructure that automatically scales 
            and handles large numbers of users at the same time.
            The platform is based on modern web technology with a fully encrypted client-server communication. 
          </p>
          <button className="btn btn-outline-secondary w-50 ms-auto">Get Started</button>
        </div>
        <div className="ad my-4 col-md-6 col-sm-12">
          <img src={images.happy} className="img-fluid d-block" alt="student"/>
        </div>
      </div>
      
    </Wrap>
  )
}
export default Dashboard;

const Wrap = styled.main `
  .hero{
    background: url(${images.educator});
    background-repeat: no-repeat;
    background-size:cover;
    height:450px;
    color:#C16004;
    padding:5% 0 0 0;
    @media screen and (max-width:480px){
      height:400px;
    }

    h1{
      color:#fff;
      font-size: 4.8rem;
      font-weight:800;
      @media screen and (max-width:480px){
        font-size: 2.5rem;
        font-weight:800;
      }
    }
    p{
      font-size: 24px;
      font-weight:500;
      @media screen and (max-width:480px){
        font-size: 18px;
        padding:5px;
      }
    }
  }
  p{
    font-size:21px;
    font-weight:400;
  }
  .note{
    width:80%;
    margin:5% auto;
    @media screen and(max-width:600px){
      width:94%;
      margin:3% auto;
    }
  }
  .product_name{
    color:#C16004;
    font-weight:bold;
    cursor:pointer;
  }
  .reliable{
    background:#f5f5f5;

    h4{
      font-size:28px;
      font-weight:bold;
    }
    .btn{
      font-size:21px;
      font-weight:700;
    }
  }
`;