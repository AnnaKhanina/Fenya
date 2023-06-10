// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";
// import { BrowserRouter } from "react-router-dom";
// import "modern-normalize";
// import  App  from './components/App/App';

// import { Provider } from "react-redux";
// import store from "./redux/store";

// const rootElement = document.getElementById("root");
// const root = createRoot(rootElement);

// root.render(
//   <Provider 
//     store={store}
//     >
//       <StrictMode>
//         <BrowserRouter>
//           <App />
//         </BrowserRouter>   
//       </StrictMode>
//   </Provider>  
// );

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { Provider } from "react-redux";
import store from "./redux/store";

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);

reportWebVitals();


