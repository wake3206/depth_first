import { createAction, createReducer } from 'redux-act';

const init = {

  btnCollapeSidebar:'150px',
  collapeSidebar:false
    
}

export const setCollapeBtn = createAction('setCollapeBtn');
export const setToggleSidebar = createAction('setToggleSidebar');

//reducer
export default createReducer({

    [setCollapeBtn]: (state, payload) =>    { return {...state, btnCollapeSidebar:payload}},
    [setToggleSidebar]: (state, payload) =>    { return {...state, collapeSidebar:payload}}

}, init);
