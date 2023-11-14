import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import App from './pages/App.jsx';
import SignIn from './pages/signIn/index.jsx';
import Layout from './pages/layout/Index.jsx';
import './main.css';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<App />} />
					<Route path="/login" element={<SignIn />} />
				</Route>
			</Routes>
		</BrowserRouter>
	</React.StrictMode>
);
