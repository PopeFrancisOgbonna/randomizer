import React from 'react';
import styled from "styled-components";
import NavBar from '../components/NavBar';
import images from '../components/util/img';



const Home = () => {

  return(
    <Wraper>
      <NavBar />
      <div>
        <div className="card mb-3" >
          <div className="row g-0">
            <div className="col-md-8 h-body">
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
              </div>
            </div>
            <div className="col-md-4">
              <img src={images.banner} className="img-fluid rounded-start" alt="..."/>
            </div>
          </div>
        </div>
      </div>
    </Wraper>
  )
}
export default Home;

const Wraper = styled.div `
  .h-body{
    background: #6F92B0  !important;
    color: #fff;
    height:auto;
  }
`;