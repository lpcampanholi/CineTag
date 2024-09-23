import styles from "./Player.module.css";
import { useParams } from "react-router-dom";
import Titulo from "components/Titulo";
import Banner from "components/Banner";
import NaoEncontrada from "pages/NaoEncontrada";
import { useEffect, useState } from "react";

function Player() {
  const [video, setVideo] = useState(null);
  const paramentros = useParams();

  useEffect(() => {
    fetch(`https://my-json-server.typicode.com/lpcampanholi/cinetag-api/videos?id=${paramentros.id}`)
      .then(resposta => resposta.json())
      .then(dados => {
        setVideo(...dados);
      });
  }, []);

  if (!video) {
    return <NaoEncontrada />
  };

  return (
    <>
      <Banner imagem="player" />
      <Titulo>
        <h1>Player</h1>
      </Titulo>
      <section className={styles.container}>
        <iframe
          src={video.link}
          title={video.titulo}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen>
        </iframe>
      </section>
    </>
  );
};

export default Player;
