const initialState = { logged: false, token: "", roles: "", status: 0 ,id:"" };

export default (state = initialState, action) => {
  switch (action.type) {
    case "REQUEST_TOKEN":
      return {
        ...state,
        token: action.payload.token,
        //roles:action.payload.authorities[0].authority,
        status: action.payload.status,
        logged: true,
        roles: action.payload.role,
        id: action.payload.id
      };
    case "ERROR_TOKEN":
      return { ...state, status: "errore" };
    case "WRONG":
      return { ...state, status: 1 };
    case "LOGED_IN":
      return { ...state };
    case "LOG_OUT":
      return state;
    default:
      return state;
  }
};
