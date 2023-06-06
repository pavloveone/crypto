import { createAction } from "@reduxjs/toolkit";
import { checkReponse } from "../../utils/variables";

export const GET_FILTER_REQUEST = createAction('GET_FILTER_REQUEST');
export const GET_FILTER_FAILED = createAction('GET_FILTER_FAILED');
export const GET_FILTER_SUCCESS = createAction('GET_FILTER_SUCCESS');


export const fetchFilter = () => dispatch => {
    dispatch({type: GET_FILTER_REQUEST});
    fetch('/api/filter/')
    .then(res => checkReponse(res))
    .then(res => 
        dispatch({
        type: GET_FILTER_SUCCESS,
        payload: res,
    }))
    .catch(error => {
        console.log(error)
        dispatch({
        type: GET_FILTER_FAILED,
        payload: error
    })});
}