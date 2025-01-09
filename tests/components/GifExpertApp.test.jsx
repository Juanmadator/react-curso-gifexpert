import { render, screen } from "@testing-library/react";
import { GifExpertApp } from "../../src/GifExpertApp";


describe('Test en el componente GifExpertApp', () => { 
    test("El formulario no debe hacer nada si no tiene nada escrito", () => {


        render(<GifExpertApp></GifExpertApp>)
        screen.debug();
    });
 })