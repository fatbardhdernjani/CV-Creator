import React from "react";  // Importimi i modulit React
import "../../assets/styles/Form.css";  // Importimi i stilizimit CSS për komponentën Form
import PersonalData from "./PersonalData";  // Importimi i komponentës PersonalData
import Experience from "./Experience";  // Importimi i komponentës Experience
import Education from "./Education";  // Importimi i komponentës Education
import Contact from "./Contact";  // Importimi i komponentës Contact
import FormHeader from "./formHeader";  // Importimi i komponentës FormHeader

const Form = () => {  // Deklarimi i komponentës Form si funksion arrow
  return (
    <>  {/* Shkurtimi i përmbajtjes së komponentës në një fragment */}
      <main className="form_main">  {/* Div-i për përmbajtjen kryesore të formës */}
        <FormHeader />  {/* Përfshirja e komponentës FormHeader për kokën e formës */}
        <PersonalData />  {/* Përfshirja e komponentës PersonalData për të dhënat personale */}
        <Experience />  {/* Përfshirja e komponentës Experience për përvojën profesionale */}
        <Education />  {/* Përfshirja e komponentës Education për formimin */}
        <Contact />  {/* Përfshirja e komponentës Contact për të dhënat kontaktuese */}
      </main>
    </>
  );
};

export default Form;  // Exportimi i komponentës Form si komponentë fillestare

// Komponenta Form është përgjegjëse për paraqitjen e formës së plotë për krijimin e CV-së.
// Ajo përfshin komponentët FormHeader, PersonalData, Experience, Education dhe Contact për të lejuar përdoruesin të shënojë dhe të plotësojë të dhënat për CV-në e tyre.
// Përdorimi i një fragmenti për mbështetjen e shumë elementeve të nivelit të parë në JSX përmban gjithashtu një div ose një element të ngjashëm të mbuluar.
