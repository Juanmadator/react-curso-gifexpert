import { getGifs } from "../../src/helpers/getGifs";

describe("Pruebas de getGifs()", () => {
  test("Debe devolver un array de gifs", async () => {
    const gifs = await getGifs("One Punch");


    //de esta manera comprobamos que 
    // al menos el primer elemento sea un gif con las propiedades 
    expect(gifs[0]).toEqual({ 
        id:expect.any(String),
        title:expect.any(String),
        url:expect(any(String))});
  });
});
