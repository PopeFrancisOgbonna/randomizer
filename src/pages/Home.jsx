import React from 'react';
import styled from "styled-components";
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import images from '../components/util/img';



const Home = () => {

  return(
    <Wraper>
      <NavBar />
      <div className='container-fluid'>
        <div className="card mb-3" >
          <div className="row g-0">
            <div className="col-md-7 h-body">
              <div className="card-body p-md-5 p-sm-0">
                <h1 className="card-title">Do what <br/> You Do Best!</h1>
                <p className="card-text mt-4">
                  Feel confident conducting your digital exams with testing software made by 
                  teachers who understand the realities of the classroom. 
                  Intuitive to use and trusted by teachers like you since 2015,  
                  <span className='text-warning ms-1'>Randomizer</span> equips you with all the power and function you need to create exams 
                  for your students, your way.
                </p>
                <button className="btn btn-lg btn-outline-light">Get Started Today</button>
              </div>
            </div>
            <div className="col-md-5">
              <img src={images.banner} className="img-fluid rounded-start banner" alt="..."/>
            </div>
          </div>
        </div>
        <div className="cards-ad">
          <div className='text-center p-3 my-card'>
            <img src={images.icon1} className='img-fluid mt-2' alt="ad-icons" />
            <div>
              <h4 className="my-3">Everything you need</h4>
              <p>
                Create comprehensive exams with powerful tools 
                that are easy to use and quick to apply.
              </p>
            </div>
          </div>
          <div className='text-center p-3 my-card'>
            <img src={images.icon2} className='img-fluid mt-2' alt="ad-icons" />
            <div>
              <h4 className="my-3">Make it Simple</h4>
              <p>
                Conduct exams with confidence and control thanks to our intuitive 
                software that simplifies technical complexity.
              </p>
            </div>
          </div>
          <div className='text-center p-3 my-card'>
            <img src={images.icon} className='img-fluid mt-2' alt="ad-icons" />
            <div>
              <h4 className="my-3">Empower Every Student</h4>
              <p>
                Customize exams to empower each student’s individual needs 
                and let their knowledge shine.
              </p>
            </div>
          </div>
        </div>
        <div className="testimony-div">
          <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src={images.slide1} className="d-block w-100" alt="slide-pix"/>
                <div className="carousel-caption d-none d-md-block">
                  <h5>First slide label</h5>
                  <p>Some representative placeholder content for the first slide.</p>
                </div>
              </div>
              <div className="carousel-item">
                <img src={images.slide2} className="d-block w-100" alt="slide-pix"/>
                <div className="carousel-caption d-none d-md-block">
                  <h5>Second slide label</h5>
                  <p>Some representative placeholder content for the second slide.</p>
                </div>
              </div>
              <div className="carousel-item">
                <img src={images.slide3} className="d-block w-100" alt="slide-pix"/>
                <div className="carousel-caption d-none d-md-block">
                  <h5>Third slide label</h5>
                  <p>Some representative placeholder content for the third slide.</p>
                </div>
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
        <div className="text-center">
          <img className='my-4' src={images.clients} alt='clients'/>
        </div>
        <Footer />
      </div>
    </Wraper>
  )
}
export default Home;

const Wraper = styled.div `
  .h-body{
    background: #133d61c2  !important;
    color: #fff;
    height:auto;

    .card-text{
      font-size:28px;
      line-height:1.3;
      @media screen and (max-width:480px){
        font-size:18px;
      }
    }
    
    .btn{
      padding: 10px 45px;
      font-size:28px;
      font-weight:700;
      @media screen and (max-width:480px){
        font-size:20px;
      }
    }

  }
  .banner{
    height:100%;
    width:auto;
  }
  .cards-ad{
    display: flex;
    align-items: center;
    justify-content:space-between;
    padding:2% 4%;

    @media screen and (max-width:689px){
      flex-wrap: wrap;
    }

    .my-card{
      margin:10px 15px;
      padding:15px 5px;
      height:300px;
      transition: all 1.5s ease-out;
      box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px;

      @media screen and (max-width:768px){

      }
    }
    .my-card:hover{
      background:#133d61c2;
      color:#fff;
      border-radius:10px;
      transform:scale(1.1);
    }
  }
  .testimony-div{
    background:#9ea1c327;
    margin:5% 0 3% 0;
    img{
      max-width:45%;
      height:auto;
      margin:0 auto;
      border-radius:2%;
    }
  }
`;