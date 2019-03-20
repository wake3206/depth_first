import "isomorphic-unfetch";
import getConfig from 'next/config'
import {
  setDataList ,
  setLoading,
  setForm,
  setSaving,
  setFormSearch
} from "../reducers/CashReducer";

const { publicRuntimeConfig: { API_URL } } = getConfig();

export const loadDataList = filter => {
  return async (dispatch, getState) => {

    
    const {formSearch} = getState().cash
    //console.log('form---->', getState());
    
    //--
    try {
      dispatch(setLoading(true));
      const raw = await fetch(`${API_URL}/orders`, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        body:`params=${JSON.stringify({...formSearch, ...filter})}`
      });

      let res = await raw.json();

      if (res.status) {
        dispatch(setDataList(res.orders));
      } else {
        console.log("error", res.message);
      }

      dispatch(setLoading(false))
    } catch (error) {
      console.log("error", error.message);
    }
  };
};

export const setFormData = val => {
  return async dispatch => {
    //--
    try {
      dispatch(setSaving(true));

      console.log('setFormData-->', val);

      val.id = null;
      val.status = 1;
      

      dispatch(setForm(val));

      const raw = await fetch(`${API_URL}/save_order`, {
        method: 'POST',
        headers: { 
          'Content-Type':'application/x-www-form-urlencoded'
        },
        body:`params=${JSON.stringify(val)}`
      })
  
      let res = await raw.json()
      
      
      if (res.status) {
        dispatch(setDataList(res.orders));
      } else {
        console.log("error", res.message);
      }

      dispatch(setSaving(false))
    } catch (error) {
      console.log("error", error.message);
    }
  };
};

export const delOrderCash = val => {
  return async dispatch => {
    //--
    try {
      dispatch(setSaving(true));

      console.log('setFormData-->', val);

      dispatch(setForm(val));

      const raw = await fetch(`${API_URL}/del`, {
        method: 'POST',
        headers: { 
          'Content-Type':'application/x-www-form-urlencoded'
        },
        body:`params=${JSON.stringify(val)}`
      })
  
      let res = await raw.json()
      
      if (res.status) {
        
      } else {
        console.log("error", res.message);
      }

      dispatch(setSaving(false))
    } catch (error) {
      console.log("error", error.message);
    }
  };
};

export const loadFormSearch = val => {
  return async dispatch => {
    //--
    dispatch(setFormSearch(val))
  };
};

export const onUpdateStatus = val => {
  return async dispatch => {
    //--
    try {
      dispatch(setSaving(true));

      console.log('setFormData-->', val);
      
      dispatch(setForm(val));

      const raw = await fetch(`${API_URL}/save_order`, {
        method: 'POST',
        headers: { 
          'Content-Type':'application/x-www-form-urlencoded'
        },
        body:`params=${JSON.stringify(val)}`
      })
  
      let res = await raw.json()
    
      if (res.status) {
        //dispatch(setDataList(res.orders));
      } else {
        console.log("error", res.message);
      }

      dispatch(setSaving(false))
    } catch (error) {
      console.log("error", error.message);
    }
  };
};

export const loadMenu = (filter) => {
  return async (dispatch, getState) => {

    const {userInf} = getState().userState
    //console.log('form---->', getState());
    //--
    try {
      
      const raw = await fetch(`${API_URL}/menus`, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        body:`params=${JSON.stringify({...filter, empId:userInf.id})}`
      });

      let res = await raw.json();

      if (res.status) {
        
        return res.menus;

      } else {
        console.log("error", res.message);
      }
    } catch (error) {
      console.log("error", error.message);
    }
  };
};
