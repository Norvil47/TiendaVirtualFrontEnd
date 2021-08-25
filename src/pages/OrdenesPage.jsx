import React, { useState, useEffect, Fragment } from "react";
import DetalleOrden from "../components/DetalleOrden";
import { useOrden } from "../hooks/useOrden";

const OrdenesPage = () => {
  const [ordenes, setOrdenes] = useState([]);
  const { getOrdenes } = useOrden();

  useEffect(() => {
    getOrdenes((data) => {
      console.log(data)
      setOrdenes(data);
    });
  }, []);

  return (
    <div className="row justify-content-center">
      <div className="col-xl-8">
        <div className="row">
          <div className="col-xl-12">
            <h1>Ordenes</h1>
          </div>
          {ordenes.map((item) => (
            <div className="col-xl-12">
              <label htmlFor="">
                USUARIO :{item.orden.dniCliente} - {item.orden.nombresCliente}{" "}
              </label>
            
              <table className="table table-sm table-bordered table-hover">
                <thead className="table-dark">
                  <tr>
                    <td>Producto</td>
                    <td>Precio</td>
                    <td>Cantidad</td>
                  </tr>
                </thead>
                <tbody>
                 <DetalleOrden detalle={item.detalle}/>
                </tbody>
              </table>
            </div>

          
          ))}
        </div>
      </div>
    </div>
  );
};

export default OrdenesPage;
