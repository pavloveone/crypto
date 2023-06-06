import { createReducer } from '@reduxjs/toolkit';
import { GET_FILTER_REQUEST, GET_FILTER_SUCCESS, GET_FILTER_FAILED } from '../actions/filter';

const initialState = {
    isLoading: false,
    hasError: false,
    filter: [],
    erorrMessage: ''
}

export const filterReducer = createReducer(initialState, builder => {
    builder
        .addCase(GET_FILTER_REQUEST, state => {
            state.isLoading = true;
        })
        .addCase(GET_FILTER_SUCCESS, (state, action) => {
            state.isLoading = false;
            state.filter = action.payload;
        })
        .addCase(GET_FILTER_FAILED, (state, action) => {
            state.isLoading = false;
            state.hasError = true;
            state.erorrMessage = action.payload;
        })
})