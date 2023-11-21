import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './pages/App.jsx';
import SignIn from './pages/signIn/index.jsx';
import User from './pages/user/index.jsx';
import Layout from './pages/layout/Index.jsx';
import './main.css';

import storeConfig from './store/store.js';

const store = storeConfig();

ReactDOM.createRoot(document.getElementById('root')).render(
	<Provider store={store}>
		<React.StrictMode>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Layout />}>
						<Route index element={<App />} />
						<Route path="/login" element={<SignIn />} />
						<Route path="/profile" element={<User />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</React.StrictMode>
	</Provider>
);
