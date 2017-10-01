'use strict'
import { createStore } from 'redux'
import reducers from './reducers/index'
import { addToCart } from './actions/cartActions'
import { HP1, HP2, HP3 } from './books'
import { postBook, updateBook } from './actions/booksActions'

// create store
const store = createStore(reducers)

store.subscribe(function(){
  console.log('Current State is:', store.getState())
})

// adding three books
store.dispatch(postBook([HP1, HP2, HP3]))

// updating title of the first book
store.dispatch(updateBook({id: 1, title: 'harry potter and sorcerer\'s stone'}))

store.dispatch(addToCart([{id: 2}]))
