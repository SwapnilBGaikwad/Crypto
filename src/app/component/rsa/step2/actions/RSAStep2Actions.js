export const UPDATE_E_VALUE = "UPDATE_E_VALUE";
export const VALIDATE_E_VALUE = "VALIDATE_E_VALUE";

const onEChange = (dispatch) => {
    return (e) => {
        dispatch({
            type: UPDATE_E_VALUE,
            possibleE: e
        });
    }
};

const checkEValidity = (dispatch) => {
    return (possibleE) => {
        dispatch({
            type: VALIDATE_E_VALUE,
            possibleE
        });
    };
};

export {onEChange,checkEValidity};