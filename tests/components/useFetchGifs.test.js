import { renderHook,waitFor } from "@testing-library/react";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

describe("Pruebas en useFetchGifs", () => {

  test("Debe devolver el estado inicial", () => {
    const { result } = renderHook(() => useFetchGifs("One Punch"));

    console.log(result);

    const { images, isLoading } = result.current;
    expect(images.length).toBe(0);
    expect(isLoading).toBeTruthy();
  });

  test("Debe devolver un array de imágenes y isLoading en false", async() => {
    const { result } = renderHook(() => useFetchGifs("One Punch"));

    //evaluamos un hook cuando cambia su estado inicial
    await waitFor(
        ()=>expect(result.current.images.length).toBeGreaterThan(0)
    )

    const {images,isLoading}=result.current;

    expect(images.length).toBeGreaterThan(0);
    expect(isLoading).toBeFalsy();
  });
});
