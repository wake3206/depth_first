import { createAction, createReducer } from 'redux-act';

const init = {

  userInf:{},
  isLogin:false
    
}

export const setUserInf = createAction('setUserInf');
export const setLogout = createAction('setLogout');

//reducer
export default createReducer({

    [setUserInf]: (state, payload) => { 
      return {
        ...state, 
        userInf:payload ,
        isLogin:true
      }
    },
    [setLogout]:(state, payload) => {
      return {
        ...state, 
        userInf:{} ,
        isLogin:false
      }
    }

}, init);
