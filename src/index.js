import { applyMiddleware,createStore} from 'redux'
import axios from 'axios';
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'

const logger = createLogger()

const initialState = {
    fetching: false,
    fetched: false,
    users: [],
    error: null
}

const reducers = (state=initialState, action) => {
    switch (action.type){
        case "FETCH_USERS_START": {
            return {...state, fetching: true}
            break;
        }
        case "FETCH_USERS_ERROR": {
            return {...state, fetching: false, error: action.payload}
            break;
        }
        case "RECEIVE_USERS": {
            return {...state, fetching: false, fetched: true, users: action.payload}
            break;
        }
    }
    return state
}

const store = createStore(reducers, applyMiddleware(thunk, logger));

store.dispatch((dispatch) => {
    dispatch({type: "FETCH_USERS_START"})
    axios.get("http://rest.learncode.academy/api/wstren/users")
        .then((response) => {
            dispatch({type: "RECEIVE_USERS", payload: response.data})
        })
        .catch((err) => {
            dispatch({type: "FETCH_USERS_ERROR", payload: err})
        })
    // do something async

})