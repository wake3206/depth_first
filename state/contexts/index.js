import React,{ useReducer, createContext, useContext } from "react";
import rootReducer from "../reducers";

export const State = createContext();
export const Dispatch = createContext();

export const useDispatch = (actionCreator) => {

    const dispatch = useContext(Dispatch);
    return async ()=>{
      await  actionCreator(dispatch)
    };

};

export const MainProvider = ({ children }) => {
    const [state, dispatch] = useReducer(rootReducer, {
        left: 0,
        right: 0
    });
    return (
        <State.Provider value={state}>
            <Dispatch.Provider value={dispatch}>
                {children}
            </Dispatch.Provider>
        </State.Provider>
    );
};

