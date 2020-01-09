import {
    LOGIN_START,
    LOGIN_SUCCESS,
    LOGIN_FAIL
} from './actions'

const initialState = {
    loading: false,
    email: {},
    password: {},
    error: ''
}

export function reducer(state = initialState, action) {
    switch(action.type) {
        case LOGIN_START :
            return {
                ...state,
                loading: true
            }
        case LOGIN_SUCCESS :
            return {
                ...state,
                loading: false,
                email: action.payload,
                password: action.payload
            }
        case LOGIN_FAIL :
            return {
                ...state,
                error: action.payload
            }

            default: 
                return state
    }
}