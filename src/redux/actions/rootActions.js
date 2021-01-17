export const synchronousDispatcher = (type, payload) => {
    return {
        type: type,
        payload
    }
}

export const AsynchronousDispatcher = (type, payload, ...actions) => {
    // console.log(actions)
    return dispatch => {
        dispatch({
            type: type,
            payload
        })
    }
}
