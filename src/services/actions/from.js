import { createAction } from "@reduxjs/toolkit";

export const FROM = createAction('FROM');

export const getFrom = (event) => dispatch => {
    dispatch({
        type: FROM,
        payload: event
    })
}