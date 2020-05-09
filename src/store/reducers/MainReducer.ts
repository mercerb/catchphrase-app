import GlobalState from "../GlobalState";

export function MainReducer(state: GlobalState, action: any) {
  switch (action.type) {
    case "SET_AUTH_TOKEN":
      return {
        ...state,
        authToken: action.payload.authToken
      };
    case "CLEAR_AUTH_TOKEN":
      return {
        ...state,
        authToken: undefined
      };
    default:
      return state;
  }
}
