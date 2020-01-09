import axios from 'axios'

export const LOGIN_START = 'LOGIN_START'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAIL = 'LOGIN_FAIL'
export const REGISTER_START = 'REGISTER_START'
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS'
export const REGISTER_FAIL = 'REGISTER_FAIL'

export const logins = (input) => dispatch => {
    dispatch({type : LOGIN_START})
    axios.get('http://bw-fresh-farm-produce-backend.herokuapp.com/api/shops/:shop-id/products')
        .then(res => {
            dispatch({type: LOGIN_SUCCESS, payload: res.data})
        })
        .catch(err => {
            dispatch({type: LOGIN_FAIL, payload: err})
        })
}

export const registers = (input) => dispatch => {
    dispatch({type : REGISTER_START})
    axios.get('http://bw-fresh-farm-produce-backend.herokuapp.com/api/shops/:shop-id/products')
        .then(res => {
            dispatch({type: REGISTER_SUCCESS, payload: res.data})
        })
        .catch(err => {
            dispatch({type: REGISTER_FAIL, payload: err})
        })
}