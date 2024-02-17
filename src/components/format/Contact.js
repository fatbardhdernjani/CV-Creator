import React from "react";  // Importimi i modulit React
import { useState } from "react";  // Importimi i useState hook nga React
import { useData } from "./DataContext";  // Importimi i hook-ut useData nga DataContext

const Contact = () => {  // Deklarimi i komponentës Contact si funksion arrow
  const { dispatch } = useData();  // Deklarimi i dispatch nga hook-u useData për dërgimin e të dhënave në DataContext

  const [formData, setFormData] = useState({  // Deklarimi i një gjendje lokale për të mbajtur të dhënat e formës
    address: "",  // Adresa
    email: "",  // Email-i
    phone: "",  // Numri i telefonit
    link: "",  // Linku i punës
  });

  const handleInputChange = (e) => {  // Funksioni për menaxhimin e ndryshimeve në inpute
    const { name, value } = e.target;  // Marrja e emrit dhe vlerës së inputit të ndryshuar
    setFormData((prevData) => ({  // Përditësimi i gjendjes së formës së dhënë
      ...prevData,
      [name]: value,  // Përditësimi i vlerës së inputit të ndryshuar
    }));
  };

  const handleSubmit = (e) => {  // Funksioni për dërgimin e të dhënave të formës
    e.preventDefault();  // Parandalimi i sjelljes së parazgjedhur të formës
    dispatch({ type: "SET_USER_DATA", payload: formData });  // Dërgimi i të dhënave të formës në DataContext
  };

  return (  // Kthimi i JSX përmbajtjes së komponentit Contact
    <div className="menu">  {/* Div-i kryesor me klasën "menu" */}
      <div className="title">  {/* Div-i për titullin dhe ikonën */}
        <div>  {/* Div-i për ikonën dhe titullin */}
          <i className="fa-solid fa-address-book"></i>  {/* Ikona për kontaktet */}
          <h2>Kontakt</h2>  {/* Titulli për kontaktet */}
        </div>
        <div className="icons" id="icons"></div>  {/* Div-i për ikonat opsionale */}
      </div>

      <form>  {/* Forma për të dhënat e kontaktit */}
        <input
          type="text"
          name="address"
          className="address"
          id="address"
          placeholder="Adresa"
          value={formData.address}
          onChange={handleInputChange}  // Event handler për ndryshimet në adresë
        />
        <div>
          <input
            type="email"
            name="email"
            id="email"
            className="email"
            placeholder="E-mail"
            value={formData.email}
            onChange={handleInputChange}  // Event handler për ndryshimet në email
          />
          <input
            type="text"
            name="phone"
            id="phone"
            className="phone"
            placeholder="Numri i telefonit tuaj"
            value={formData.phone}
            onChange={handleInputChange}  // Event handler për ndryshimet në numrin e telefonit
          />
        </div>
        <input
          type="url"
          name="link"
          className="link"
          id="link"
          placeholder="Link i punës tuaj"
          value={formData.link}
          onChange={handleInputChange}  // Event handler për ndryshimet në linkun e punës
        />
        <button type="submit" onClick={handleSubmit}>  {/* Butoni për dërgimin e të dhënave */}
          Ruaj
        </button>
      </form>
    </div>
  );
};

export default Contact;  // Exportimi i komponentës Contact si komponentë fillestare


// Komponenta Contact është përgjegjëse për të lejuar përdoruesin të futë dhe të modifikojë të dhënat e kontaktit të tyre.
// Ajo përdor hook-un useData nga DataContext për të dërguar të dhënat në context. Përfshin një formë ku përdoruesi mund të shtypë adresën, email-in, numrin e telefonit dhe linkun e punës së tyre.
// Pas dërgimit të formës, të dhënat e shtypura dërgohen në DataContext për ruajtje.
