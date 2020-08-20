import React from "react";
import "./Header.css";

const Header = () => (
  <div className="jumbotron jumbotron-fluid">
    <div className="container text-center">
      <h1 className="display-4">Memonomics!</h1>
      <p className="lead">
        Remeber your clickety-clicks...One click per image!!
      </p>
      <p className="lead">Back to square 1 if you click more than once!</p>
    </div>
  </div>
);

export default Header;
