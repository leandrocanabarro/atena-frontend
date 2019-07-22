import { createActions, createReducer } from "reduxsauce";

const INITIAL_STATE = {
  activeModal: false,
  loading: false,
  token: null,
  avatar: null,
  uuid: null,
  isCoreTeam: false
};

export const { Types, Creators } = createActions({
  toggleModal: ["data"],
  signInRequest: ["data"],
  signInSuccess: ["data"],
  signInFailure: ["data"],
  signOut: ["data"]
});

const toggleModal = (state = INITIAL_STATE) => ({
  ...state,
  activeModal: !state.activeModal
});

const signInRequest = (state = INITIAL_STATE) => ({
  ...state,
  loading: true
});

const signInSuccess = (state = INITIAL_STATE, action) => {
  const { token, uuid, isCoreTeam, avatar } = action.data;
  return {
    ...state,
    activeModal: false,
    loading: false,
    token,
    uuid,
    avatar,
    isCoreTeam
  };
};

const signInFailure = (state = INITIAL_STATE) => ({
  ...state,
  loading: false,
  activeModal: false
});

const signOut = (state = INITIAL_STATE) => {
  return {
    ...state,
    token: null,
    uuid: null,
    avatar: null,
    isCoreTeam: false
  };
};

export default createReducer(INITIAL_STATE, {
  [Types.TOGGLE_MODAL]: toggleModal,
  [Types.SIGN_IN_REQUEST]: signInRequest,
  [Types.SIGN_IN_SUCCESS]: signInSuccess,
  [Types.SIGN_IN_FAILURE]: signInFailure,
  [Types.SIGN_OUT]: signOut
});
