import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import "./index.css";
import store from "./redux/store";
import App from "./App";

store.subscribe(() => {
    localStorage.setItem("reduxState", JSON.stringify(store.getState()));
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>
);
