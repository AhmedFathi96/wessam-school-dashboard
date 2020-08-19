import React from 'react';
import ReactDOM from 'react-dom';
import './assets/scss/style.scss';
import { Provider } from 'react-redux';
import App  from './app';
import persistedStore from "./React-Redux/store";

export async function initApp() {
const { store } = await persistedStore();


	ReactDOM.render(
		<Provider store={store}>
		<>
			<App />
		</>
		</Provider>,
		document.getElementById("root") as HTMLDivElement
	);
}

initApp();
