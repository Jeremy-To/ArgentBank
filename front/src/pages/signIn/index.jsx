import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { userData, userProfile } from '../../services/login';
import { useDispatch } from 'react-redux';
import { setToken, setUser } from '../../store/action';

function Login() {
	const [email, setEmail] = useState();
	const [password, setPassword] = useState();
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const [isLoading, setLoading] = useState(false);
	const [error, setError] = useState(false);

	async function onSubmit(e) {
		e.preventDefault();
		setLoading(true);
		try {
			const response = await userData(email, password);
			dispatch(setToken(response.body.token));
			const profile = await userProfile(response.body.token);
			const data = await profile.body;
			console.log(data);
			dispatch(setUser(data));
		} catch (e) {
			console.log(e);
			setError(true);
		} finally {
			navigate('/profile');
			setLoading(false);
		}
	}

	return (
		<main className="main bg-dark">
			<section className="sign-in-content">
				<h1>Sign In</h1>
				<form onSubmit={onSubmit}>
					<div className="input-wrapper">
						<label htmlFor="email">Email</label>
						<input
							onChange={(e) => setEmail(e.target.value)}
							type="text"
							id="email"
						/>
					</div>
					<div className="input-wrapper">
						<label htmlFor="password">Password</label>
						<input
							onChange={(e) => setPassword(e.target.value)}
							type="password"
							id="password"
						/>
					</div>
					<div className="input-remember">
						<input type="checkbox" id="remember-me" />
						<label htmlFor="remember-me">Remember me</label>
					</div>
					{error && (
						<p className="Message-error">Email or password incorrect</p>
					)}

					{!isLoading && <button className="sign-in-button">Sign In</button>}
				</form>
			</section>
		</main>
	);
}

export default Login;
