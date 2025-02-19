import "./App.scss";
import React from "react";
import { Button } from "./components";

const App: React.FC = () => {
  return (
    <div>
      <h1>Mitt Projekt</h1>
      <p>MittKomponentBibliotek</p>
      <Button
        color="green"
        size="large"
        onClick={() => alert("Knapp klickad!")}
      >
        Klicka på mig
      </Button>
      
    </div>
  );
};

export default App;
