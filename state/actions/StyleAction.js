import 'isomorphic-unfetch'
import { setCollapeBtn ,setToggleSidebar} from "../reducers/StyleReducer";

export const setWidthCollapeBtn = (width) => {

    return async (dispatch) => {

        dispatch(setCollapeBtn(width))

    }
}

export const onSetToggleSidebar = (direct) => {

    return async (dispatch) => {

        dispatch(setToggleSidebar(direct))

    }
}

