import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import currentUser from './reducers/users/currentUser';
import loginForm from './reducers/users/loginForm';
import signupForm from './reducers/users/signupForm';
import events from './reducers/events/events';

const reducer = combineReducers({
  currentUser,
  loginForm,
  signupForm,
  events
})
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)))

export default store
