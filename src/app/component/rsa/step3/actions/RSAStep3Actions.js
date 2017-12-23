export const UPDATE_D_VALUE = "UPDATE_D_VALUE";
export const VALIDATE_D_VALUE = "VALIDATE_D_VALUE";

const onDChange = (dispatch) => {
    return (d) => {
        dispatch({
            type: UPDATE_D_VALUE,
            d
        });
    }
};

const checkDValidity = (dispatch) => {
    return (possibleD) => {
        dispatch({
            type: VALIDATE_D_VALUE,
            possibleD
        });
    };
};

export {onDChange,checkDValidity};