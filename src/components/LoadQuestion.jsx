import React,{useState} from "react";
import styled from "styled-components";
import Images from "./util/img";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import RingLoader from "react-spinners/RingLoader";
import { css } from "@emotion/react";


const LoadQuestion = () => {

  const [isLoading, setIsLoading] = useState(false);
  const {register, handleSubmit, formState: { errors },} = useForm();
  const loaderStyle = css`
  display: block;
  margin: 0 auto;
  border-color: #0077c6;
  `
  const onSubmit = (data) => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      
      toast.success("Question was successful!",{
        position:toast.POSITION.TOP_RIGHT
      });
    }, 3000);
    console.log(data);
  }

  return(
    <Wrapper>
      <div className="row g-0">
        <div className="col-md-5">
          <img src={Images.banner} className="img-fluid h-100 banner" alt="..."/>
        </div>
        <div className="col-md-7 h-body">
          <div className="card-body p-md-5 p-sm-0">
            <h1 className="ms-2">Question Upload</h1>
            <p className="text-danger ms-2">*Don't Upload Bulk Questions</p>
            <hr />
           <form action="" className="mt-5" onSubmit={handleSubmit(onSubmit)}>
              <div className="row">
                <div className="col-md-6 col-sm-12">
                  <div className="form-group my-2">
                    <input type="text" name="dept" placeholder="Department" className="form-control" 
                      {...register('dept',{required:true})}
                    />
                    {errors.dept && <p className="text-danger">Department is required.</p>}
                  </div>
                  <div className="form-group my-2">
                    <input type="text" name="title" placeholder="Course Title" className="form-control" 
                      {...register('title',{required:true})}
                    />
                    {errors.title && <p className="text-danger">Course Title is required.</p>}
                  </div>
                  <div className="form-group my-2">
                    <textarea name="question" id="" cols="30" rows="5" className="form-control"
                      {...register('question',{required:true})}
                    ></textarea>
                    {errors.question && <p className="text-danger">Question is required.</p>}
                  </div>
                </div>
                <div className="col-md-6 col-sm-12">
                  <div className="form-group my-2">
                    <select name="level" id="" className="form-control"
                      {...register('level',{required:true})}
                    >
                      <option value="">Select Student level</option>
                      <option value="1">100</option>
                      <option value="2">200</option>
                      <option value="3">300</option>
                      <option value="4">400</option>
                      <option value="5">500</option>
                    </select>
                    {errors.level && <p className="text-danger">Student level is required.</p>}
                  </div>
                  <div className="form-group my-2">
                    <input type="text" name="code" placeholder="Course Code" className="form-control" 
                      {...register('code',{required:true})}
                    />
                    {errors.code && <p className="text-danger">Course Code is required.</p>}
                  </div>
                  <div className="row">
                    <div className="col-md-6 col-sm-12">
                      <div className="form-group my-2">
                        <input type="text" name="opt1" placeholder="Option A" className="form-control" 
                          {...register('opt1',{required:true})}
                        />
                        {errors.opt1 && <p className="text-danger">Option A is required.</p>}
                      </div>
                      <div className="form-group my-2">
                        <input type="text" name="opt2" placeholder="Option B" className="form-control" 
                          {...register('opt2',{required:true})}
                        />
                        {errors.opt2 && <p className="text-danger">Option B is required.</p>}
                      </div>
                    </div>
                    <div className="col-md-6 col-sm-12">
                    <div className="form-group my-2">
                        <input type="text" name="opt3" placeholder="Option C" className="form-control" />
                      </div>
                      <div className="form-group my-2">
                        <input type="text" name="opt4" placeholder="Option D" className="form-control" />
                      </div>
                    </div>
                  </div>
                  <div>
                    {isLoading ? <RingLoader size={120} color="#0077b5" css={loaderStyle} />:
                      <button className="btn btn-primary w-100">Upload</button>
                    }
                  </div>
                </div>
              </div>
           </form>
           <ToastContainer />
          </div>
        </div>
      </div>
    </Wrapper>
  )
}
export default LoadQuestion;

const Wrapper = styled.div `
  .card-body{
    @media screen and (max-width:768px){
      width:97%;
    }
    form{
      padding:15px;
    }
  }
`;