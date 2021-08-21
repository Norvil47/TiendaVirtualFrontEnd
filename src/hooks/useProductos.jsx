import { useState } from "react";
import ApiTienda from "../api/ApiTienda";

export const useProducto = () => {
  const [isLoading, setIsLoading] = useState(true);

  const getProductos = async (idcategoria,fn) => {
    setIsLoading(true);
    await ApiTienda.get("/Producto?idcategoria="+idcategoria)
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
    getProductos,
  };
};
