import React, { useState, useEffect, Fragment } from "react";
import { useCategoria } from "../hooks/useCategoria";
import { useProducto } from "../hooks/useProductos";
import ProductoComponent from "../components/ProductoComponent";
const HomePage = () => {
  const { getCategorias, isLoading } = useCategoria();
  const { getProductos } = useProducto();
  const [categoria, setCategoria] = useState([]);
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    getCategorias((response) => {
      setCategoria(response);
    });
    getProductos(1, (response) => {
        setProductos(response);
    });
  }, []);
  const fnListarproductos = (idcategoria) => {
    getProductos(idcategoria, (response) => {
      setProductos(response);
    });
   
  };
  return (
    <Fragment>
      <div className="row justify-content-center">
        <div className="col-xl-2">
          <h3>Categorias</h3>
          <ul className="list-group">
            {categoria.map((item) => (
              <li
                key={item.idcategoria}
                className="list-group-item"
                onClick={() => fnListarproductos(item.idcategoria)}
              >
                <a href="#">{item.descripcion}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="col-xl-10">
          <div className="row">           
            {productos.map((item) => (
              <div className="col-xl-4">
                <ProductoComponent producto={item} key={item.idproducto} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default HomePage;
