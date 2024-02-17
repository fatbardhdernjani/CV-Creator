import React from "react";  // Importimi i modulit React
import "../../assets/styles/formHeader.css";  // Importimi i stilizimit CSS për komponentën FormHeader
import { useData } from "./DataContext";  // Përdorimi i hook-ut useData nga DataContext

const FormHeader = () => {  // Deklarimi i komponentës FormHeader si funksion arrow
  const { dispatch } = useData();  // Deklarimi i dispatch nga hook-u useData

  const handleDownloadPDF = () => {  // Funksioni për dërgimin e komandës për shkarkimin e PDF-së
    dispatch({ type: "DOWNLOAD_PDF", payload: true });  // Dërgimi i komandës për shkarkimin e PDF-së
  };

  return (  // Kthimi i JSX përmbajtjes së komponentës FormHeader
    <div className="formHeader">  {/* Div-i kryesor me klasën "formHeader" */}
      <div>  {/* Div-i për titullin dhe butonin */}
        <h1 className="title">CV Creator</h1>  {/* Titulli i aplikacionit */}
        <div className="buttons">  {/* Div-i për butonin */}
          <button  // Butoni për shkarkimin e PDF-së
            className="button_save button"  // Klasa për stilizimin e butonit
            id="button_save"  // ID për identifikimin e butonit
            onClick={handleDownloadPDF}  // Ngjarja për shkarkimin e PDF-së
          >
            <i className="fa-solid fa-download"></i>  {/* Ikona e butonit për shkarkimin e PDF-së */}
            Ruaj CV në PDF  {/* Teksti për butonin */}
          </button>
        </div>
      </div>
    </div>
  );
};

export default FormHeader;  // Exportimi i komponentës FormHeader si komponentë fillestare

// Komponenta FormHeader është përgjegjëse për paraqitjen e kokës së formës, duke përfshirë titullin dhe butonin për shkarkimin e PDF-së.
// Përdorimi i hook-ut useData nga DataContext për të dërguar komandën për shkarkimin e PDF-së në përputhje me ngjarjen e klikimit të butonit.
// Butoni "Ruaj CV në PDF" nënkupton dërgimin e një komande për shkarkimin e PDF-së në formën e një ngjarjeje të përdoruesit.
