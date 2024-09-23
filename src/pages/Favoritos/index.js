import styled from "./Favoritos.module.css";
import Banner from "components/Banner";
import Titulo from "components/Titulo";
import Card from "components/Card";
import { useFavoritoContext } from "hooks/useFavoritos";

function Favoritos() {
  const { favoritos } = useFavoritoContext();
  return (
    <>
      <Banner imagem="favoritos" />
      <Titulo>
        <h1>Meus favoritos</h1>
      </Titulo>
      <section className={styled.container}>
        {favoritos.map(favorito => <Card key={favorito.id} {...favorito} />)}
      </section>
    </>
  );
};

export default Favoritos;
