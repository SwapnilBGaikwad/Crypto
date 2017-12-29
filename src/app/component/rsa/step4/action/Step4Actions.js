export const MESSAGE_SUBMIT = 'MESSAGE_SUBMIT';

export function onMessageSubmit(dispatch) {
    return (message) => {
        dispatch({
            type: MESSAGE_SUBMIT,
            message
        });
    };
}