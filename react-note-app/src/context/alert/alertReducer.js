import { SHOW_ALERT,HIDE_ALERT, SHOW_ALERT_REMOVE } from "../types"

const hadlers = {
    [SHOW_ALERT]: (state, {payload}) => ({...payload, visible: true}),
    [SHOW_ALERT_REMOVE]: (state, {payload}) => ({...payload, visible: true}),
    [HIDE_ALERT]: state => ({...state,visible: false}),
    DEFAULT: state => state
}


export const alertReducer = (state, action) => {
    const handle = hadlers[action.type] || hadlers.DEFAULT
    return handle(state, action)
}