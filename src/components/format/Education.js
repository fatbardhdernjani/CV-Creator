import React from "react";  // Importimi i modulit React
import "../../assets/styles/Education.css";  // Importimi i stilizimit CSS për komponentën Education
import { useData } from "./DataContext";  // Përdorimi i hook-ut useData nga DataContext
import { useForm } from "react-hook-form";  // Përdorimi i hook-ut useForm nga biblioteka react-hook-form

const Education = () => {  // Deklarimi i komponentës Education si funksion arrow
  const { dispatch } = useData();  // Deklarimi i dispatch nga hook-u useData
  const { register, handleSubmit } = useForm({  // Përdorimi i hook-ut useForm për menaxhimin e formës
    school: "",  // Vlera fillestare për shkollën/universitetin
    degree: "",  // Vlera fillestare për gradën akademike
    startDate: "",  // Vlera fillestare për datën e fillimit të edukimit
    endDate: "",  // Vlera fillestare për datën e përfundimit të edukimit
  });

  const onSubmit = (data) => {  // Funksioni për dërgimin e të dhënave të edukimit
    dispatch({ type: "SET_EDUCATION_DATA", payload: data });  // Dërgimi i të dhënave të edukimit në DataContext
  };

  return (  // Kthimi i JSX përmbajtjes së komponentës Education
    <div className="menu">  {/* Div-i kryesor me klasën "menu" */}
      <div className="title">  {/* Div-i për titullin dhe ikonën */}
        <div>  {/* Div-i për ikonën dhe titullin */}
          <i className="fa-solid fa-graduation-cap"></i>  {/* Ikona për edukimin */}
          <h2>Edukimi</h2>  {/* Titulli për edukimin */}
        </div>
        <div className="icons" id="icons"></div>  {/* Div-i për ikonat opsionale */}
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>  {/* Forma për të dhënat e edukimit */}
        <input
          type="text"
          name="school"
          className="school"
          id="school"
          placeholder="Shkolla/Universiteti"
          {...register("school")}  // Regjistrimi i inputit për shkollën/universitetin
        />
        <input
          type="text"
          name="degree"
          className="degree"
          id="degree"
          placeholder="Dega"
          {...register("degree")}  // Regjistrimi i inputit për gradën akademike
        />
        <label> Data e fillimit</label>  {/* Etiketa për datën e fillimit */}
        <input
          type="date"
          name="startDate"
          className="startDate"
          id="tartDate"
          {...register("startDate")}  // Regjistrimi i inputit për datën e fillimit të edukimit
        />
        <label> Data e përfundimit</label>  {/* Etiketa për datën e përfundimit */}
        <input
          type="date"
          name="endDate"
          className="endDate"
          id="endDate"
          {...register("endDate")}  // Regjistrimi i inputit për datën e përfundimit të edukimit
        />
        <button type="submit">Ruaj</button>  {/* Butoni për dërgimin e të dhënave */}
      </form>
    </div>
  );
};

export default Education;  // Exportimi i komponentës Education si komponentë fillestare

// Komponenta Education është përgjegjëse për të lejuar përdoruesin të shtojë dhe të modifikojë të dhënat e edukimit të tyre.
// Ajo përdor hook-un useForm nga biblioteka react-hook-form për menaxhimin e formës së dhënë dhe hook-un useData nga DataContext për të dërguar të dhënat e edukimit.
// Përfshin një formë ku përdoruesi mund të shënojë shkollën/universitetin, degën, datën e fillimit dhe datën e përfundimit të edukimit të tyre.
// Pas dërgimit të formës, të dhënat e shtypura dërgohen në DataContext për ruajtje.
