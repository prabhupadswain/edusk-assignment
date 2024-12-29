import { createContext, useReducer } from "react";
import UserReducer from "./UserReducer";
import axios from "axios";
// import users from "../../data.json";

// Base URL : Node JS/Express backend server running at this URL
// on PORT: 5000
const baseURL = "http://localhost:5000";

// Initial State
const initialState = {
  users: [],
  error: null,
  loading: true,
};

// Create Context
export const UserContext = createContext(initialState);

// Provider Component
export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(UserReducer, initialState);

  // Actions
  // Action - Get all users
  async function getUsers() {
    try {
      const res = await axios.get(`${baseURL}/api/users`);
      dispatch({
        type: "GET_USERS",
        payload: res.data.data,
      });
    } catch (error) {
      dispatch({
        type: "USER_ERROR",
        payload: error.res.data.msg,
      });
    }
  }

  // Action - Create a new user
  async function addUser(user) {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const res = await axios.post(`${baseURL}/api/users`, user, config);
      dispatch({
        type: "ADD_USER",
        payload: res.data.createdUser,
      });
    } catch (error) {
      dispatch({
        type: "USER_ERROR",
        payload: error.res.data.msg,
      });
    }
  }

  // Action - Edit user
  async function editUser(id, user) {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const res = await axios.put(`${baseURL}/api/users/${id}`, user, config);
      if (res.data.success) {
        dispatch({
          type: "EDIT_USER",
          payload: { id, user },
        });
      }
    } catch (error) {
      dispatch({
        type: "USER_ERROR",
        payload: error.res.data.msg,
      });
    }
  }

  return (
    <UserContext.Provider
      value={{
        users: state.users,
        error: state.error,
        loading: state.loading,
        addUser,
        getUsers,
        editUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
