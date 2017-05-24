import { applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk';
import RootReducer from '../reducers/RootReducer';


export default() => {
    return createStore(RootReducer,
      compose(applyMiddleware(thunk),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));
}
