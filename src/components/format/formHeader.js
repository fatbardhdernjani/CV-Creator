import React from "react"; 
import "../../assets/styles/formHeader.css"; 
import { useData } from "./DataContext"; 

const FormHeader = () => {  
  const { dispatch } = useData(); 

  const handleDownloadPDF = () => { 
    dispatch({ type: "DOWNLOAD_PDF", payload: true });
  };

  return (
    <div className="formHeader"> 
      <div> 
        <h1 className="title">CV Creator</h1>
        <div className="buttons">
          <button 
            className="button_save button" 
            id="button_save" 
            onClick={handleDownloadPDF} 
          >
            <i className="fa-solid fa-download"></i> 
            Ruaj CV në PDF
          </button>
        </div>
      </div>
    </div>
  );
};

export default FormHeader; 