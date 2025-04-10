import { useDispatch } from 'react-redux';
import { logout } from '../features/auth/authSlice';

const Home = () => {
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logout());
    };

    return(
        <div>
            <h1>Inicio</h1>
            <p>Solo si estas auth</p>
            <button onClick={handleLogout}>Salir</button>
        </div>
    );
};

export default Home;