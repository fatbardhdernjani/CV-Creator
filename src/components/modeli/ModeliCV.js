import React, { useRef } from "react";  
import "../../assets/styles/CV.css";  
import { useData } from "../format/DataContext"; 
import defaultImage from "../../assets/images/defaultUser.png"; 
import html2pdf from "html2pdf.js"; 
import { useEffect } from "react"; 

const CV = () => { 
  const { state, dispatch } = useData();  
  const {
    userData,
    personalData,
    experienceData,
    educationData,
    downloadPDF,
  } = state;  

  const imageUrl = personalData.imageUrl || defaultImage; 

  const cvRef = useRef();  

  useEffect(() => {  
    if (downloadPDF) {  
      handleDownloadPDF();  

      dispatch({ type: "DOWNLOAD_PDF", payload: false }); 
    }
  }, [downloadPDF, dispatch]); 

  const handleDownloadPDF = () => {  
    const content = cvRef.current;  

    const pdfOptions = {  
      margin: 10,
      filename: "CV.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
    };

    html2pdf(content, pdfOptions); 

    dispatch({ type: "DOWNLOAD_PDF", payload: true });  
  };

  return ( 
    <div className="cv_container" ref={cvRef}>  
      <div className="header">  
        <div className="picture_div">
          <img src={imageUrl} alt="" className="picture" />
        </div>
        <div className="right"> 
          <h1 className="user_name"> 
            {`${personalData.firstName} ${personalData.lastName}`}
          </h1>
          <span className="post"> {`${personalData.profileTitle}`} </span> 
          <div className="contact_infos">  
            <span className="email">
              {" "}
              <i className="fa fa-envelope" aria-hidden="true"></i>
              {`${userData.email}`}{" "}
            </span>
            <span className="address">  
              <i className="fa fa-map-marker" aria-hidden="true"></i>
              {`${userData.address}`}
            </span>
            <span className="phone"> 
              <i className="fa fa-phone" aria-hidden="true"></i>{" "}
              {`${userData.phone}`}{" "}
            </span>
            <span className="link"> 
              <i className="fa fa-link" aria-hidden="true"></i>{" "}
              {`${userData.link}`}{" "}
            </span>
          </div>
        </div>
      </div>
      <main className="cv_main">  
        <div className="left_cv_main">  
          <div className="profil">  
            <h3>Profili juaj</h3>
            <p className="desc"> {`${personalData.description}`} </p>
          </div>
          <div className="formation">
            <h3>Formimi</h3>
            {educationData && ( 
              <>
                <h4> {educationData.degree} </h4>  
                <div>
                  <span className=""> {educationData.school} </span> 
                  <p className="date">  
                    {`nga ${educationData.startDate} tek ${educationData.endDate}`}
                  </p>
                </div>
              </>
            )}
          </div>
          <div className="experience">  
            <h3>Eksperienca Profesionale</h3>
            {Array.isArray(experienceData) && experienceData.length > 0 ? (  
              experienceData.map((experience, index) => ( 
                <div key={index}>
                  <h4>{experience.positionExp}</h4>  
                  <div>
                    <span className="company_name">{experience.company}</span>  
                    <p className="date"> 
                      {`from ${experience.startDate} to ${experience.endDate}`}
                    </p>
                  </div>
                  <p>{experience.details}</p> 
                </div>
              ))
            ) : (
              <p></p>  
            )}
          </div>
        </div>
        <div className="right_cv_main">  
          <div className="hr"></div>  
          <div className="right_cv_main_container">  
            <div>  
              <h3>Të dhënat personale</h3>
              <>
                <span>Kombësia</span>  
                <p> {personalData.nationality} </p>
              </>
              <>
                <span>Gjinia</span>  
                <p> {personalData.sexe} </p>
              </>
              <>
                <span>Gjuha</span> 
                {personalData.language && (  
                  <ul>
                    <li> {personalData.language} </li>
                  </ul>
                )}
              </>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CV;  