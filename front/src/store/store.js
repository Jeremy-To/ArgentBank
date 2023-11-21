import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducer';

export default function storeConfig(initialState = {}) {
	return configureStore({
		reducer: rootReducer,
		preloadedState: initialState,
	});
}
