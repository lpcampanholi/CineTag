import Banner from "components/Banner";
import Titulo from "components/Titulo";
import favoritos from "../../json/db.json";
import Card from "components/Card";

function Favoritos() {
  return (
    <>
      <Banner imagem="favoritos" />
      <Titulo>Meus Favoritos</Titulo>
      {favoritos.map(favorito => <Card />)}
    </>
  );
};

export default Favoritos;
