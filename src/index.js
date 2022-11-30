import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import store from "./redux/redux-strore";
import ReactDOM from "react-dom/client";
import App from "./App";
import StoreContext from "./components/store-context";

const root = ReactDOM.createRoot(document.getElementById('root'));

let renderTree = (store) => root.render(
		<React.StrictMode>
			<StoreContext.Provider value={store}>
				<App/>
			</StoreContext.Provider>
		</React.StrictMode>
);

renderTree(store);
store.subscribe(() => renderTree(store));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
