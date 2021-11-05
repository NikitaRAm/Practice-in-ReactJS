import React, {useReducer} from 'react'
import { AlertContext } from './alertContext'
import { alertReducer } from './alertReducer'
import { SHOW_ALERT,HIDE_ALERT,SHOW_ALERT_REMOVE } from "../types"

export const AlertState = ({children}) => {
    const [state, dispatch] = useReducer(alertReducer, {visible: false})

    const show = (text, type = 'warning') => {
        dispatch({
            type: SHOW_ALERT,
            payload: {text,type}
        })
    }

    const show_remove = (text, type = 'warning') => {
        dispatch({
            type: SHOW_ALERT_REMOVE,
            payload: {text,type}
        })
    }

    const hide = () => dispatch({type: HIDE_ALERT})
    return (
        <AlertContext.Provider value={{
            show, hide, show_remove,
            alert: state
        }}>
            {children}
        </AlertContext.Provider>
    )
}