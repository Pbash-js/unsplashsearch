import React from "react";
import { useState } from "react";

import ImageGrid from "../ImageGrid/ImageGrid";
import Form from "../Form/Form";
import { connect } from "react-redux";
import { setAlbum } from "../../redux/actions";

const App = ({ setAlbum, data, total }) => {
  const [query, setQuery] = useState("");

  const [page, setPage] = useState(1);
  const [searchItem, setSearchItem] = useState(
    "Search something to get started"
  );
  const handleSubmit = (e) => {
    e.preventDefault();
    if (query === "") {
      setSearchItem("Random");
      setAlbum("Random");
    } else {
      setSearchItem(query);
      setAlbum(query);
    }
  };
  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const loadMore = () => {
    setPage(page + 1);
    setAlbum(query, page + 1);
  };

  return (
    <div className="container-fluid p-3 p-sm-5">
      <Form
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        query={query}
      />
      <div className="container mx-0 my-4">
        <h1 className="mt-2 mt-sm-4">{searchItem}</h1>
        <h6 className="text-muted">
          {total !== undefined && total > 5000
            ? `Found 5000+ images`
            : `Found ${total} images`}
        </h6>
      </div>
      <ImageGrid data={data} />
      <div className="container d-flex justify-content-center">
        {data && total > 9 && (
          <button
            className="shadow btn btn-primary mb-md-0 px-sm-5 bg-dark border-0"
            onClick={() => {
              loadMore();
            }}
          >
            Load More
          </button>
        )}
      </div>
      <footer className="container d-flex justify-content-center mt-5">
        Made with ❤️ using React and Unsplash-API
      </footer>
    </div>
  );
};

const mapStateToProps = (state) => ({
  data: state.images,
  total: state.found,
});

export default connect(mapStateToProps, { setAlbum })(App);
