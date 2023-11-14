import React from "react";
import MainPage from "./components/MainPage";
import DetailPage from "./components/DetailPage";
import ResultsPage from "./components/ResultsPage";

import "/node_modules/bootstrap-icons/font/bootstrap-icons.css";
import "/node_modules/bootstrap/dist/css/bootstrap.min.css";
import "/node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import "/node_modules/@popperjs/core/dist/umd/popper.min.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Page404 from "./components/Page404";

const App = () => {
  return (
    <div className="container-fluid">
      <div className="row text-center justify-content-center">
        <div className="col-md-10">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<MainPage />} />
              <Route path="/detail/:id" element={<DetailPage />} />
              <Route path="/product/" element={<ResultsPage />} />
              <Route path="/product/:name" element={<ResultsPage />} />
              <Route path="*" element={<Page404 />} />
            </Routes>
          </BrowserRouter>
        </div>
      </div>
    </div>
  );
};

export default App;
