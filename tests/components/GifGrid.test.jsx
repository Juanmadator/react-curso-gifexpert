import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components";

describe('Pruebas en GifGrid', () => { 

    const category="One Punch";
    test('debe mostrar el loading inicialmente', () => { 
  
        render(<GifGrid category={category}> </GifGrid>)
        screen.debug()
        expect(screen.getByText('Loading...'));
        expect(screen.getByText(category));
     })


     test("Mostrar items cuando se cargan las imagenes useFetchGifs", () => {
        
     });
 })