import axios from "axios";

const setAlbum =
  (query, page = 1) =>
  async (dispatch) => {
    const config = {
      headers: {
        "Access-Control-Allow-Origin": "*",
        Authorization: "Client-ID sQkvfr-6U-nMKMqorR4K1UfoedEBOGXiuJDXvGhSc7g",
      },
    };

    const result = await axios.get(
      `https://api.unsplash.com/search/photos?query=${query}&orientation=landscape&per_page=12&page=${page}`,
      config
    );

    //result.data -> results || total

    if (page === 1) {
      dispatch({
        type: "SET_ALBUM",
        payload: result.data,
      });
    } else {
      dispatch({
        type: "UPDATE_ALBUM",
        payload: result.data,
      });
    }
  };

export { setAlbum };
