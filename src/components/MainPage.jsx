import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const MainPage = () => {
  const [name, setName] = useState("");

  const handleInputChange = (nuevoValor) => {
    setName(nuevoValor);
  };

  return (
    <>
      <div className="container-fluid p-5">
        <div className="row">
          <div className="col-xs-6">
            <h1>
              <i className="bi bi-shop display-1"></i>
            </h1>
            <h1 className="display-2">Bazar Online</h1>
            <div className="input-group m-3">
              <span className="input-group-text" id="basic-addon1">
                <i className="bi bi-search"></i>
              </span>
              <input
                type="text"
                value={name}
                onChange={(e) => handleInputChange(e.target.value)}
                className="form-control form-control-lg"
                placeholder="Search something..."
              />
            </div>
            <Link to={`/product/${name}`}>
              <button className="btn btn-success btn-lg m-3">Buscar</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainPage;
