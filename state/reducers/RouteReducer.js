import { createAction, createReducer } from 'redux-act';

const init = {

  currentUrl:''
    
}

export const setCurrentUrl = createAction('setCurrentUrl');

//reducer
export default createReducer({

    [setCurrentUrl]: (state, payload) =>    { return {...state, currentUrl:payload}}

}, init);
