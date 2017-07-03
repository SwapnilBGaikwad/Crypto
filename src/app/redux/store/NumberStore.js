import {createStore} from "redux";
import dispatcher from "../dispatcher/StoreDispatcher";

const store = createStore(dispatcher);

store.subscribe(() => {
    console.log('State change ', store.getState());
});

export default store;
