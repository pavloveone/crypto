import { createReducer } from '@reduxjs/toolkit';
import { GET_DIRECTIONS_REQUEST, GET_DIRECTIONS_SUCCESS, GET_DIRECTIONS_FAILED } from '../actions/directions';

const initialState = {
    isLoading: false,
    hasError: false,
    directions: [],
    erorrMessage: ''
}

export const directionsReducer = createReducer(initialState, builder => {
    builder
        .addCase(GET_DIRECTIONS_REQUEST, state => {
            state.isLoading = true;
        })
        .addCase(GET_DIRECTIONS_SUCCESS, (state, action) => {
            state.isLoading = false;
            state.directions = action.payload;
        })
        .addCase(GET_DIRECTIONS_FAILED, (state, action) => {
            state.isLoading = false;
            state.hasError = true;
            state.erorrMessage = action.payload;
        })
})