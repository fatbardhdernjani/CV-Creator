import React from "react"; 
import "../../assets/styles/Form.css"; 
import PersonalData from "./PersonalData"; 
import Experience from "./Experience";  
import Education from "./Education"; 
import Contact from "./Contact"; 
import FormHeader from "./formHeader";  

const Form = () => {  
  return (
    <> 
      <main className="form_main"> 
        <FormHeader /> 
        <PersonalData /> 
        <Experience />
        <Education /> 
        <Contact /> 
      </main>
    </>
  );
};

export default Form; 