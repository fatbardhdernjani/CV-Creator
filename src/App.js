import React from "react";  // Importimi i modulit React
import "./App.css";  // Importimi i stilizimit CSS per komponenten App
import Form from "./components/format/Form";  // Importimi i komponentes Form nga direktoria format
import ModeliCV from "./components/modeli/ModeliCV";  // Importimi i komponentes CV nga direktoria modeli
import "@fortawesome/fontawesome-free/css/all.css";  // Importimi i ikonave nga Font Awesome
import { DataProvider } from "./components/format/DataContext";  // Importimi i DataProvider nga DataContext

const App = () => {  // Deklarimi i komponentes App si funksion arrow
  return (  // Kthimi i JSX i permbajtjes se komponentes App
    <div className="container">  {/* Div-i kryesor me klasen "container" */}
      <DataProvider>  {/* DataProvider komponenta e ofruar nga DataContext */}
        <Form />  {/* Komponenta Form */}
        <ModeliCV />  {/* Komponenta CV */}
      </DataProvider>
    </div>
  );
};

export default App;  // Exportimi i komponentes App si komponente fillestare

// Komponenta App është një komponentë fillimore që përmban një div kryesor me klasën "container". 
// Brenda div-it, ka dy komponenta të tjera: Form dhe CV, të mbështetura nga DataProvider për të furnizuar të dhëna.
// Kjo komponentë është pika hyrëse për aplikacionin React dhe përfshihet në përbërjen e tij. 

