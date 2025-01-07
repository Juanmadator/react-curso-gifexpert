import { GiftItem } from "./";
import { useFetchGifs } from "../hooks/useFetchGifs";

// eslint-disable-next-line react/prop-types
export const GifGrid = ({ category }) => {
 
  //como devolvemos un objeto, tenemos que desestructurar las imagenes y el loading
const{images,isLoading} = useFetchGifs(category);




console.log(category)

  return (
    <>

      <h3>{category}</h3>
    {isLoading && <p>Loading...</p>}

      <div className="card-grid">
       {images.map((image)=>(
        <GiftItem
        //muy importante ponerle una key a cada elemento que se recorra
         key={image.id}
         //de esta forma le pasamos todas las propiedades de la imagen
         {...image}
        />
         
       ))}
      </div>
    </>
  );
};
