import { FavoritosContext } from "contexts/Favoritos";
import { useContext } from "react";

export function useFavoritoContext() {
  const {favoritos, setFavoritos} = useContext(FavoritosContext);

  function adicionarFavorito(novoFavorito) {
    const favoritoEncontrado = favoritos.some(item => item.id === novoFavorito.id);
    let novaLista = [...favoritos];
    if(!favoritoEncontrado) {
      novaLista.push(novoFavorito);
      return setFavoritos(novaLista);
    };
    novaLista = favoritos.filter(fav => fav.id !== novoFavorito.id);
    return setFavoritos(novaLista);
  };

  return {
    favoritos,
    adicionarFavorito
  }
};
