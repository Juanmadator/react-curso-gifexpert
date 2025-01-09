import { getGifs } from "../helpers/getGifs";
import { useState, useEffect } from "react";

//esto es un hook , una función que devuelve algo
export const useFetchGifs = (category) => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  //espera una función que no sea async
  //se llama una sola vez al cargar el componente
  useEffect(() => {
    //llamamos a la funcion asincrona getGifs que obtiene los gifs
    //los guardamos en newImages y le seteamos ese valor con el useState de images

    getGifs(category).then((newImages) => {
      setImages(newImages);
      //una vez hemos cargado las imagenes, ponemos que deje de cargar
      setIsLoading(false);
    });
  }, []);

  return {
    images,
    isLoading,
  };
};
