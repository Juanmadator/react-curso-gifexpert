import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../src/components/AddCategory";

describe("Pruebas en <AddCategory/>", () => {
  test("Debe de cambiar el valor del input", () => {
    render(<AddCategory onNewCategory={() => {}} />);

    const input=screen.getByRole('textbox')

    fireEvent.input(input,{target:{value:'Hola Mundo'}})

    expect(input.value).toBe("Hola Mundo"); 

  });

  test("Debe llamar a onNewCategory si el input tiene valor", () => {
    
    const inputValue="Saitama";
    //es un mock, una función simulación
    const onNewCategory=jest.fn()

    render(<AddCategory onNewCategory={onNewCategory} />);

    const input=screen.getByRole('textbox');
    const form=screen.getByRole('form');

    fireEvent.input(input,{target:{value:inputValue}})
    
    //aplicamos el evento del submit al formulario 
    fireEvent.submit(form);


    expect(input.value).toBe("");

    //espero que haya sido llamada
    expect(onNewCategory).toHaveBeenCalled();
    expect(onNewCategory).toHaveBeenCalledTimes(1);
    expect(onNewCategory).toHaveBeenCalledWith(inputValue)


  });

  test("No debe de llamar el onNewCategory si el input esta vacío", () => {
    //comprobar que si no tiene valor y se envia no haga nadaç
    const onNewCategory=jest.fn()

    render(<AddCategory onNewCategory={onNewCategory} />);

    const form=screen.getByRole('form');

    fireEvent.submit(form);

    // expect(onNewCategory).toHaveBeenCalledTimes(0);
    expect(onNewCategory).not.toHaveBeenCalled()

  });
});
