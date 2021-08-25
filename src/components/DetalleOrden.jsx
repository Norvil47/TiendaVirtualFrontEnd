import React, { useState, useEffect, Fragment } from "react";
import { useOrden } from "../hooks/useOrden";

const DetalleOrden = (props) => {
  const { detalle } = props;
  console.log(detalle);
  useEffect(() => {}, []);

  return (
    <Fragment>
      {detalle.map((item2) => (
        <tr key="item2.producto">
          <td>{item2.producto}</td>
          <td>{item2.precio.toFixed(2)}</td>
          <td>{item2.cantidad}</td>
        </tr>
      ))}
    </Fragment>
  );
};

export default DetalleOrden;
