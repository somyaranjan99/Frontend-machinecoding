import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {store} from './redux/Store'
import App from "./App";
import {Provider} from 'react-redux';
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </StrictMode>
);
