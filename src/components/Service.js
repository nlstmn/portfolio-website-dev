import axios from 'axios';
import {useEffect, useState} from "react";

const Service = () => {

  const [apiResponse, setApiResponse] = useState({});

  useEffect(()=>{
    axios.get('http://154.49.139.114:1337/api/services', {
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
    <div className="tonni_tm_section" id="service">
      <div className="tonni_tm_service">
        <div className="container bigger">
          <div className="service_in">
            <div className="container">
              <div className="tonni_tm_main_title" data-type="flex">
                <div className="title">
                  <span>{apiResponse.servicesPlaceholder1}</span>
                  <h3>{apiResponse.servicesPlaceholder2}</h3>
                </div>
                <div className="subtitle">
                  <p>
                    {apiResponse.servicesPlaceholder3}
                  </p>
                </div>
              </div>
              <div className="service_list">
                <ul>
                  <li className="wow fadeInUp" data-wow-duration="1s">
                    <div className="list_inner">
                      <img className="svg" src="img/svg/layer.svg" alt="" />
                      <div className="title">
                        <h3>{apiResponse.servicesExperience1Title}</h3>
                        <span>{apiResponse.servicesExperience1Place}</span>
                      </div>
                      <div className="text">
                        <p>
                          {apiResponse.servicesExperience1Description}
                        </p>
                      </div>
                    </div>
                  </li>
                  <li
                    className="wow fadeInUp"
                    data-wow-duration="1s"
                    data-wow-delay="0.2s"
                  >
                    <div className="list_inner">
                      <img className="svg" src="img/svg/design.svg" alt="" />
                      <div className="title">
                        <h3>{apiResponse.servicesExperience2Title}</h3>
                        <span>{apiResponse.servicesExperience2Place}</span>
                      </div>
                      <div className="text">
                        <p>
                          {apiResponse.servicesExperience2Description}
                        </p>
                      </div>
                    </div>
                  </li>
                  <li
                    className="wow fadeInUp"
                    data-wow-duration="1s"
                    data-wow-delay="0.4s"
                  >
                    <div className="list_inner">
                      <img className="svg" src="img/svg/marketing.svg" alt="" />
                      <div className="title">
                        <h3>{apiResponse.servicesExperience3Title}</h3>
                        <span>{apiResponse.servicesExperience3Place}</span>
                      </div>
                      <div className="text">
                        <p>
                          {apiResponse.servicesExperience3Description}
                        </p>
                      </div>
                    </div>
                  </li>
                  <li
                    className="wow fadeInUp"
                    data-wow-duration="1s"
                    data-wow-delay="0.6s"
                  >
                    <div className="list_inner">
                      <img className="svg" src="img/svg/apps.svg" alt="" />
                      <div className="title">
                        <h3>{apiResponse.servicesExperience4Title}</h3>
                        <span>{apiResponse.servicesExperience4Place}</span>
                      </div>
                      <div className="text">
                        <p>
                          {apiResponse.servicesExperience4Description}
                        </p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <span className="shape">
              <img className="svg" src="img/svg/vector4.svg" alt="" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Service;
