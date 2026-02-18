const redux = require('redux');

/*
    input will take old state and dispatched action and return new state object (same in as output); state can be a nnumber or string as well
     - reducer is a pure function, it should not mutate the state, it should return a new state object
     - reducer should not have side effects, it should not make API calls or dispatch actions
     - reducer should not return undefined, it should return the initial state if the state is undefined
*/
const counterReducer = (state = { counter: 0 }, action) => {
    if (action.type === 'increment') {
        return {
            counter: state.counter + 1
        };
    }
    if (action.type === 'decrement') {
        return {
            counter: state.counter - 1
        };
    }

    return state; // if the action type is not recognized, return the current state
};

const store = redux.createStore(counterReducer); // createStore is deprecated in favor of configureStore from @reduxjs/toolkit

//console.log(store.getState());

// subscribe to the store to listen for state changes
const counterSubscriber = () => {
    const latestState = store.getState();
    console.log(latestState);
};

store.subscribe(counterSubscriber); // subscribe to the store to listen for state changes

 // dispatch an action to update the state; type string should be unique
store.dispatch({ type: 'increment' });
store.dispatch({ type: 'decrement' });