import React, { useContext } from 'react';
import {
    State,
    Dispatch,
    useDispatch
} from "../../state/contexts";
import { onLeftPlus } from "../../state/actions";

const Home = () => {

    const state = useContext(State);
    const actionclick = useDispatch(onLeftPlus('555'))


    const handleLeftPlus = async () => {

        console.log('bf click');
        await actionclick();
        console.log('af click');
    }


    return (
        <div>
            Hello Home!!!! {state.left}
            <br />
            <button onClick={() => handleLeftPlus()}>click + </button>
        </div>
    );
};

export default Home;