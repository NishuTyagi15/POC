import { SAVE_TITLE } from "./action";

const initialState = {
    titles: []
}

export const titleReducer = (state= initialState, action={}) => {
    console.log("The state is", state, "the action is", action);
    if(action.type === SAVE_TITLE) {
        return action.payload
    } else return state;
}