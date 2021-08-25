import { useState } from "react";
import ApiTienda from "../api/ApiTienda";

export const useOrden = () => {


  const postOrden = async (obj,fn) => {
    
    await ApiTienda.post("/Orden",{orden:obj.orden,detalle:obj.detalle})
      .then((response) => {
        fn(response.data);
      })
      .catch((err) => {

        alert("Error al leer datos");
      });
      
  };
  const getOrdenes = async (fn) => {
    
    await ApiTienda.get("/Orden")
      .then((response) => {
        fn(response.data);
      })
      .catch((err) => {

        alert("Error al leer datos");
      });
      
  };

  return {
    postOrden,
    getOrdenes
  };
};
