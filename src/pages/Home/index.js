import React from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";

function Home() {
  return (
    <>
      <h1>
        <Link href="/" to="/">
          Breaking Bad App
        </Link>
      </h1>
      <h4>
        Appli React utilisant l'API Breaking Bad, permettant de consulter des
        informations sur un ou plusieurs personnages de la série
      </h4>
      <div className="home-message">
        <Button variant="contained" color="secondary">
          <Link href="/characters" to="/characters">
            Consulter tous les personnages
          </Link>
        </Button>
      </div>
    </>
  );
}

export default Home;
