'use strict'
import { createStore } from 'redux';

// define reducers
const reducer = function(state=[], action){
  switch(action.type){
    case 'POST_BOOK':
      return state = action.payload;
      break;
  }
  return state;
}

// create store
const store = createStore(reducer);

store.subscribe(function(){
  console.log('Current State is:', store.getState());
  console.log('Price of second book: ', store.getState()[1].price);
})

// create and dispatch actions
store.dispatch({
  type: 'POST_BOOK',
  payload: [
    {
      'title': 'harry potter and philosopher\' stone',
      'author': 'j. k. rowling',
      'price': 772
    },
    {
      'title': 'harry potter and the chamber of secrets',
      'author': 'j. k. rowling',
      'price': 800
    }
  ]
})
