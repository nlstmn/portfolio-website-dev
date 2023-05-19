import axios from 'axios';
import {useEffect, useState} from "react";

const About = () => {

  const [apiResponse, setApiResponse] = useState({});

  useEffect(()=>{
    axios.get('https://api.kristinaven.com/api/about', {
      headers:{
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`
      }
    })
        .then(response => {
          setApiResponse(response.data.data[0].attributes);
        })
        .catch(error => {
          console.error(error);
        });
  },[]);

  return (
    <div className="tonni_tm_section" id="about">
      <div className="tonni_tm_about">
        <div className="container">
          <div className="about_inner">
            <div className="left">
              <div className="left_inner">
                <div className="year">
                  <h3>{apiResponse.yearsOfExperienceNumber}</h3>
                  <span className="rounded">
                  </span>
                </div>
                <div className="experience">
                  <h3>{apiResponse.yearsOfExperienceSign}</h3>
                  <p>{apiResponse.yearsOfExperienceText}</p>
                  <span className="shape">
                    <img src="img/about/dots.png" alt="" />
                  </span>
                  <span className="circle_shape">
                    <img className="svg" src="img/svg/icon1.svg" alt="" />
                  </span>
                </div>
              </div>
            </div>
            <div className="right">
              <div className="title">
                <span>{apiResponse.experiencePlaceholder1}</span>
                <h3>{apiResponse.experiencePlaceholder2}</h3>
              </div>
              <div className="text">
                <p>
                  {apiResponse.experiencePlaceholder3}
                </p>
              </div>
              <div className="dodo_progress">
                <ul>
                  <li>
                    <div className="list_inner">
                      <div
                        className="progress_inner skillsInner___"
                        data-value={apiResponse.experienceSkillPercentage1}
                        data-color="#000"
                      >
                        <div className="background">
                          <div className="bar">
                            <div className="bar_in" />
                          </div>
                        </div>
                        <div className="percent">
                          <img
                            className="svg"
                            src="img/svg/photoshop.svg"
                            alt=""
                          />
                          <span className="number">{apiResponse.experienceSkillPercentage1Text}</span>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="list_inner">
                      <div
                        className="progress_inner skillsInner___"
                        data-value={apiResponse.experienceSkillPercentage2}
                        data-color="#0ACF83"
                      >
                        <div className="background">
                          <div className="bar">
                            <div className="bar_in" />
                          </div>
                        </div>
                        <div className="percent">
                          <img className="svg" src="img/svg/xd.svg" alt="" />
                          <span className="number">{apiResponse.experienceSkillPercentage2Text}</span>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="list_inner">
                      <div
                        className="progress_inner skillsInner___"
                        data-value={apiResponse.experienceSkillPercentage3}
                        data-color="#f75023"
                      >
                        <div className="background">
                          <div className="bar">
                            <div className="bar_in" />
                          </div>
                        </div>
                        <div className="percent">
                          <img className="svg" src="img/svg/figma.svg" alt="" />
                          <span className="number">{apiResponse.experienceSkillPercentage3Text}</span>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
