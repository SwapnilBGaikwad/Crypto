const dispatcher = (state, action) => {
    if (action.type === 'INCREMENT') {
        return state + 1;
    }
    else if (action.type === 'DECREMENT') {
        return state - 1;
    }
    else {
        return 0;
    }
};

export default dispatcher;