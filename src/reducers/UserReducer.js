import { SIGN_UP_REQUEST, SIGN_IN_REQUEST} from '../constants/user';

const initialState = {
  isLogin: false,
  isRegistered: false,
  authorizationPending: false,
  registrationPending: false,
  user: null
};

export default function User(state = initialState, action) {
  switch (action.type) {
    case SIGN_UP_REQUEST:
      return {
        ...state,
        registrationPending: true
      };
    case SIGN_IN_REQUEST:
      return {
        ...state,
        authorizationPending: action.payload
      };
    default:
      return state;
  }
}
