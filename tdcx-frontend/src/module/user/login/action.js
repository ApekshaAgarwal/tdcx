import { handleAuthHTTPError } from "../../../common/Helper";
import { handleAPIResponse } from "../../../components/Toast";
import { login } from "./service";

export const SET_LOGIN_INFO = 'SET_LOGIN_INFO';
export const RESET_USER_DATA = 'RESET_USER_DATA';
export const forceLogout = () =>
    (dispatch) => {
        localStorage.removeItem('token');
        dispatch({
            type: RESET_USER_DATA
        });

    };

export const loginUser =
    (param, ownProps) =>
        (dispatch, getState) => {
            return login(param).then(
                (response) => {
                    if (response.success) {
                        dispatch({ type: SET_LOGIN_INFO, token: response.token, firstname: param.userName })
                        localStorage.setItem('userData', JSON.stringify({ token: response.token, firstname: param.userName }))
                    }
                    handleAPIResponse(response)
                    return response
                },
                (error) => {
                    handleAuthHTTPError(error);
                }
            );
        };