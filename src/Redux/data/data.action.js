import { GET_DATA_ERROR, GET_DATA_LOADING, GET_DATA_SUCCESS } from "./data.types";
import axios from "axios";

export const getData = (payload) => async (dispatch) => {
    try {
        dispatch({ type: GET_DATA_LOADING });
        let res = await axios.get(`https://good-cod-wig.cyclic.app/ads?query=${payload}`);
        console.log(res.data);
        dispatch({ type: GET_DATA_SUCCESS, payload: res.data });
    } catch (e) {
        dispatch({ type: GET_DATA_ERROR, payload: e.message });
    }
}