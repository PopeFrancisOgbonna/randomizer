import React,{useState} from 'react';
// import Axios from "axios";
import NavBar from '../../components/NavBar';
import styled from 'styled-components';
import images from '../../components/util/img';
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import RingLoader from "react-spinners/RingLoader";
import { css } from "@emotion/react";




const Login = () => {

  const [loading, setLoading] = useState(false);
  const {register, handleSubmit, formState: { errors },} = useForm();
  const loaderStyle = css`
  display: block;
  margin: 0 auto;
  border-color: #0077c6;
  `;

  const onSubmit = (data) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast.success("Wow so easy !")
    }, 3000);
    console.log(data);
  }
  return(
    <Wrapper>
      <NavBar />
      <div className="contatiner">
        <div className="card mb-3" >
          <div className="row g-0">
            <div className="col-md-7 col-sm-12">
              <img src={images.login} className="img-fluid d-block w-100 h-100 " alt="..."/>
            </div>
            <div className="col-md-5 col-sm-12">
              <div className="card-body">
                <div className="text-center d-flex justify-content-center align-items-center">
                  <img src={images.logo} width={80} className="img-fluid" alt="logo"  />
                  <h4 className='ms-2'>Randomizer</h4>
                </div>
                <form className="mt-5" onSubmit={handleSubmit(onSubmit)}>
                  <div className="form-group my-3">
                    <input type="email" name="email" placeholder="Email Address" className="form-control p-2" 
                      {...register('email',{required:true})}
                    />
                    {errors.email && <p className='text-danger'>Email is required.</p>}
                  </div>
                  <div className="form-group my-2">
                    <input type="password" name="password" placeholder="Password" className="form-control p-2" 
                      {...register('password',{required:true})}
                    />
                    {errors.password && <p className='text-danger'>Password is required.</p>}
                  </div>
                  <div className="form-group my-2">
                    <p className="text-danger">Don't have an Account? <a href="/register">Register Here</a></p>
                    { loading? <RingLoader size={120} color='#0077b6' css={loaderStyle}/>:
                      <button className="btn btn-primary w-100">Login</button>
                    }
                  </div>
                </form>
                <ToastContainer />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}
export default Login;

const Wrapper = styled.div `
  .card{
    border:none;
    margin:3% auto;
    max-width:80%;
    box-shadow: rgba(0, 0, 0, 0.1) -4px 19px 35px -6px;
    @media screen and (max-width:7680px){
      max-width:96%;
    }
    a{
      text-decoration:none;
    }

    button{
      font-weight:700;
      font-size:1.8em;
    }
  }
`;