import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <>
      <header className="bg-dark d-flex justify-content-between px-5">
        <nav className="navbar navbar-dark">
          <div className="nav">
            <a className="navbar-brand d-flex align-items-center" href="#">
              <img
                src="https://www.freeiconspng.com/uploads/pokeball-transparent-png-2.png"
                width="55"
                height="55"
                className="d-inline-block align-top m-2 d-inline"
                alt="Pokéball"
              />
              <span className="navbar-text text-white font-weight-bold">
                Pokédex
              </span>
            </a>
          </div>
        </nav>
      </header>
      <main className="d-flex justify-content-center align-items-center">
        <section
          id="results"
          className="d-flex justify-content-center flex-wrap col-10"
        ></section>
      </main>
    </>
  );
}

export default App;
