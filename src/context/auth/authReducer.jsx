import { SET_LOADING, SING_IN, SING_OUT } from "../types"

export default (state, action) => {
  switch (action.type) {
    case SING_IN:
      return {
        ...state,
        user: action.user,
        isAuthenticated: true,
        loading: false,
      }
    case SING_OUT:
      return {
        ...state,
        user: null,
        isAuthenticated: false,
      }
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      }
    default:
      return state
  }
}
