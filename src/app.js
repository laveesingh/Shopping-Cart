'use strict'
import { createStore } from 'redux';

// define reducers
const reducer = function(state=0, action){
  switch(action.type){
    case 'INCREMENT':
      return state + action.payload;
      break;
    case 'DECREMENT':
      return state - action.payload;
      break;
  }
  return state;
}

// create store
const store = createStore(reducer);

store.subscribe(function(){
  console.log('Current State is:', store.getState());
})

// create and dispatch actions
store.dispatch({ type: 'DECREMENT', payload: 1 });
store.dispatch({ type: 'INCREMENT', payload: 1 });
store.dispatch({ type: 'INCREMENT', payload: 1 });
store.dispatch({ type: 'INCREMENT', payload: 1 });
store.dispatch({ type: 'DECREMENT', payload: 1 });
store.dispatch({ type: 'DECREMENT', payload: 1 });
store.dispatch({ type: 'INCREMENT', payload: 1 });
