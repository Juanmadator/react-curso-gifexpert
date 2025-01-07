import { useState,useEffect } from "react";
import { AddCategory,GifGrid } from "./components";

export const GifExpertApp = () => {
  //espacio en memoria para gestionar las categorías
  const [categories, setCategories] = useState(["One Punch","Rick & Morty"]);

  const onAddCategory = (newCategory) => {
    //si la categoria no existe la metemos en el array
    if (categories.includes(newCategory)) return;

    setCategories((categories) => [...categories, newCategory]);

  };

  

  return (
    <>
      <h1>GifExpertApp</h1>
      <AddCategory
        onNewCategory={(event) => onAddCategory(event)}
      ></AddCategory>

      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </>
  );
};
