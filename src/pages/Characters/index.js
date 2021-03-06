import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import Container from "@material-ui/core/Container";
import Icon from "@material-ui/core/Icon";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "250px",
  },
  media: {
    height: 500,
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

function Characters() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [likes, setLikes] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    getAllCharacters();
  }, []);

  useEffect(() => {
    setLikes(JSON.parse(localStorage.getItem("likes")) || []);
  }, [characters]);

  useEffect(() => {
    localStorage.setItem("likes", JSON.stringify(likes));
  }, [likes]);

  const getAllCharacters = () => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_ENDPOINT}/characters/all`)
      .then((response) => {
        setCharacters(response.data);
        setLoading(false);
        setError(false);
      })
      .catch((error) => {
        setLoading(false);
        setError(true);
        console.log(error);
      });
  };

  const toggleLike = (id) => {
    console.log("id", id);
    if (likes.includes(id)) {
      setLikes(likes.filter((like) => like !== id));
    } else {
      setLikes([...likes, id]);
    }
  };

  return (
    <div>
      <h1>
        <Link href="/" to="/">
          Breaking Bad App
        </Link>
      </h1>
      <h4>
        Appli React utilisant l'API Breaking Bad, permettant de consulter des
        informations sur un ou plusieurs personnages de la série
      </h4>
      <Container maxWidth="lg" className="container">
        <Grid container spacing={1}>
          {characters &&
            characters.map((character, index) => (
              <Grid
                item
                lg={3}
                sm={4}
                xs={12}
                spacing={3}
                key={index}
                style={{ marginBottom: "20px" }}
              >
                <Link
                  href={`/character/${character.char_id}`}
                  to={`/character/${character.char_id}`}
                >
                  <Card className={classes.root}>
                    <CardHeader
                      action={
                        <IconButton aria-label="settings">
                          <MoreVertIcon />
                        </IconButton>
                      }
                      title={
                        character.name.length > 15
                          ? `${character.name.slice(0, 15)}...`
                          : character.name
                      }
                      subheader={
                        character.portrayed.length > 15
                          ? `${character.portrayed.slice(0, 15)}...`
                          : character.portrayed
                      }
                    />
                    <CardMedia
                      className={classes.media}
                      image={character.img}
                      title="Paella dish"
                    />
                    <CardContent>
                      {character.occupation.slice(0, 1).map((occupation) => (
                        <Typography
                          variant="body2"
                          color="textSecondary"
                          component="p"
                        >
                          {occupation}
                        </Typography>
                      ))}
                    </CardContent>
                    <CardActions disableSpacing>
                      <IconButton aria-label="add to favorites">
                        <FavoriteIcon
                          color={
                            !likes.includes(character.char_id)
                              ? ""
                              : "secondary"
                          }
                          onClick={() => toggleLike(character.char_id)}
                        />
                      </IconButton>
                    </CardActions>
                  </Card>
                </Link>
              </Grid>
            ))}
        </Grid>
        {loading && (
          <div className="loading">
            <Icon className="loading-icon" color="secondary">
              autorenew
            </Icon>
          </div>
        )}
        {error && (
          <div className="error">
            <div className="error-text">
              <p>Une erreur est survenue lors du chargement des données</p>
            </div>
            <div className="error-button">
              <Button
                variant="contained"
                color="secondary"
                startIcon={<CloudUploadIcon />}
              >
                Réessayer
              </Button>
            </div>
          </div>
        )}
      </Container>
    </div>
  );
}

export default Characters;
