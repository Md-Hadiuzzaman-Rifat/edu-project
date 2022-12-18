import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";

import Home from "./components/Routes/Home";
import About from "./components/Routes/About";
import Shop from "./components/Routes/Shop";
import Page from "./components/Routes/Page";
import Page1 from "./components/Routes/Page1";
import Page2 from "./components/Routes/Page2";
import PrivateRoute from "./components/PrivateRoute";

const App = () => {
  return (
    <div className="App">
      <h2>This is Application JS.</h2>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/shop/:shopId" element={<Shop></Shop>}></Route>
        <Route path="/shop/*" element={<h2>This is Fake page.</h2>}></Route>
        <Route path="/page/*" element={<Page />}>
          <Route path="page1" element={<Page1 />} />
        </Route>

        <Route path="/home/*" element={<Home />}></Route>

        {/* <Route
          path="/about"
          element={
            <PrivateRoute>
              <About />
            </PrivateRoute>
          }
        ></Route> */}


      </Routes>
    </div>
  );
};

export default App;
