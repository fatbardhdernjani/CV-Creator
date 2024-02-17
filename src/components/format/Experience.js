import React, { useState } from "react";  // Importimi i modulit React dhe hook-ut useState
import "../../assets/styles/Experiences.css";  // Importimi i stilizimit CSS për komponentën Experiences
import { useData } from "./DataContext";  // Përdorimi i hook-ut useData nga DataContext

const Experiences = () => {  // Deklarimi i komponentës Experiences si funksion arrow
  const { dispatch } = useData();  // Deklarimi i dispatch nga hook-u useData

  const [experiences, setExperiences] = useState([  // Deklarimi i state për përvojat profesionale me një përvojë fillestare bosh
    {
      positionExp: "",
      company: "",
      startDate: "",
      endDate: "",
      details: "",
    },
  ]);

  const handleInputChange = (index, e) => {  // Funksioni për ndryshimin e të dhënave të përvojës së caktuar
    const { name, value } = e.target;

    const newExperiences = [...experiences];  // Krijo një kopje të përvojave të tanishme
    newExperiences[index] = {  // Përditëso të dhënat për përvojën e caktuar në indeksin e dhënë
      ...newExperiences[index],
      [name]: value,
    };

    setExperiences(newExperiences);  // Vendos të dhënat e reja të përvojave
  };

  const handleAddExperience = () => {  // Funksioni për shtimin e një përvoje të re
    setExperiences([  // Shto një përvojë të re në listën e përvojave
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

  const handleRemoveExperience = (index) => {  // Funksioni për fshirjen e një përvoje
    const newExperiences = [...experiences];  // Krijo një kopje të përvojave të tanishme
    newExperiences.splice(index, 1);  // Fshij përvojën në indeksin e dhënë
    setExperiences(newExperiences);  // Vendos të dhënat e reja të përvojave
  };

  const handleSubmit = () => {  // Funksioni për dërgimin e të dhënave të përvojave në DataContext
    dispatch({ type: "SET_EXPERIENCE_DATA", payload: experiences });  // Dërgimi i të dhënave të përvojave
  };

  return (  // Kthimi i JSX përmbajtjes së komponentës Experiences
    <div className="menu" id="menu">  {/* Div-i kryesor me klasën "menu" */}
      <div className="title">  {/* Div-i për titullin dhe ikonën */}
        <div>  {/* Div-i për ikonën dhe titullin */}
          <i className="fa-solid fa-wrench"></i>  {/* Ikona për përvojat profesionale */}
          <h2> Eksperienca</h2>  {/* Titulli për përvojat profesionale */}
        </div>
        <div className="icons" id="icons"></div>  {/* Div-i për ikonat opsionale */}
      </div>

      <form  // Forma për të dhënat e përvojave
        onSubmit={(e) => {  // Ngjarja për dërgimin e të dhënave kur forma është paraqitur
          e.preventDefault();  // Parandalimi i veprimeve parazgjedhëse të formës
          handleSubmit();  // Dërgimi i të dhënave të përvojave
        }}
      >
        {experiences.map((experience, index) => (  // Mapimi i përvojave në formë
          <div key={index} className="experience-form Exp_form">  {/* Div-i për secilën përvojë */}
            <input
              type="text"
              name="positionExp"
              className="positionExp"
              placeholder="Pozicioni"
              value={experience.positionExp}
              onChange={(e) => handleInputChange(index, e)}  // Ngjarja për ndryshimin e pozicionit
            />
            <input
              type="text"
              name="company"
              className="company"
              placeholder="Kompania"
              value={experience.company}
              onChange={(e) => handleInputChange(index, e)}  // Ngjarja për ndryshimin e kompanisë
            />
            <label>Data e fillimit</label>  {/* Etiketa për datën e fillimit */}
            <input
              type="date"
              name="startDate"
              className="startDate"
              placeholder="Data e fillimit"
              value={experience.startDate}
              onChange={(e) => handleInputChange(index, e)}  // Ngjarja për ndryshimin e datës së fillimit
            />
            <label>Data e përfundimit</label>  {/* Etiketa për datën e përfundimit */}
            <input
              type="date"
              name="endDate"
              className="endDate"
              placeholder="Data e përfundimit"
              value={experience.endDate}
              onChange={(e) => handleInputChange(index, e)}  // Ngjarja për ndryshimin e datës së përfundimit
            />
            <input
              type="text"
              name="details"
              className="details"
              placeholder="Profesioni juaj kryesor"
              value={experience.details}
              onChange={(e) => handleInputChange(index, e)}  // Ngjarja për ndryshimin e detajeve
            />

            <div className="button-group">  {/* Grupi i butonave */}
              {experiences.length > 1 && (  // Kontrolli për numrin e përvojave përpara se të shfaqet butoni për fshirjen
                <button
                  type="button"
                  onClick={() => handleRemoveExperience(index)}  // Ngjarja për fshirjen e përvojës
                >
                  Fshij  {/* Teksti për butonin e fshirjes */}
                </button>
              )}
            </div>
          </div>
        ))}
        <button type="button" onClick={handleAddExperience}>  {/* Butoni për shtimin e përvojës */}
          +Shto  {/* Teksti për butonin e shtimit */}
        </button>
        <button type="submit" onClick={handleSubmit}>  {/* Butoni për dërgimin e të dhënave */}
          Ruaj  {/* Teksti për butonin e ruajtjes */}
        </button>
      </form>
    </div>
  );
};

export default Experiences;  // Exportimi i komponentës Experiences si komponentë fillestare

// Komponenta Experiences është përgjegjëse për të lejuar përdoruesin të shtojë dhe të modifikojë përvojat e tyre profesionale.
// Ajo përdor hook-un useState për të ruajtur dhe menaxhuar të dhënat e përvojave, si dhe hook-un useData nga DataContext për të dërguar të dhënat e përvojave.
// Përfshin një formë ku përdoruesi mund të shtojë, të fshijë dhe të ndryshojë përvojat e tyre, duke përdorur një listë dinamike të përvojave.
// Butonat "Shto" dhe "Fshij" shfaqen dhe zhduken në varësi të numrit të përvojave të paraqitura.
// Përdorimi i një formë për të dërguar të dhënat e përvojave në momentin që përdoruesi shtyp butonin "Ruaj".
