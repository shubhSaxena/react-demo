import { applyMiddleware,createStore} from 'redux'


const reducers = (initialState=0, action) => {
    if (action.type === "INC"){
        return initialState+1;
    } else if (action.type === "DEC"){
        return initialState-1;
    } else if (action === "E")
        throw new Error("errrorrr!!")
}

const logger = (store) => (next) => (action) => {
    console.log("action fired", action);
    next(action);
}

const error = (store) => (next) => (action) => {
    try {
        next(action);
    } catch (e) {
        console.log("error here", e);
    }
}


const middleware = applyMiddleware(logger, error);

const store = createStore(reducers, 1, middleware);

store.subscribe(() => {
    console.log("store changed", store.getState())
})

store.dispatch({type: "INC"})
store.dispatch({type: "INC"})
store.dispatch({type: "INC"})
store.dispatch({type: "INC"})
store.dispatch({type: "DEC"})
store.dispatch({type: "DEC"})
store.dispatch({type: "E"})