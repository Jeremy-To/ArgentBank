import { Link } from 'react-router-dom';
import Logo from '../../../public/assets/argentBankLogo.webp';
import { useDispatch, useSelector } from 'react-redux';
import { removeToken } from '../../store/action';

const Header = () => {
	const dispatch = useDispatch();
	function logout() {
		dispatch(removeToken());
	}
	const token = useSelector((state) => state.userState.token);
	const user = useSelector((state) => state.userState.user);
	return (
		<nav className="main-nav">
			<Link className="main-nav-logo" to={'/'}>
				<img
					className="main-nav-logo-image"
					src={Logo}
					alt="Argent Bank Logo"
				/>
				<h1 className="sr-only">Argent Bank</h1>
			</Link>
			{!token ? (
				<div>
					<Link className="main-nav-item" to={'/login'}>
						Sign In
					</Link>
				</div>
			) : (
				<div>
					<Link className="main-nav-item" to={'/profile'}>
						{user?.userName}
					</Link>
					<Link className="main-nav-item" to={'/'} onClick={logout}>
						Sign out
					</Link>
				</div>
			)}
		</nav>
	);
};

export default Header;
