import React, { useRef } from "react";  // Importimi i modulit React dhe useRef hook
import "../../assets/styles/CV.css";  // Importimi i stilizimit CSS për komponentën CV
import { useData } from "../format/DataContext";  // Përdorimi i hook useData nga DataContext
import defaultImage from "../../assets/images/defaultUser.png";  // Importimi i imazhit parazgjedhur
import html2pdf from "html2pdf.js";  // Importimi i librarise html2pdf
import { useEffect } from "react";  // Importimi i hook useEffect nga React

const CV = () => {  // Deklarimi i komponentës CV si funksion arrow
  const { state, dispatch } = useData();  // Deklarimi i state dhe dispatch nga hooku useData
  const {
    userData,
    personalData,
    experienceData,
    educationData,
    downloadPDF,
  } = state;  // Destrukturimi i të dhënave nga state

  const imageUrl = personalData.imageUrl || defaultImage;  // Përcaktimi i adresës së imazhit

  const cvRef = useRef();  // Krijimi i referencës për komponentën CV

  useEffect(() => {  // Efekti për të kryer veprimet pasi komponenta është renderuar
    if (downloadPDF) {  // Kontrolli për shkarkimin e PDF-së
      handleDownloadPDF();  // Thirrja e funksionit për shkarkimin e PDF-së

      dispatch({ type: "DOWNLOAD_PDF", payload: false });  // Ndryshimi i statusit për shkarkimin e PDF-së
    }
  }, [downloadPDF, dispatch]);  // Ndërmarrja e efektit vetëm në rast të ndryshimit të downloadPDF ose dispatch

  const handleDownloadPDF = () => {  // Funksioni për të shkarkuar PDF-në
    const content = cvRef.current;  // Marrja e përmbajtjes për PDF

    const pdfOptions = {  // Opsionet për krijimin e PDF-së
      margin: 10,
      filename: "CV.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
    };

    html2pdf(content, pdfOptions);  // Krijimi i PDF-së nga përmbajtja dhe opsionet e caktuara

    dispatch({ type: "DOWNLOAD_PDF", payload: true });  // Ndryshimi i statusit për shkarkimin e PDF-së
  };

  return (  // Kthimi i JSX përmbajtjes së komponentës CV
    <div className="cv_container" ref={cvRef}>  {/* Div-i kryesor me klasën "cv_container" dhe referencë */}
      <div className="header">  {/* Div-i për kokën e CV */}
        <div className="picture_div">  {/* Div-i për imazhin e profilit */}
          <img src={imageUrl} alt="" className="picture" />  {/* Imazhi i profilit */}
        </div>
        <div className="right">  {/* Div-i për të dhënat personale të djathta */}
          <h1 className="user_name">  {/* Emri dhe mbiemri */}
            {`${personalData.firstName} ${personalData.lastName}`}
          </h1>
          <span className="post"> {`${personalData.profileTitle}`} </span>  {/* Titulli i profilit */}
          <div className="contact_infos">  {/* Div-i për të dhënat kontaktuese */}
            <span className="email">  {/* Email-i */}
              {" "}
              <i className="fa fa-envelope" aria-hidden="true"></i>
              {`${userData.email}`}{" "}
            </span>
            <span className="address">  {/* Adresa */}
              <i className="fa fa-map-marker" aria-hidden="true"></i>
              {`${userData.address}`}
            </span>
            <span className="phone">  {/* Numri i telefonit */}
              <i className="fa fa-phone" aria-hidden="true"></i>{" "}
              {`${userData.phone}`}{" "}
            </span>
            <span className="link">  {/* Lidhja (URL) */}
              <i className="fa fa-link" aria-hidden="true"></i>{" "}
              {`${userData.link}`}{" "}
            </span>
          </div>
        </div>
      </div>
      <main className="cv_main">  {/* Div-i për përmbajtjen kryesore të CV-së */}
        <div className="left_cv_main">  {/* Div-i për përmbajtjen e majtë të CV-së */}
          <div className="profil">  {/* Div-i për profilin personal */}
            <h3>Profili juaj</h3>
            <p className="desc"> {`${personalData.description}`} </p>
          </div>
          <div className="formation">  {/* Div-i për formimin */}
            <h3>Formimi</h3>
            {educationData && (  // Kontrolli për ekzistencën e të dhënave të arsimit
              <>
                <h4> {educationData.degree} </h4>  {/* Titulli i shkollimit */}
                <div>
                  <span className=""> {educationData.school} </span>  {/* Emri i shkollës */}
                  <p className="date">  {/* Data e fillimit dhe përfundimit */}
                    {`nga ${educationData.startDate} tek ${educationData.endDate}`}
                  </p>
                </div>
              </>
            )}
          </div>
          <div className="experience">  {/* Div-i për eksperiencën profesionale */}
            <h3>Eksperienca Profesionale</h3>
            {Array.isArray(experienceData) && experienceData.length > 0 ? (  // Kontrolli për ekzistencën dhe sasinë e të dhënave të eksperiencës
              experienceData.map((experience, index) => (  // Mapimi i çdo përvoje
                <div key={index}>
                  <h4>{experience.positionExp}</h4>  {/* Pozicioni i punës */}
                  <div>
                    <span className="company_name">{experience.company}</span>  {/* Emri i kompanisë */}
                    <p className="date">  {/* Data e fillimit dhe përfundimit */}
                      {`from ${experience.startDate} to ${experience.endDate}`}
                    </p>
                  </div>
                  <p>{experience.details}</p>  {/* Detajet e përvojës */}
                </div>
              ))
            ) : (
              <p></p>  // Nëse nuk ka përvoja, nuk shfaqet asgjë
            )}
          </div>
        </div>
        <div className="right_cv_main">  {/* Div-i për përmbajtjen e djathtë të CV-së */}
          <div className="hr"></div>  {/* Div-i për vijën ndarëse horizontale */}
          <div className="right_cv_main_container">  {/* Div-i për përmbajtjen e brendshme të CV-së së djathtë */}
            <div>  {/* Div-i për të dhënat personale */}
              <h3>Të dhënat personale</h3>
              <>
                <span>Kombësia</span>  {/* Kombësia */}
                <p> {personalData.nationality} </p>
              </>
              <>
                <span>Gjinia</span>  {/* Gjinia */}
                <p> {personalData.sexe} </p>
              </>
              <>
                <span>Gjuha</span>  {/* Gjuha */}
                {personalData.language && (  // Kontrolli për ekzistencën e gjuhës
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

export default CV;  // Exportimi i komponentës CV si komponentë fillestare


// Komponenta CV përfaqëson CV-në e një personi dhe përmban të dhëna të tij personale, formimin, eksperiencën profesionale etj.
// Përdorimi i hook-ve useRef, useEffect dhe kontekstit të të dhënave për të ndryshuar statusin dhe për të përdorur referenca në kod.
// Përdorimi i shumë komponenteve të vegjël për të përcaktuar pjesët e ndryshme të CV-së, duke përfshirë përvojën profesionale, formimin, dhe të dhënat personale.
// Përdorimi i librarive të jashtme për të ndihmuar në shkarkimin e CV-së në format PDF.
