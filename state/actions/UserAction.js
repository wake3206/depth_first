import "isomorphic-unfetch";
import getConfig from 'next/config'
import {
  setUserInf,
  setLogout
} from "../reducers/UserReducer";
const { publicRuntimeConfig: { API_URL } } = getConfig();

export const onSetLogin = filter => {
  return async (dispatch, getState) => {

    try {
     
      const raw = await fetch(`${API_URL}/users/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        body:`params=${JSON.stringify(filter)}`
      });

      let res = await raw.json();

      if (res.status) {

        localStorage.setItem('auth', JSON.stringify(res.user))


        dispatch(setUserInf(res.user));
      } else {
        console.log("error", res.message);

        return null;
      }

      return res.user;

    } catch (error) {
      console.log("error", error.message);
    }
  };
};

export const onSetLogout = () => {
  return async (dispatch) => {

    dispatch(setLogout());
    localStorage.removeItem('auth')
  };
};
