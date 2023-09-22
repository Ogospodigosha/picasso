import {configureStore} from "@reduxjs/toolkit";
import {JSON_PLACE_HOLDER_Api} from "shared/api/api";

export function createReduxStore() {
    return configureStore({
        reducer: {
            [JSON_PLACE_HOLDER_Api.reducerPath]: JSON_PLACE_HOLDER_Api.reducer
        },
        middleware: (getDefaultMiddleware)=>getDefaultMiddleware().concat(JSON_PLACE_HOLDER_Api.middleware)
    })
}


