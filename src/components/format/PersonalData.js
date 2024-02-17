import React from "react";  // Importimi i modulit React
import { useState } from "react";  // Importimi i hook-ut useState nga React
import { useData } from "./DataContext";  // Përdorimi i hook-ut useData nga DataContext
import "../../assets/styles/PersonnalData.css";  // Importimi i stilizimit CSS për komponentën PersonnalData

const PersonnalData = () => {  // Deklarimi i komponentës PersonnalData si funksion arrow
  const { dispatch } = useData();  // Deklarimi i dispatch nga hook-u useData

  const [formData, setFormData] = useState({  // Deklarimi i state për të dhënat e formës
    firstName: "",
    lastName: "",
    profileTitle: "",
    description: "",
    file: null,
    imageUrl: "",
    nationality: "",
    sexe: "",
    language: "",
  });

  const handleInputChange = (e) => {  // Funksioni për ndryshimin e të dhënave të formës
    const { name, value, type } = e.target;

    if (type === "file") {  // Nëse është zgjedhur një skedar
      const file = e.target.files[0];
      setFormData((prevData) => ({  // Përditësimi i state me informacione për skedarin dhe imazhin
        ...prevData,
        file,
      }));

      // Përdorimi i FileReader për të marrë URL-në e imazhit
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData((prevData) => ({
          ...prevData,
          imageUrl: reader.result,
        }));
      };

      if (file) {
        reader.readAsDataURL(file);  // Leximi i skedarit për të krijuar URL-në
      }
    } else {
      setFormData((prevData) => ({  // Përditësimi i state për të dhënat e tjera të formës
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e) => {  // Funksioni për dërgimin e të dhënave të formës
    e.preventDefault();  // Parandalimi i paraqitjes së formës
    dispatch({ type: "SET_PERSONAL_DATA", payload: formData });  // Dërgimi i të dhënave të formës në DataContext
  };

  return (  // Kthimi i JSX përmbajtjes së komponentës PersonnalData
    <div className="menu" id="menu">  {/* Div-i kryesor me klasën "menu" */}
      <div className="title">  {/* Div-i për titullin */}
        <div>  {/* Div-i për ikonën dhe titullin */}
          <i className="fa-solid fa-id-card"></i>  {/* Ikona për të dhënat personale */}
          <h2>Të dhënat Personale</h2>  {/* Titulli për të dhënat personale */}
        </div>
      </div>

      <div className="menu_container" id="menu_container">  {/* Div-i për kontenierin e formës */}
        <form>  {/* Forma për të dhënat personale */}
          <div>  {/* Div-i për emrin dhe mbiemrin */}
            <input
              type="text"
              name="firstName"
              className="firstName"
              id="firstName"
              placeholder="Emri"
              onChange={handleInputChange}
              value={formData.firstName}
            />
            <input
              type="text"
              name="lastName"
              className="lastName"
              id="lastName"
              placeholder="Mbiemri"
              onChange={handleInputChange}
              value={formData.lastName}
            />
          </div>
          <input
            type="text"
            name="profileTitle"
            className="profileTitle"
            id="profileTitle"
            placeholder="Titulli i profilit: Zhvilluesi i Uebit "
            onChange={handleInputChange}
            value={formData.profileTitle}
          />
          <input
            type="file"
            name="file"
            className="file"
            id="file"
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="description"
            className="description"
            id="description"
            placeholder="Trego diçka për veten"
            onChange={handleInputChange}
            value={formData.description}
          />
          <input
            type="text"
            name="nationality"
            className="nationaly"
            id="nationaly"
            placeholder="Kombësia juaj"
            onChange={handleInputChange}
            value={formData.nationality}
          />
          <input
            type="text"
            name="sexe"
            className="sexe"
            id="sexe"
            placeholder="Gjinia"
            onChange={handleInputChange}
            value={formData.sexe}
          />
          <input
            type="text"
            name="language"
            className="language"
            id="language"
            placeholder="Gjuha"
            onChange={handleInputChange}
            value={formData.language}
          />
        </form>
        <button type="submit" className="save_user" onClick={handleSubmit}>  {/* Butoni për të ruajtur të dhënat */}
          Ruaj
        </button>
      </div>
    </div>
  );
};

export default PersonnalData;  // Exportimi i komponentës PersonnalData si komponentë fillestare

// Komponenta PersonnalData është përgjegjëse për paraqitjen dhe mbajtjen e të dhënave personale të një personi.
// Ajo përdor hook-un useState për të mbajtur gjendjen lokale të formës dhe hook-un useData për të dërguar të dhënat në DataContext.
// Përveç kësaj, përdorimi i hook-ut useRef dhe ngjarjeve të ndryshimit për të ndryshuar statusin e formës dhe për të manipuluar skedarët.
// Butoni "Ruaj" dërgon të dhënat e formës në DataContext përmes një veprimi të ndërhyrjes së përdoruesit.
