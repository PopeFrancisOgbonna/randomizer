import React from "react";
import styled from "styled-components";
import images from "../components/util/img";
import {Route, Switch} from "react-router-dom";
import Dashboard from "../components/Dashboard";
import Footer from "../components/Footer";


const Nav = () => {
  
  return(
    <NavWrap>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img className="img-fluid me-3" width="30px" src={images.logo} alt="logo"/>
            Randomizer
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/user/dashboard">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/user/dashboard/upload">Upload Questions</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/user/dashboard/randomize">Randomize Questions</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </NavWrap>
  )
}
const NavWrap = styled.div `
`;

const EducatorDashboard = () => {

  return(
    <Wrap>
      <Nav />
      <Switch>
        <Route path="/user/dashboard" exact>
          <Dashboard />
        </Route>
        <Route path="/user/dashboard/upload" exact>
          <h1>Upload file</h1>
        </Route>
        <Route path="/user/dashboard/randomize" exact>
          <h1>Radomize Questions</h1>
        </Route>
      </Switch>
      <Footer />
    </Wrap>
  )
}
export default EducatorDashboard;

const Wrap = styled.div `

`;
