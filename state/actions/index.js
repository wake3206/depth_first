import React,{useContext} from 'react';
const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

export const onLeftPlus = (param) => {

    return async (dispatch) =>{

        console.log('param', param);

        //fetching...
        await delay(2000);
        console.log('after delay');
        
        dispatch({type:'LEFT_CLICKED'})
    }
    

}

