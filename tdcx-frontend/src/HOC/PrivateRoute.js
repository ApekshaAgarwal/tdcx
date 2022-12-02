import { get } from 'lodash';
import { useSelector } from 'react-redux';
import { store } from '../app/store';
import { forceLogout } from '../module/user/login/action';
import { Navigate,useLocation } from 'react-router-dom';


export const PrivateRoute = ({
    children
}) => {
    let location = useLocation();

    const savedToken = useSelector((state) =>
        get(state, 'user.token', false)
    );

    if (!savedToken) {
        store.dispatch(forceLogout(true));
    }

    const renderComponent = () => {
        if (!savedToken) {
            return <Navigate to="/login" state={{ from: location }} replace />;
        }


        return children;
    };

    return renderComponent()

};
