import React, { useState, useEffect, Fragment } from "react";

const ProductoComponent = (props) => {
  const { producto } = props;
  const [cantidad, setcantidad] = useState(0);
  const aumentar = () => {
    if (cantidad < producto.stock) setcantidad(cantidad + 1);
  };
  const disminuir = () => {
    if (cantidad > 0) setcantidad(cantidad - 1);
  };
  const fnAgregarCarrito = () => {
    if (cantidad == 0) {
      alert("Ingrese la cantidad");
      return;
    }
    var data = localStorage.getItem("carrito");
    if (data == null || data.trim() == "") {
      localStorage.setItem("carrito", "[]");
      data = "[]";
    }

    data = JSON.parse(data);
    var existe = data.find(
      (item) => item.producto.idproducto == producto.idproducto
    );
    if (existe) {
      data.map(function (item) {
        if (item.producto.idproducto == producto.idproducto) {
          item.cantidad += cantidad;
        }

        return item;
      });
    } else data.push({ producto, cantidad });
    console.log(data);
    localStorage.setItem("carrito", JSON.stringify(data));
  };
  return (
    <Fragment>
      <div className="card" key={producto.idproducto}>
        <img
          src={producto.imagen}
          className="card-img-top"
          height="200"
          width="450"
        />
        <div className="card-body">
          <h5 className="card-title text-center">{producto.nombre}</h5>
          <p className="card-text">{producto.descripcion}</p>
          <br />
          <div className="form-inline">
            <span className="ml-2 mr-2">
              Precio:{" "}
              <span className="font-weight-bold">
                {(producto.precio ?? 0).toFixed(2)}
              </span>
            </span>
            <span className="ml-2 mr-2">
              Stock: <span className="font-weight-bold">{producto.stock}</span>
            </span>
          </div>
          <div className="row">
            <div className="col-xl-3">
              <button className="btn  btn-primary" onClick={aumentar}>
                +{" "}
              </button>
            </div>
            <div className="col-xl-6">
              <input
                type="number"
                className="form-control text-center"
                readOnly
                value={cantidad}
              />
            </div>
            <div className="col-xl-3">
              <button className="btn btn-primary" onClick={disminuir}>
                -{" "}
              </button>
            </div>
            <div className="col-xl-12 text-center mt-4">
              <button className="btn btn-success" onClick={fnAgregarCarrito}>
                AGREGAR AL CARRITO
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ProductoComponent;
