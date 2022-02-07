import React,{useState} from "react";
import styled from "styled-components";
import NavBar from "../../components/NavBar";
import images from "../../components/util/img";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import RingLoader from "react-spinners/RingLoader";
import { css } from "@emotion/react";


const Register = () => {

  const [loading, setLoading] = useState(false);
  const {register, handleSubmit, formState: { errors },} = useForm();
  const loaderStyle = css`
  display: block;
  margin: 0 auto;
  border-color: #0077c6;
  `
  const onSubmit = (data) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      (data.password !== data.confirmPassword)?
        toast.error("Password do not match",{
          position:toast.POSITION.TOP_LEFT
        }):
      toast.success("Congratulation your registration was successful!",{
        position:toast.POSITION.TOP_LEFT
      });
    }, 3000);
    console.log(data);
  }

  return(
    <Wrapper>
      <NavBar />
      <div className="container">
        <div className="card mb-3" >
          <div className="row g-0">
            <div className="col-md-5 col-sm-12">
              <div className="card-body">
                <div className="text-center d-flex justify-content-center align-items-center">
                  <img src={images.logo} width={80} className="img-fluid" alt="logo"  />
                  <h4 className="ms-2">Randomizer</h4>
                </div>
                <form className="mt-5" onSubmit={handleSubmit(onSubmit)}>
                  <div className="form-group my-2">
                    <input type="text" name="name" placeholder="Full Name" className="form-control p-2" 
                      {...register('name',{required:true})}
                    />
                     {errors.name && <p className="text-danger">Name field is required.</p>}
                  </div>
                  <div className="form-group my-2">
                    <input type="email" name="email" placeholder="Email Address" className="form-control p-2" 
                      {...register('email',{required:true})}
                    />
                     {errors.email && <p className="text-danger">Email field is required.</p>}
                  </div>
                  <div className="form-group my-2">
                    <input type="password" name="password" placeholder="Password" className="form-control p-2" 
                      {...register('password',{required:true})}
                    />
                     {errors.password && <p className="text-danger">Password field is required.</p>}
                  </div>
                  <div className="form-group my-2">
                    <input type="password" name="confirmPassword"  placeholder="Confirm Password" className="form-control p-2" 
                      {...register('confirmPassword',{required:true})}
                    />
                    {errors.confirmPassword && <p className="text-danger">Confirm Password field is required.</p>}
                  </div>
                  <div className="form-group my-1">
                    <p className="text-danger">Already have an Account? <a href="/login">Login Here</a></p>
                    {loading ? <RingLoader size={120} color="#0077b5" css={loaderStyle} />:
                      <button className="btn btn-primary w-100">SignUp</button>
                    }
                  </div>
                </form>
                <ToastContainer />
              </div>
            </div>
            <div className="col-md-7 col-sm-12">
              <img src={images.login} className="img-fluid d-block h-100 w-100 " alt="..."/>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}
export default Register;

const Wrapper = styled.div `
  .card{
    margin:3% auto;
    border:none;
    max-width:80%;
    box-shadow: rgba(0, 0, 0, 0.1) -4px 19px 35px -6px;
    @media screen and (max-width:7680px){
      max-width:97%;
    }

    a{
      text-decoration:none;
    }
    button{
      font-weight:700;
      font-size:1.4em;
    }
  }

`;