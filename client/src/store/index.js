import { createStore, applyMiddleware, compose } from 'redux';
import reducer from './reducer';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const configureStore = initialState => { 
    const store = createStore(reducer, initialState, composeEnhancers(
        applyMiddleware()
    ));
    return store;
};

export default configureStore;