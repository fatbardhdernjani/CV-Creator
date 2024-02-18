import React from "react"; 
import "./App.css"; 
import Form from "./components/format/Form"; 
import ModeliCV from "./components/modeli/ModeliCV"; 
import "@fortawesome/fontawesome-free/css/all.css"; 
import { DataProvider } from "./components/format/DataContext"; 

const App = () => { 
  return (  
    <div className="container">  
      <DataProvider>  
        <Form /> 
        <ModeliCV />  
      </DataProvider>
    </div>
  );
};

export default App; 

