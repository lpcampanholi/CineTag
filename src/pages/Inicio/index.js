import { useEffect, useState } from "react";
import Banner from "components/Banner";
import Card from "components/Card";
import Titulo from "components/Titulo";
import styled from "./Inicio.module.css";

function Inicio() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetch("https://my-json-server.typicode.com/lpcampanholi/cinetag-api/videos")
      .then(resposta => resposta.json())
      .then(dados => {
        setVideos(dados);
      });
  }, []);

  return (
    <>
      <Banner imagem="home" />
      <Titulo>
        <h1>Um lugar para guardar seus vídeos e filmes</h1>
      </Titulo>
      <section className={styled.container}>
        {videos.map(video =>
          <Card
            key={video.id}
            {...video}
          />)}
      </section>
    </>
  );
};

export default Inicio;
