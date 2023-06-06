import { createAction } from "@reduxjs/toolkit";
import { checkReponse } from "../../utils/variables";

export const GET_DIRECTIONS_REQUEST = createAction('GET_DIRECTIONS_REQUEST');
export const GET_DIRECTIONS_FAILED = createAction('GET_DIRECTIONS_FAILED');
export const GET_DIRECTIONS_SUCCESS = createAction('GET_DIRECTIONS_SUCCESS');


export const fetchDirections = () => dispatch => {
    dispatch({type: GET_DIRECTIONS_REQUEST});
    fetch('/api/directions/')
    .then(res => checkReponse(res))
    .then(res => 
        dispatch({
        type: GET_DIRECTIONS_SUCCESS,
        payload: res,
    }))
    .catch(error => {
        console.log(error)
        dispatch({
        type: GET_DIRECTIONS_FAILED,
        payload: error
    })});
}