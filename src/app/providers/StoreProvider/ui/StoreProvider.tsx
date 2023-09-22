import React, {ReactNode} from 'react';
import {classNames} from "shared/lib/classNames/classNames";
import {Provider} from "react-redux";
import {createReduxStore} from "app/providers/StoreProvider/config/store";


interface StoreProviderProps {
    children?: ReactNode
}

const StoreProvider = ({children}:StoreProviderProps) => {
    const store = createReduxStore()
    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};

export default StoreProvider;
