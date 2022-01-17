import React from "react";

export const Landing = () => {
  return (
    <div className="h-100 align-items-center mx-auto px-auto">
      <h1 class="display-4">Hello, User</h1>
      <p class="lead">
        This is a simple Employee Manager. You will be able to Add, Update and
        Delete employee information saved in a database.
      </p>
      <hr class="my-4"></hr>
      <p>
        This Web Application uses ReactJS and Bootstrap for its front-end. For
        the back-end we have a RESTful SpringBoot API, that uses Spring Data and
        JPA to connect to a MySQL database.
      </p>
      <a class="btn btn-primary btn-lg" href="/employees" role="button">
        Current Employees
      </a>
      <a
        className="m-2 btn btn-primary btn-lg"
        href="/add-employee"
        role="button"
      >
        Add an Employee
      </a>
    </div>
  );
};
