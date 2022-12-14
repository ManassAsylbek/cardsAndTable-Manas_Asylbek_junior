import {combineReducers, configureStore} from "@reduxjs/toolkit";
import cardsSlice from "./cardsSlice/cardsSlice"
import selectCardSlice from "./selectCard/selectCardSlice"



const rootReducer = combineReducers({
    cardsSlice,
    selectCardSlice,
})

export const setupStore = () =>{
    return configureStore({
        reducer:rootReducer,
        middleware:(getDefaultMiddleware) => getDefaultMiddleware().concat()})
}

export type RootState = ReturnType <typeof rootReducer>
export type AppStore = ReturnType <typeof setupStore>
export type AppDispatch = AppStore['dispatch']

