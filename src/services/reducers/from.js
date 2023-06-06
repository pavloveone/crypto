import { createReducer } from '@reduxjs/toolkit';
import { FROM } from '../actions/from';

const initialState = {
    from: ''
}

export const fromReducer = createReducer(initialState, builder => {
    builder
        .addCase(FROM, (state, action) => {
            state.from = action.payload;
        })
})