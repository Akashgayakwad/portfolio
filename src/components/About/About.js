// import React from "react";
import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";

function About() {

  const [CF, setCF] = useState(null);
  const [CC, setCC] = useState(null);
  const [LC, setLC] = useState(null);

  const [isLoading, setIsLoading] = useState(true);

  const codeforces_url = "https://competitive-coding-api.herokuapp.com/api/codeforces/akashgayakwad123";
  const codechef_url = "https://competitive-coding-api.herokuapp.com/api/codechef/akashgayakwad";
  const leetcode_url= "https://competitive-coding-api.herokuapp.com/api/leetcode/akashgayakwad";
  useEffect(() => {
    if(isLoading)
    {
      //codeforces
      fetch(
        codeforces_url,
        {
          method: "GET",
          headers: new Headers({
          })
        }
      )
        .then(res => res.json())
        .then(response => {
          setCF(response);
          //codechef
          fetch(
            codechef_url,
            {
              method: "GET",
              headers: new Headers({
              })
            }
          )
            .then(res => res.json())
            .then(response => {
              setCC(response);
              //leetcode
              fetch(
                leetcode_url,
                {
                  method: "GET",
                  headers: new Headers({
                  })
                }
              )
                .then(res => res.json())
                .then(response => {
                  setLC(response);
                  console.log(response);
                  setIsLoading(false);
                })
                .catch(error => console.log(error));
            })
            .catch(error => console.log(error));
        })
        .catch(error => console.log(error));
    }
  }, [CF]);

  // if(isLoading)
  //   return (
  //     <div>Loading</div>
  //   );
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Know Who <strong className="purple">I'M</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>
        <h1 className="project-heading">
           <strong className="purple">Coding </strong>Profiles
        </h1>
        <p className="text-light">(All the data shown below are latest)</p>
        <h3 className="card-subtitle mu-4 mb-2">
           <strong className="purple"><u>CodeForces</u></strong>
        </h3>
        {isLoading?<h5>Loading Info ...</h5>:
        <table className="table table-hover table-responsive-sm"
        style={{border: "1.7px solid rgba(200, 137, 230, 0.637)!important"}}
        >
          <tr>
            <th className="purple">User Name</th>
            <th className="purple">Rating</th>
            <th className="purple">Rank</th>
            <th className="purple">Max Rating</th>
            <th className="purple">Max Rank</th>
            
          </tr>
          <tr>
            <th className="text-light">{CF['username']}</th>
            <th className="text-light">{CF['rating']}</th>
            <th className="text-light">{CF['rank']}</th>
            <th className="text-light">{CF['max rating']}</th>
            <th className="glow">{CF['max rank']}</th>
          </tr>
        </table>
        }
        <br/>

        <h3 className="card-subtitle mb-2">
           <strong className="purple"><u>CodeChef</u></strong>
        </h3>
        {isLoading?<h5>Loading Info ...</h5>:
        <table className="table table-hover table-responsive-sm"
        style={{border: "1.7px solid rgba(200, 137, 230, 0.637)!important"}}
        >
          <tr>
            <th className="purple">User Name</th>
            <th className="purple">Stars</th>
            <th className="purple">Rating</th>
            <th className="purple">Max Rating</th>
            <th className="purple">World Rank</th>
            
          </tr>
          <tr>
            <th className="text-light">{CC['user_details']['username']}</th>
            <th className="glow">{CC['stars']}</th>
            <th className="text-light">{CC['rating']}</th>
            <th className="text-light">{CC['highest_rating']}</th>
            <th className="text-light">{CC['global_rank']}</th>
          </tr>
        </table>
        }
        <br/>


        <h3 className="card-subtitle mb-2">
          <u>
           <strong className="purple"><u>LeetCode</u></strong>
           </u>
        </h3>
        {isLoading?<h5>Loading Info ...</h5>:
        <table className="table table-hover table-responsive-sm"
        style={{border: "1.7px solid rgba(200, 137, 230, 0.637)!important"}}
        >
          <thead>
            <th colspan={1} className="purple">-</th>
            <th colspan={4} className="purple">Questions Solved</th>
            <th colspan={1} className="purple">-</th>
          </thead>
          <thead>
            <th colspan={1} className="purple">User Name</th>
            <th className="purple">Easy</th>
            <th className="purple">Medium</th>
            <th className="purple">Hard</th>
            <th className="purple">Total</th>
            <th colspan={1} className="purple">Acceptance Rate</th>
          </thead>
          <tr>
            <th className="text-light">akashgayakwad</th>
            <th className="text-light">{LC['easy_questions_solved']}</th>
            <th className="text-light">{LC['medium_questions_solved']}</th>
            <th className="text-light">{LC['hard_questions_solved']}</th>
            <th className="glow">{LC['total_problems_solved']}</th>
            <th className="text-light">{LC['acceptance_rate']}</th>
          </tr>
        </table>
        }
        <br/>
        <h1 className="project-heading mb-3">
          Professional <strong className="purple">Skillset </strong>
        </h1>
        
        <h3 className="h3 mb-2">
          <strong className="purple"><u>Web-Frontend</u></strong>
        </h3>
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
          <Techstack iconName="devicon-html5-plain" name="HTML5" />
          <Techstack iconName="devicon-css3-plain" name="CSS3" />
          <Techstack iconName="devicon-javascript-plain " name="Javascript"/>
          <Techstack iconName="devicon-jquery-plain " name="JQuery"/>
          <Techstack iconName="devicon-bootstrap-plain" name="Bootstrap"/>
          <Techstack iconName="devicon-materialui-plain" name="Material UI"/>
          <Techstack iconName="devicon-react-original" name="React Js"/>
          <Techstack iconName="devicon-redux-original" name="Redux"/>
          <Techstack iconName="devicon-wordpress-plain" name="Wordpress"/>
        </Row>

        <h3 className="h3 mb-2">
          <strong className="purple"><u>Web-Backend</u></strong>
        </h3>
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
          <Techstack iconName="devicon-php-plain" name="Php" />
          <Techstack iconName="devicon-laravel-plain" name="Laravel" />
          <Techstack iconName="devicon-nodejs-plain-wordmark " name="Node Js"/>
          <Techstack iconName="devicon-express-original-wordmark" name="Express Js" />
          <Techstack iconName="devicon-flask-original-wordmark" name="Flask" />
          <Techstack iconName="devicon-django-plain" name="Django" />
        </Row>
        
        <h3 className="h3 mb-2">
          <strong className="purple"><u>Databases</u></strong>
        </h3>
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
          <Techstack iconName="devicon-mysql-plain-wordmark" name="MySQL" />
          <Techstack iconName="devicon-postgresql-plain" name="Postgresql" />
          <Techstack iconName="devicon-mongodb-plain" name="Mongo DB"/>
          <Techstack iconName="devicon-redis-plain" name="Redis" />
        </Row>
        
        <h3 className="h3 mb-2">
          <strong className="purple"><u>Mobile Development</u></strong>
        </h3>
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
          <Techstack iconName="devicon-flutter-plain" name="Flutter" />
          <Techstack iconName="devicon-react-original" name="React Native" />
        </Row>
        
        <h3 className="h3 mb-2">
          <strong className="purple"><u>Programming Langauges</u></strong>
        </h3>
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>

          <Techstack iconName="devicon-cplusplus-line" name="C++" />
          <Techstack iconName="devicon-python-plain" name="Python" />
          <Techstack iconName="devicon-javascript-plain " name="Javascript"/>
        </Row>
        
        <h1 className="project-heading">
          <strong className="purple">Tools</strong> I use
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
          
          <Techstack iconName="devicon-amazonwebservices-original" name="AWS"/>
          <Techstack iconName="devicon-apache-plain" name="Apache"/>
          <Techstack iconName="devicon-linux-plain" name="Linux"/>
          <Techstack iconName="devicon-chrome-plain" name="Chrome"/>
          <Techstack iconName="devicon-docker-plain" name="Docker"/>
          <Techstack iconName="cib-visual-studio-code" name="VS Code"/>
          <Techstack iconName="cib-anaconda" name="Anaconda"/>
          <Techstack iconName="cib-postman" name="Postman"/>
          <Techstack iconName="devicon-git-plain-wordmark" name="Git"/>
          <Techstack iconName="devicon-github-original" name="Github"/>
          <Techstack iconName="devicon-slack-plain" name="Slack"/>
          <Techstack iconName="devicon-npm-original-wordmark" name="npm"/>
          <Techstack iconName="cib-heroku" name="heroku"/>
        </Row>
        <Github />
      </Container>
    </Container>
  );
}

export default About;
