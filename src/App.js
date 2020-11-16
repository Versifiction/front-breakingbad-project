import React, { useEffect, useState } from "react";
import axios from "axios";

import "./App.css";
import {
  Button,
  Card,
  Container,
  Paragraph,
  ParagraphError,
  Section,
  Title,
} from "./style.js";

function App() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    getAllCharacters();
  }, []);

  useEffect(() => {
    console.log("characters ", characters);
  }, [characters]);

  function getAllCharacters() {
    axios
      .get(`${process.env.REACT_APP_BACKEND_ENDPOINT}/characters/all`)
      .then(function (response) {
        setCharacters(response.data);
        setLoading(false);
        setError(false);
      })
      .catch(function (error) {
        setError(true);
        console.log(error);
      });
  }

  return (
    <Section>
      <Title>Breaking Bad App</Title>
      <Paragraph type="text">
        Appli React utilisant l'API Breaking Bad, permettant de consulter des
        informations sur un ou plusieurs personnages de la série
      </Paragraph>
      <Container>
        {characters &&
          characters.map((character, index) => (
            <Card key={index}>
              <a href={`/character/${character.char_id}`}>{character.name}</a>
            </Card>
          ))}
        {loading && <Paragraph>Les données sont en train de charger</Paragraph>}
        {error && (
          <>
            <ParagraphError>
              Une erreur est survenue lors du chargement des données
            </ParagraphError>
            <Button>Réessayer</Button>
          </>
        )}
      </Container>
    </Section>
  );
}

export default App;
