import React, { useState, useEffect, Fragment } from "react";
import { useCategoria } from "../hooks/useCategoria";
import { useProducto } from "../hooks/useProductos";
import ProductoComponent from "../components/ProductoComponent";
import { useOrden } from "../hooks/useOrden";
import { useForm } from "../hooks/useForm";
import { Redirect } from "react-router-dom";

const PagarPage = () => {
  const [carrito, setcarrito] = useState([]);

  const [cliente, handleChange] = useForm({ dni: "", nombres: "" });
  const [total, setTotal] = useState(0);
  const { postOrden } = useOrden();
  const CargarDatos = () => {
    var data = localStorage.getItem("carrito");
    if (data == null || data.trim() == "") {
      localStorage.setItem("carrito", "[]");
      data = "[]";
    }
    data = JSON.parse(data);
    setcarrito(data);
    carrito.map((item) => {
      setTotal(total + item.producto.precio * item.cantidad);
    });
  };
  const guardarOrden = () => {
   
    if (cliente.dni.trim() == "" || cliente.nombres.trim() == "") {
      alert("Complete los campos");
      return;
    }
    var detalle = [];
    carrito.map((item) => {
      detalle.push({
        idproducto: item.producto.idproducto,
        precio: item.producto.precio,
        cantidad: item.cantidad,
      });
    });
    if (detalle.length == 0) {
      alert("No hay items en el carrito");
      return;
    }
    var data = {
      orden: {
        dnicliente: cliente.dni,
        nombres: cliente.nombres,
      },
      detalle: detalle,
    };
    postOrden(data, (response) => {
      if (response.mensaje == "ok") {
        alert("Datos guardados");
        localStorage.setItem("carrito", "[]");
        window.location.reload(true);        
      } else alert(response.mensaje);
    });
  };

  useEffect(() => {
    CargarDatos();
  }, []);

  return (
    <Fragment>
      <div className="row justify-content-center">
        <div className="col-xl-8">
          <table className="table table-sm table-bordered">
            <thead className="thead-dark">
              <tr>
                <th>Producto</th>
                <th className="text-right">Precio</th>
                <th className="text-right">Cantidad</th>
                <th className="text-right">Subtotal</th>
              </tr>
            </thead>
            <tbody>
              {carrito.map((item) => (
                <tr>
                  <td>{item.producto.nombre}</td>
                  <td className="text-right">
                    {item.producto.precio.toFixed(2)}
                  </td>
                  <td className="text-right">{item.cantidad}</td>
                  <td className="text-right">
                    {(item.producto.precio * item.cantidad).toFixed(2)}
                  </td>
                </tr>
              ))}
              <tr>
                <td colSpan="3" className="text-right">
                  Total:
                </td>
                <td className="text-right">{total.toFixed(2)}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="col-xl-8 mt-2">
          <div className="card mt-3">
            <div className="card-body">
              <div className="row justify-content-center">
                <div className="col-xl-4">
                  <label htmlFor="">DNI</label>
                  <input
                    type="text"
                    className="form-control"
                    name="dni"
                    onChange={handleChange}
                    value={cliente.dni}
                  />
                </div>
                <div className="col-xl-8">
                  <label htmlFor="">Nombres</label>
                  <input
                    type="text"
                    className="form-control"
                    name="nombres"
                    onChange={handleChange}
                    value={cliente.nombres}
                  />
                </div>
                <div className="col-xl-4">
                  <button
                    className="mt-4 btn btn-lg btn-success btn-block"
                    onClick={guardarOrden}
                  >
                    PAGAR
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default PagarPage;
