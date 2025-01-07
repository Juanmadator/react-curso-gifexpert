import { useState } from "react";

// eslint-disable-next-line react/prop-types
export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState("");

  //destructuring para coger la propiedad target del event
  const onInpuntChange = ({ target }) => {
    //para establecer valores es coinsiderado un método
    setInputValue(target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if(inputValue.trim().length>0){
        // setCategories((categories) => [ ...categories,inputValue]);
        onNewCategory(inputValue.trim())
    }
    //reiniciamos el valor del input
    setInputValue("");
  };

  return (
    <form onSubmit={(event) => onSubmit(event)}>
      <input
        type="text"
        placeholder="Buscar gifs"
        // le damos el valor al input de nuestro hook useState
        value={inputValue}
        onChange={onInpuntChange}
      />
    </form>
  );
};
