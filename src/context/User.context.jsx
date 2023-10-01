import { createContext, useContext, useEffect, useReducer } from "react";
import {
  createUserDocumentFromAuth,
  onAuthStateChangeListener,
} from "../utils/firebase/firebase.utils";

import { createAction } from "../utils/reducer/reducer.utils";

export const userContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

export const SET_CURRENT_USER = "SET_CURRENT_USER";

const userReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        currentUser: payload,
      };
    default:
      throw new Error(`Unhandled type ${type} in userReducer`);
  }
};

const INTIAL_STATE = {
  currentUser: null,
};

const ContextProvider = ({ children }) => {
  const [{ currentUser }, dispatch] = useReducer(userReducer, INTIAL_STATE);

  const setCurrentUser = (user) => {
    dispatch(createAction(SET_CURRENT_USER, user));
  };

  const value = {
    currentUser,
    setCurrentUser,
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChangeListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      setCurrentUser(user);
    });
    return unsubscribe;
  }, []);

  return <userContext.Provider value={value}>{children}</userContext.Provider>;
};

export const useUserContext = () => useContext(userContext);
export default ContextProvider;
