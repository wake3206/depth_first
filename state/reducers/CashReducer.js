import { createAction, createReducer } from 'redux-act';

const init = {

  data:[],
  loading:true,
  form:{},
  saving:false,
  formSearch:{}
    
}

export const setDataList = createAction('setDataList');
export const setLoading = createAction(' setLoading');
export const setForm = createAction(' setForm');
export const setSaving = createAction(' setSaving');
export const setFormSearch = createAction(' setFormSearch');

//reducer
export default createReducer({

    [setDataList]: (state, payload) =>    { return {...state, data:payload}},
    [setLoading]: (state, payload) =>    { return {...state, loading:payload}},
    [setForm]: (state, payload) =>    { return {...state, form:payload}},
    [setSaving]: (state, payload) =>    { return {...state, saving:payload}},
    [setFormSearch]: (state, payload) =>    { return {...state, formSearch:payload}}

}, init);
