import { useFavoritoContext } from "hooks/useFavoritos";
import styles from "./Card.module.css";
import iconeFavoritar from "./favoritar.png";
import iconeDesfavoritar from "./desfavoritar.png";
import { Link } from "react-router-dom";

function Card({ id, titulo, capa }) {
  const { favoritos, adicionarFavorito } = useFavoritoContext();
  const ehFavorito = favoritos.some(fav => fav.id === id);
  const icone = ehFavorito ? iconeDesfavoritar : iconeFavoritar;
  return (
    <div className={styles.container}>
      <Link to={`/${id}`} className={styles.link}>
        <img src={capa} alt={titulo} className={styles.capa} />
        <h2>{titulo}</h2>
      </Link>
      <img src={icone} alt="Favoritar filme" className={styles.favoritar} onClick={() => adicionarFavorito({ id, titulo, capa })} />
    </div>
  );
};

export default Card;
