const UserReducer = (state, action) => {
  switch (action.type) {
    case "GET_USERS":
      return {
        ...state,
        loading: false,
        users: action.payload,
      };
    case "EDIT_USER":
      return {
        ...state,
        users: state.users.map((user) =>
          user.id === action.payload.id
            ? {
                ...user,
                username: action.payload.user.username,
                email: action.payload.user.email,
                age: action.payload.user.age,
              }
            : user
        ),
      };
    case "ADD_USER":
      return {
        ...state,
        users: [action.payload, ...state.users],
      };
    case "USER_ERROR":
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default UserReducer;
