const initialState = {
    data: [],
    loading: false,
    error: false,
    errorMessage: "",
    message: "",
}

export const dataReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_DATA_LOADING: {
            return {
                ...state,
                loading: true,
                error: false
            }
        }
        case GET_DATA_SUCCESS: {
            return {
                ...state,
                loading: false,
                error: false,
                data: payload.data,
                message: payload.message
            }
        }
        case GET_DATA_ERROR: {
            return {
                ...state,
                loading: false,
                error: true,
                errorMessage: payload.message
            }
        }
        default: return state
    }
}