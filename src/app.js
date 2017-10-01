'use strict'
import { createStore } from 'redux'

// define reducers
const reducer = function(state={books:[]}, action){
  switch(action.type){
    case 'POST_BOOK':
      let books = state.books.concat(action.payload)
      return { books }
      break
  }
  return state
}

// create store
const store = createStore(reducer)

store.subscribe(function(){
  console.log('Current State is:', store.getState())
  console.log('Price of second book: ', store.getState().books[1].price)
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
store.dispatch({
  type: 'POST_BOOK',
  payload: {
      'title': 'harry potter and the prisoner of azakaban',
      'author': 'j. k. rowling',
      'price': 650
  }
})
