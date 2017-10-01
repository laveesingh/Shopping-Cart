'use strict'
import { applyMiddleware, createStore } from 'redux'
import logger from 'redux-logger'
import reducers from './reducers/index'
import { addToCart } from './actions/cartActions'
import { HP1, HP2, HP3 } from './books'
import { postBook, updateBook } from './actions/booksActions'

// create store
const middleware = applyMiddleware(logger)
const store = createStore(reducers, middleware)

// adding three books
store.dispatch(postBook([HP1, HP2, HP3]))

// updating title of the first book
store.dispatch(updateBook({id: 1, title: 'harry potter and sorcerer\'s stone'}))

store.dispatch(addToCart([{id: 2}]))
