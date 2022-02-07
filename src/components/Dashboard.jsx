import React from "react";
import styled from "styled-components";
import images from "./util/img";


const Dashboard = () => {

  return(
    <Wrap>
      
      <div className="text-center hero">
        <h1 className="c-name">Randomizer</h1>
        <p>Our goal is to keep Exam.net as user-friendly and robust as possible, <br/>
          so that teachers and students can quickly and easily get started by themselves.
        </p>
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

    h1{
      color:#fff;
      font-size: 4.8rem;
      font-weight:800;
    }
    p{
      font-size: 24px;
      font-weight:500;
    }
  }
`;