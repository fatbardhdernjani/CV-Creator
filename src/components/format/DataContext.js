import { createContext, useContext, useReducer } from "react";  // Importimi i funksioneve të nevojshme nga React

const DataContext = createContext();  // Krijimi i një context për të ndarë të dhënat në komponentë të ndryshëm

export const DataProvider = ({ children }) => {  // Krijimi i komponentit DataProvider për të furnizuar të dhënat për komponentët fëmijë
  const initialState = {  // Deklarimi i gjendjes fillestare
    userData: {  // Të dhënat e përdoruesit
      email: "",
      phone: "",
      address: "",
      link: "",
    },
    personalData: {  // Të dhënat personale
      firstName: "",
      lastName: "",
      profileTitle: "",
      description: "",
      file: null,
      imageUrl: "",
      nationality: "",
      sexe: "",
      language: "",
    },
    experienceData: {  // Të dhënat e përvojës
      positionExp: "",
      company: "",
      startDate: "",
      endDate: "",
      details: "",
    },
    educationData: {  // Të dhënat e edukimit
      school: "",
      degree: "",
      startDate: "",
      endDate: "",
    },
  };

  const reducer = (state, action) => {  // Reduktori për menaxhimin e veprimeve të ndryshimit të gjendjes
    switch (action.type) {
      case "SET_PERSONAL_DATA":  // Veprimi për vendosjen e të dhënave personale
        return { ...state, personalData: action.payload };
      case "SET_EXPERIENCE_DATA":  // Veprimi për vendosjen e të dhënave të përvojës
        return { ...state, experienceData: action.payload };
      case "SET_EDUCATION_DATA":  // Veprimi për vendosjen e të dhënave të edukimit
        return { ...state, educationData: action.payload };
      case "SET_USER_DATA":  // Veprimi për vendosjen e të dhënave të përdoruesit
        return { ...state, userData: action.payload };
      case "DOWNLOAD_PDF":  // Veprimi për shkarkimin e PDF
        return { ...state, downloadPDF: action.payload };
      default:  // Rasti për ndryshimet e tjera që nuk kuptohen
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);  // Përdorimi i hook-ut useReducer për menaxhimin e gjendjes së aplikacionit

  return (  // Kthimi i JSX përmbajtjes së komponentit DataProvider
    <DataContext.Provider value={{ state, dispatch }}>  {/* Përcaktimi i vlerave të disponueshme në context */}
      {children}  {/* Renderimi i komponentëve fëmijë brenda DataProvider */}
    </DataContext.Provider>
  );
};

export const useData = () => {  // Krijimi i një hook-i të përdorur për të qasur dhe modifikuar të dhënat në komponentët fëmijë
  const context = useContext(DataContext);  // Përdorimi i hook-it useContext për të qasur context-in
  if (!context) {  // Kontrolli nëse context nuk ekziston
    throw new Error("useData must be used within a DataProvider");  // Kthimi i një gabimi nëse hook-u përdoret jashtë komponentit DataProvider
  }
  return context;  // Kthimi i kontekstit për përdorim në komponentët fëmijë
};


// Komponenta DataProvider është përgjegjëse për furnizimin dhe menaxhimin e të dhënave në të gjithë aplikacionin. Ajo përdor createContext për të krijuar një context dhe useReducer për të menaxhuar veprimet dhe ndryshimet në gjendjen globale. Gjendja fillestare përfshin të dhëna për përdoruesin, të dhëna personale, përvojën, dhe edukimin. Reduktori i përdorur përmban raste për veprimet specifike të ndryshimit të të dhënave. Komponenta gjithashtu eksporton një hook të quajtur useData, që lejon komponentët fëmijë të qasen dhe të modifikojnë të dhënat në context. Nëse hook-u përdoret jashtë komponentit DataProvider, do të shfaqet një gabim.

