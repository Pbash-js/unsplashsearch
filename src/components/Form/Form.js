import React from "react";

export default function Form({ handleSubmit, handleChange, query }) {
  return (
    <>
      <form onSubmit={(e) => handleSubmit(e)}>
        <span className="mb-3 d-flex my-sm-5 px-2">
          <input
            type="text"
            placeholder="Search for photos"
            className="form-control shadow  mb-md-0   p-sm-3 p-xs-3 rounded border-0"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value={query}
            onChange={(e) => handleChange(e)}
          />
          <button
            type="submit"
            className="shadow btn btn-primary mb-md-0 px-sm-5 bg-dark border-0"
            style={{ marginLeft: "2rem" }}
          >
            <i className="fas fa-search"></i>
          </button>
        </span>
      </form>
    </>
  );
}
