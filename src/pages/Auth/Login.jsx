import React from 'react';
// import Axios from "axios";
import NavBar from '../../components/NavBar';
import styled from 'styled-components';
import images from '../../components/util/img';



const Login = () => {

  // let repos = [];
  // let contributors = [];
  // let repoDetails =[]
  // let repoName = "calculator-sample";
  // let contributorName ="mhevery";

  //   //Get All Contributors to a particular Repository
  //   // const getContributors = async (reponame) =>{
  //   //   const res = Axios.get(`https://api.github.com/repos/angular/${reponame}/contributors`)
  
  //   //     const data = res.data;
  //   //     console.log(data);
  //   //     data.forEach(contributor => {
  //   //       const {id, login, contributions, url} = contributor;
  //   //       let details = {id, login, contributions, url};
  //   //       contributors = [...contributors,details];
  //   //     });
  //   //     console.log(contributors);
  //   // } 

  // //Get All Repositories
  // Axios.get("https://api.github.com/orgs/angular/repos")
  //   .then((res) =>{
  //     // const  {id, name,url,contributors_url, visibility, created_at} =res.data;
  //     const data = res.data;
  //     let rep =[];
  //     if(data.length){
  //       console.log(data);
  //       for (let index = 0; index < data.length; index++) {
  //         const element = data[index];
  //         Axios.get(`https://api.github.com/repos/angular/${element.name}/contributors`)
  //         .then(res =>{
  //           console.log(` ${res}`);
            
  //         })
  //         .catch(err =>{
  //           if(err)return;
  //         })
          
  //       }
  //       return;
  //     }
  //     data.forEach(element => {
  //       console.log(element.name)
       
  //       const {id,name,url,contributors_url,visibility,created_at} = element;
  //       rep = {id,name,url,contributors_url,visibility,created_at};
  //       repos = [...repos, rep]
  //     });
  //     console.log(repos);
  //   })
  //   .catch(err => console.log(err));
  //   console.log("ended here")

// return;

//   //Get Repository Details
//   Axios.get(`https://api.github.com/repos/angular/${repoName}`)
//   .then(res => {
//     const data = res.data;
//     console.log(data);
//     const {id,created_at,description,forks_count,visibility, updated_at} = data;
//     let detail = {id,created_at,description,forks_count,visibility, updated_at};
//     repoDetails = [...repoDetails, detail]
//     console.log(repoDetails);
//   }).catch(err =>console.log(err));
  
//   //Contributor Endpoint
//   Axios.get(`https://api.github.com/users/${contributorName}`)
//     .then(res =>{
//       const data =res.data;
//       console.log(data);
//       const {id, login,company,email, bio, public_repos,public_gists,followers,following} =data;
//       const contributorData = {id, login,company,email, bio, public_repos,public_gists,followers,following};
//       console.log(contributorData);
//     }).catch(err => console.log(err));
//     //Contributor Repository Details
//     Axios.get(`https://api.github.com/users/${contributorName}/repos`)
//     .then(res => {
//       const data = res.data;
//       let contributorRepo = [];
//       data.forEach(element => {
//         const {id,name,description,created_at, updated_at,forks_count,visibility} = element;
//         let repo  = {id,name,description,created_at, updated_at,forks_count,visibility};
//         contributorRepo = [...contributorRepo, repo];
//       });
//       console.log(contributorRepo);
//     }).catch(err => console.log(err));

  return(
    <Wrapper>
      <NavBar />
      <div className="contatiner">
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
                    <input type="email" name="email" placeholder="Email Address" className="form-control" />
                  </div>
                  <div className="form-group my-2">
                    <input type="password" name="password" placeholder="Password" className="form-control" />
                  </div>
                  <div className="form-group my-2">
                    <p className="text-danger">Don't have an Account? <a href="/register">Register Here</a></p>
                    <button className="btn btn-primary w-100">Login</button>
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
export default Login;

const Wrapper = styled.div `

`;