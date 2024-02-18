import React, { useState } from "react"; 
import "../../assets/styles/Experiences.css"; 
import { useData } from "./DataContext"; 

const Experiences = () => { 
  const { dispatch } = useData(); 

  const [experiences, setExperiences] = useState([ 
    {
      positionExp: "",
      company: "",
      startDate: "",
      endDate: "",
      details: "",
    },
  ]);

  const handleInputChange = (index, e) => { 
    const { name, value } = e.target;

    const newExperiences = [...experiences];  
    newExperiences[index] = { 
      ...newExperiences[index],
      [name]: value,
    };

    setExperiences(newExperiences); 
  };

  const handleAddExperience = () => { 
    setExperiences([ 
      ...experiences,
      {
        positionExp: "",
        company: "",
        startDate: "",
        endDate: "",
        details: "",
      },
    ]);
  };

  const handleRemoveExperience = (index) => { 
    const newExperiences = [...experiences]; 
    newExperiences.splice(index, 1);  
    setExperiences(newExperiences); 
  };

  const handleSubmit = () => { 
    dispatch({ type: "SET_EXPERIENCE_DATA", payload: experiences }); 
  };

  return ( 
    <div className="menu" id="menu"> 
      <div className="title"> 
        <div> 
          <i cl assName="fa-solid fa-wrench"></i> 
          <h2> Eksperienca</h2> 
        </div>
        <div className="icons" id="icons"></div> 
      </div>

      <form 
        onSubmit={(e) => {  
          e.preventDefault();  
          handleSubmit(); 
        }}
      >
        {experiences.map((experience, index) => ( 
          <div key={index} className="experience-form Exp_form">  
            <input
              type="text"
              name="positionExp"
              className="positionExp"
              placeholder="Pozicioni"
              value={experience.positionExp}
              onChange={(e) => handleInputChange(index, e)} 
            />
            <input
              type="text"
              name="company"
              className="company"
              placeholder="Kompania"
              value={experience.company}
              onChange={(e) => handleInputChange(index, e)} 
            />
            <label>Data e fillimit</label> 
            <input
              type="date"
              name="startDate"
              className="startDate"
              placeholder="Data e fillimit"
              value={experience.startDate}
              onChange={(e) => handleInputChange(index, e)}  
            />
            <label>Data e përfundimit</label> 
            <input
              type="date"
              name="endDate"
              className="endDate"
              placeholder="Data e përfundimit"
              value={experience.endDate}
              onChange={(e) => handleInputChange(index, e)}
            />
            <input
              type="text"
              name="details"
              className="details"
              placeholder="Profesioni juaj kryesor"
              value={experience.details}
              onChange={(e) => handleInputChange(index, e)} 
            />

            <div className="button-group"> 
              {experiences.length > 1 && (  
                <button
                  type="button"
                  onClick={() => handleRemoveExperience(index)} 
                >
                  Fshij  
                </button>
              )}
            </div>
          </div>
        ))}
        <button type="button" onClick={handleAddExperience}> 
          +Shto  
        </button>
        <button type="submit" onClick={handleSubmit}> 
          Ruaj 
        </button>
      </form>
    </div>
  );
};

export default Experiences;  
