import { RESET_USER_DATA, SET_LOGIN_INFO } from "./action";


const initialState = {
  token: '',
  firstname: '',

};

const user = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOGIN_INFO:
      return {
        ...state,
        token: action.token,
        firstname: action.firstname
      };
    case RESET_USER_DATA:
      return {
        ...state,
        token: '',
        firstname: ''
      };

    default:
      return state;
  }
};

export default user
