export const simpleAction = () => (dispatch) => {
	dispatch({
		type: 'SIMPLE_ACTION',
		payload: 'result_of_simple_action',
	});
};
export const setUser = (user) => (dispatch) => {
	dispatch({
		type: 'SET_USER',
		payload: user,
	});
};

export const setToken = (token) => (dispatch) => {
	dispatch({
		type: 'SET_TOKEN',
		payload: token,
	});
};

export const removeToken = () => (dispatch) => {
	dispatch({
		type: 'REMOVE_TOKEN',
	});
};
