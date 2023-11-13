import React, { useEffect, useState } from "react";
import "./DetailPage.css";
import Rating from "./Rating";
import { Link, useParams } from "react-router-dom";
import products from "../products.json";

const DetailPage = () => {
  const { id } = useParams();
  const [datos, setDatos] = useState([]);
  const [filtro, setFiltro] = useState("");

  useEffect(() => {
    const obtenerDatos = async () => {
      try {
        //const respuesta = await fetch("../products.json");
        const datosJson = products;
        setDatos(datosJson.products);
      } catch (error) {
        console.error("Error al obtener datos:", error);
      }
    };

    obtenerDatos();
  }, []);

  const datosFiltrados = datos.filter((producto) => producto.id == id);
  console.log(datosFiltrados);
  const handleInputChange = (nuevoValor) => {
    setFiltro(nuevoValor);
  };

  return (
    <div className="container-fluid">
      <div className="row pt-5">
        <div className="col-md-4">
          <h1 className="bi bi-shop display-5"> Bazar Online</h1>
        </div>
        <div className="col-md-8  ">
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
        {datosFiltrados.map((producto) => (
          <div className="card">
            <div className="row m-3 card-img-top justify-content-center">
              <div className="col-md-6">
                <div id="carouselExampleIndicators" className="carousel slide">
                  <div className="carousel-indicators">
                    <button
                      type="button"
                      data-bs-target="#carouselExampleIndicators"
                      data-bs-slide-to="0"
                      className="active"
                      aria-current="true"
                      aria-label="Slide 1"
                    ></button>
                    <button
                      type="button"
                      data-bs-target="#carouselExampleIndicators"
                      data-bs-slide-to="1"
                      aria-label="Slide 2"
                    ></button>
                    <button
                      type="button"
                      data-bs-target="#carouselExampleIndicators"
                      data-bs-slide-to="2"
                      aria-label="Slide 3"
                    ></button>
                  </div>
                  <div className="carousel-inner bg-secondary bg-opacity-50">
                    <div className="carousel-item active">
                      <img
                        src={producto.images[0]}
                        className="align-self-center"
                        alt={producto.title}
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        src={producto.images[1]}
                        className="align-self-center"
                        alt={producto.title}
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        src={producto.images[2]}
                        className="align-self-center"
                        alt={producto.title}
                      />
                    </div>
                  </div>
                  <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide="prev"
                  >
                    <span
                      className="carousel-control-prev-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Previous</span>
                  </button>
                  <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide="next"
                  >
                    <span
                      className="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Next</span>
                  </button>
                </div>
              </div>
            </div>
            <div className="card-body">
              <h5 className="card-title display-5">{producto.title}</h5>
              <h6 className="card-subtitle mb-2 text-muted">
                {producto.category}
              </h6>
              <p className="card-text">{producto.description}</p>
              <div className="row mt-3">
                <div className="col-md-8 align-content-end">
                  <div className="row">
                    <div className="col-md-7">
                      <h3>Precio: ${producto.price}.00</h3>
                    </div>
                    <div className="col-md-6">
                      <p className="text-success fw-bold">
                        Disponibles: {producto.stock}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <Rating stars={producto.rating} />
                </div>
              </div>
              <a href="#" className="btn btn-success btn-lg">
                <i className="bi bi-cart-plus"></i> Comprar
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DetailPage;
