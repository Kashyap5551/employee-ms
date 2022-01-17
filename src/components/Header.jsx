import React from "react";

const Header = () => {
  return (
    <div>
      <header>
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
          <div>
            <a href="http://localhost:3000/" className="navbar-brand m-4">
              Employee Manager
            </a>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;
