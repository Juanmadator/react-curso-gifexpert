import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

//con esto hacemos un mock de nuestro custom hook
jest.mock("../../src/hooks/useFetchGifs");


describe('Pruebas en GifGrid', () => { 

    const category="One Punch";
    test('debe mostrar el loading inicialmente', () => { 
  
        useFetchGifs.mockReturnValue({
            images:[],
            isLoading:true
        });

        render(<GifGrid category={category}> </GifGrid>)
        expect(screen.getByText('Loading...'));
        expect(screen.getByText(category));
     })


     test("Mostrar items cuando se cargan las imagenes useFetchGifs", () => {

        const gifs=[
            {
            id:"AbC",
            title:"Cualquier cosa",
            url:"https://localhost/cualquiercosa.jpg",
        },{
            id:"DEF",
            title:"Cualquier cosa2",
            url:"https://localhost/cualquiercosa2.jpg",
        }
    ];
        
        useFetchGifs.mockReturnValue({
            images:gifs,
            isLoading:true
        });

        render(<GifGrid category={category}> </GifGrid>)

        expect(screen.getAllByRole('img').length).toBe(2);
     });


 })