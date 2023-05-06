import axios from "axios";

export const getData = (payload) => async (dispatch) => {
    try {
        dispatch({ type: GET_DATA_LOADING });
        let res = await axios.get(`http://localhost:4758/ads?query=${payload}`);
        console.log(res.data);
        dispatch({ type: GET_DATA_SUCCESS, payload: res.data });
    } catch (e) {
        dispatch({ type: GET_DATA_ERROR, payload: e.message });
    }
}