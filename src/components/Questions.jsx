import React,{useState} from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import RingLoader from "react-spinners/RingLoader";
import { css } from "@emotion/react";


const Questions = () => {

  const [isLoading, setIsLoading] = useState(false);
  const [show, setShow] = useState(false);
  const {register, handleSubmit, formState: { errors },} = useForm();
  const loaderStyle = css`
  display: block;
  margin: 0 auto;
  border-color: #0077c6;
  `
  const onSubmit = (data) => {
    setIsLoading(true);
    setShow(false);
    setTimeout(() => {
      setIsLoading(false);
      setShow(true);
      toast.success("Question was successfuly Generated!",{
        position:toast.POSITION.TOP_RIGHT
      });
    }, 3000);
    console.log(data);
  }

  const exam =[{
    department:'Computer Science',
    course:'Basic Programming',
    code:'csc 101',
    level:100,
    question:"What is programming?",
    option1:"A",
    option2:"A1",
    option3:"A2",
    option4:"A3",
  },
  {
    department:'Computer Science',
    course:'Basic Programming',
    code:'csc 101',
    level:100,
    question:"What is programming?",
    option1:"A",
    option2:"A1",
    option3:"A2",
    option4:"A3",
  },
  {
    department:'Computer Science',
    course:'Basic Programming',
    code:'csc 101',
    level:100,
    question:"What is programming?",
    option1:"A",
    option2:"A1",
    option3:"A2",
    option4:"A3",
  },
]

  const headers = {"s/n":'', Question:'', Options:''};

  let tableHeader = () => {
    let header = Object.keys(headers);
    return header.map((key, index) => {
      return <th key={index}>{key.toUpperCase()}</th>
    })
  }

  let renderTable = (data) => {
    return data.map((exam, index) => {
      return<tr key={exam.id}>
        <td>{++index}</td>
        <td>{exam.question}</td>
        <td>
          <label htmlFor={`answer_${index}`} className="me-2">
            <input type="radio" name={`answer_${index}`}/>{exam.option1}
          </label>
          <label htmlFor={`answer_${index}`} className="me-2">
            <input type="radio" name={`answer_${index}`}/>{exam.option2}
          </label>
          <label htmlFor={`answer_${index}`} className="me-2">
            <input type="radio" name={`answer_${index}`}/>{exam.option3}
          </label>
          <label htmlFor={`answer_${index}`}>
            <input type="radio" name={`answer_${index}`}/>{exam.option4}
          </label>
          
        </td>
      </tr>
    })
  };

  return(
    <Wrap>
      <div>
        <div className="wrapper-div mx-auto my-5 shadow-lg p-5">
          <form action="" onSubmit={handleSubmit(onSubmit)}>
            <div className="row">
              <div className="col-md-6 col-sm-12">
                <div className="form-group my-3">
                  <input type="text" name="title" placeholder="Course Title"className="form-control"
                    {...register('title',{required:true})}
                  />
                  {errors.title && <p className="text-danger">Course Title is required.</p>}
                </div>
                <div className="form-group my-3">
                  <input type="text" name="code" placeholder="Course Code" className="form-control"
                    {...register('code',{required:true})}
                  />
                  {errors.code && <p className="text-danger">Course Code is required.</p>}
                </div>
              </div>
              <div className="col-md-6 col-sm-12">
                <div className="form-group my-3">
                  <input type="text" name="dept" placeholder="Department" className="form-control"
                    {...register('dept',{required:true})}
                  />
                  {errors.dept && <p className="text-danger">Department is required.</p>}
                </div>
                <div className="form-group my-3">
                  <select name="level"  className="form-control" 
                    {...register('level',{required:true})}
                  >
                    <option value="1" >100</option>
                    <option value="2">200</option>
                    <option value="3">300</option>
                    <option value="4">400</option>
                    <option value="5">500</option>
                  </select>
                  {errors.level && <p className="text-danger">Level is required.</p>}
                </div>
              </div>
            </div>
            {isLoading ? <RingLoader size={120} color="#0077b5" css={loaderStyle} />:
              <button className="form-control btn btn-primary">Generate Questions</button>
            }
          </form>
          <ToastContainer />
        </div>
        {show === true &&
          <div className="container mt-5">
            <div className="text-center">
              <hr />
              <h4>Exam Questions for {exam[0].department} Department</h4>
              <p className="lead text-secondary">Course: {exam[0].department} | Course Code: {exam[0].code} | Level: {exam[0].level}</p>
              <p>Instructions: Attempt all question</p>
            </div>
            <div className="table-container">
              <table className="table table-striped">
                <thead className="table-dark">
                  <tr>
                    {tableHeader()}
                  </tr>
                </thead>
                <tbody>
                  {renderTable(exam)}
                </tbody>
              </table>
            </div>
          </div>
        }
      </div>
    </Wrap>
  )
}
export default Questions;

const Wrap = styled.div `
  min-height:57vh;
  .wrapper-div{
    width:50%;
    @media screen and (max-width:580px){
      width:95%;
    }
  }
  p.lead{
    color:#087990;
    font-weight:500;
  }
`;