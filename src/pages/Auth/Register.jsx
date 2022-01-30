import React from "react";
import styled from "styled-components";
import NavBar from "../../components/NavBar";
import images from "../../components/util/img";



const Register = () => {

  return(
    <Wrapper>
      <NavBar />
      <div className="container">
        <div className="card mb-3" >
          <div className="row g-0">
            <div className="col-md-7 col-sm-12">
              <img src={images.banner} className="img-fluid " alt="..."/>
            </div>
            <div className="col-md-5 col-sm-12">
              <div className="card-body">
                <div className="text-center">
                  <img src={images.logo} className="img-fluid" alt="logo"  />
                  <h4>Randomizer</h4>
                </div>
                <form className="">
                  <div className="form-group my-2">
                    <input type="text" name="name" placeholder="Full Name" className="text form-control" />
                  </div>
                  <div className="form-group my-2">
                    <input type="email" name="email" placeholder="Email Address" className="form-control" />
                  </div>
                  <div className="form-group my-2">
                    <input type="password" name="password" placeholder="Password" className="form-control" />
                  </div>
                  <div className="form-group my-2">
                    <input type="password" name="confirm-password"  placeholder="Confirm Password" className="form-control" />
                  </div>
                  <div className="form-group my-2">
                    <p className="text-danger">Already have an Account? <a href="/login">Login Here</a></p>
                    <button className="btn btn-primary w-100">SignUp</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}
export default Register;

const Wrapper = styled.div `

`;