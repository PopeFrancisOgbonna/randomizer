import React from "react";
import styled from "styled-components";
import images from "./util/img";


const Footer = () =>{

  return(
    <Wrap>
      <div className="container-fluid footer">
        <div className="row">
          <div className="col-md-3 col-sm-12">
            <div className="logo-div d-flex align-item-center">
              <img src={images.logo} width={50} alt="company-logo" className="img-fluid" />
              <h4 className="ms-1 mt-2">Randomizer</h4>
            </div>
            <p>Book a Demo Session</p>
          </div>
          <div className="col-md-3 col-sm-12">
            <div>
              <h4>Quick Menu</h4>
              <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/register">Register</a></li>
                <li><a href="/login">Login</a></li>
              </ul>
            </div>
          </div>
          <div className="col-md-3 col-sm-12">
            <div>
              <h4>Subscribe to our news letter</h4>
              <div>
                <form action="post">
                  <div className="form-group my-2">
                    <input type="email" name="email" placeholder="Email Address" className="form-control" />
                  </div>
                  <button className="btn btn-lg btn-outline-light w-100">Subscribe Now</button>
                </form>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-12">
            <div>
              <h4>Technical Support</h4>
              <a href="/">support@randomizer.com</a> <br />
              <a href="/">info@randomizer.com</a>
              <hr />
              <a href="/">Vedio Traning</a>
            </div>
          </div>
        </div>
        <p className="text-center my-2">&copy; 2022 Randomizer. All Rights Reserved.</p>
      </div>
    </Wrap>
  )
}
export default Footer;

const Wrap = styled.div `
  .container-fluid{
    background: #133d61c2;
    padding:15px 10px;
    color:#fff;

    ul{
      list-style:none;
    }
    a{
      text-decoration:none;
      color:#fff;
    }
  }

`;