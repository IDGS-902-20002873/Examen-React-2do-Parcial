import React, { useEffect, useState } from "react";
import Rating from "./Rating";
import { useParams, Link } from "react-router-dom";
import products from "../products.json";

const ResultsPage = () => {
  const { name } = useParams();
  const [datos, setDatos] = useState([]);
  const [filtro, setFiltro] = useState("");

  const message = (name, datosFiltrados) => {
    if (datosFiltrados.length == 0)
      return (
        <div className="alert alert-danger" role="alert">
          No se encontraron resultados para la búsqueda de:{" "}
          <strong>{`${name}`}</strong>
        </div>
      );
    else if (datosFiltrados.length > 0 && name == undefined) {
      return <h4>Resultados de la búsqueda: {datosFiltrados.length}</h4>;
    } else {
      return (
        <h4>
          Resultados de la búsqueda de <strong>{`${name}`}</strong> :{" "}
          {datosFiltrados.length}
        </h4>
      );
    }
  };
  useEffect(() => {
    const obtenerDatos = async () => {
      try {
        const datosJson = products;
        setDatos(datosJson.products);
      } catch (error) {
        console.error("Error al obtener datos:", error);
      }
    };

    obtenerDatos();
  }, []);

  const datosFiltrados = () => {
    if (name != undefined) {
      return datos.filter((producto) =>
        producto.title.toLowerCase().includes(name.toLowerCase())
      );
    } else {
      return datos;
    }
  };

  const handleInputChange = (nuevoValor) => {
    setFiltro(nuevoValor);
  };

  return (
    <div className="container-fluid">
      <div className="row pt-5">
        <div className="col-md-4">
          <h1 className="bi bi-shop display-5"> Bazar Online</h1>
        </div>
        <div className="col-md-8">
          <div className="input-group">
            <input
              type="text"
              value={filtro}
              onChange={(e) => handleInputChange(e.target.value)}
              className="form-control form-control-lg"
              placeholder="Search something..."
            />
            <Link to={`/product/${filtro}`}>
              <button className="btn btn-info text-white btn-lg">
                <i className="bi bi-search"></i>
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="row m-3">
        <div className="col-md-12">{message(name, datosFiltrados())}</div>
      </div>
      <div className="row m-3">
        <div className="col-md-12">
          <div className="list-group">
            {datosFiltrados().map((producto) => (
              <Link
                to={`/detail/${producto.id}`}
                className="list-group-item list-group-item-action"
              >
                <div className="row">
                  <div className="col-md-2">
                    <img
                      src={producto.thumbnail}
                      alt={producto.title}
                      className="rounded btn"
                      style={{ width: "180px", height: "120px" }}
                    />
                  </div>
                  <div className="col-md-10">
                    <div className="row">
                      <div className="row">
                        <div className="col-md-6">
                          <h4>{producto.title}</h4>
                        </div>
                        <div className="col-md-6">
                          <h5>{producto.category}</h5>
                        </div>
                      </div>
                      <div className="row m-3">
                        <p>{producto.description}</p>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <h4>${producto.price}.00</h4>
                        </div>
                        <div className="col-md-6">
                          <Rating stars={producto.rating} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultsPage;
