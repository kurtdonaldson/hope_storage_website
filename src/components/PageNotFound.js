import React from "react";

export default function PageNotFound() {
  return (
    <div
      className="d-flex flex-column justify-content-center align-items-center"
      style={{ height: "100vh", backgroundColor: "#ADD8E6" }}
    >
      <div className="pb-5">
        <h1>Whoops!</h1>
      </div>
      <div className="pb-5">
        <h2>404 Page Not Found</h2>
      </div>
      <div>
        <p>
          Try our <a href="/">homepage</a> instead
        </p>
      </div>
    </div>
  );
}
