// ====================== IMPORTED LIBRARIES ========================
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

// ====================== IMPORTED UTILS ========================
import { LOGOUT_USER } from 'store/actions/actionTypes';
import { routes } from 'routes';
import { removeCookie } from 'cookies/Cookies';

const useUserLogout = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch({ type: LOGOUT_USER, payload: true });
    setTimeout(() => {
      removeCookie('user');
      dispatch({ type: LOGOUT_USER, payload: false });
      history.push(routes.ROUTE_HOME);
    }, 3000);
  };

  return handleLogout;
};

export default useUserLogout;
