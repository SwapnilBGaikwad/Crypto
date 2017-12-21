export const CHECK_IS_PRIME = 'CHECK_IS_PRIME';

export function isPrimeAction(value) {
    return {type: CHECK_IS_PRIME, value}
}

export const UPDATE_NUMBER = 'UPDATE_NUMBER';

function updateNumber(value) {
    return {type: UPDATE_NUMBER, value}
}

export function onPChange(dispatch) {
    return (no) => {
        dispatch(updateNumber({p: {value: parseInt(no, 10)}}));
    };
}

export function onQChange(dispatch) {
    return (no) => {
        dispatch(updateNumber({q: {value: parseInt(no, 10)}}));
    };
}

export function checkValidity(dispatch) {
    return () => {
        dispatch({type: CHECK_IS_PRIME});
    };
}