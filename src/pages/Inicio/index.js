import Banner from "components/Banner";
import Card from "components/Card";
import Titulo from "components/Titulo";
import filmes from "json/db.json";
import styled from "./Inicio.module.css";

function Inicio() {
  return (
    <>
      <Banner imagem="home" />
      <Titulo>
        <h1>Um lugar para guardar seus vídeos e filmes</h1>
      </Titulo>
      <section className={styled.container}>
        {filmes.map(filme =>
          <Card
            key={filme.id}
            {...filme}
          />)}
      </section>
    </>
  );
};

export default Inicio;
