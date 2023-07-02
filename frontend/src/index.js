import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "modern-normalize";
import  App  from './components/App/App';

import { Provider } from "react-redux";
import store from "./redux/store";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <Provider 
    store={store}
    >
      <StrictMode>
        <BrowserRouter>
          <App />
        </BrowserRouter>   
      </StrictMode>
  </Provider>  
);



