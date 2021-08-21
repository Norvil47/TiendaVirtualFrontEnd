import { useState } from "react";
import ApiTienda from "../api/ApiTienda";

export const useCategoria = () => {
  const [isLoading, setIsLoading] = useState(true);

  const getCategorias = async (fn) => {
    setIsLoading(true);
    await ApiTienda.get("/Categoria")
      .then((response) => {
        setIsLoading(false);
        fn(response.data);
      })
      .catch((err) => {
        setIsLoading(false);
        alert("Error al leer datos");
      });
  };

  return {
    getCategorias,
  };
};
