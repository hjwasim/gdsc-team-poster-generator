import "./app.css";
import React from "react";
import ImageComponent from "./components/ImageComponent";
import Provider from "./context/Provider";
import Form from "./components/Form";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <Provider>
      <Navbar />
      <div className="container">
        <div className="row my-2">
          <div className="col-6">
            <div class="d-flex flex-column justify-content-center my-2 align-items-center">
              <ImageComponent />
            </div>
          </div>
          <div className="col-6">
            <div class="d-flex flex-column justify-content-center my-auto h-100 align-items-center">
              <Form />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </Provider>
  );
}

export default App;
