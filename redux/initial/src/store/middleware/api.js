import axios from "axios";
import * as actions from "../api";

const api =
  ({ dispatch }) =>
  (next) =>
  async (action) => {
    if (action.type !== actions.apiCallBegan.type) {
      return next(action);
    }

    next(action);

    const { url, method, data, onSuccess, onError } = action.payload;

    try {
      const response = await axios.request({
        baseURL: "http://localhost:9001/api",
        url,
        method,
        data,
      });

      dispatch({ type: onSuccess, payload: response.data });

      //dispatch(actions.apiCallSuccess(response.data));
    } catch (err) {
      console.log("here");
      dispatch(actions.apiCallFailed(err));
    }
  };

export default api;
