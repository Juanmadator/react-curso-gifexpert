import { render,screen } from "@testing-library/react";
import { GiftItem } from "../../src/components/GiftItem";

describe('Pruebas en <GiftItem/>', () => { 

    const title="Un titulo";
    const url="https://localhost/algo.jpg";


    test("Debe hacer match con el snapshot", () => {

        const {container}=render(<GiftItem title={title} url={url}></GiftItem>)
        expect(container).toMatchSnapshot();
    });


    test("Debe mostrar la imagen con el url y el alt indicado", () => {
        
        const {container}=render(<GiftItem title={title} url={url}></GiftItem>);

        
        // screen.debug()
        // expect(screen.getByRole('img').src).toBe(url);   
        // expect(screen.getByRole('img').alt).toBe(title);   

        //sabiendo que screen.getByRole('img') es un objeto, podemos desestructurar el objeto y obtener el src y el alt
        const {src,alt}=screen.getByRole('img');
        expect(src).toBe(url);
        expect(alt).toBe(title);
    });

    test("Comprobamos que existe el título en nuestro componente", () => {
        
        render(<GiftItem title={title} url={url}></GiftItem>);
        expect(screen.getByText(title)).toBeTruthy();
    });

    
 })