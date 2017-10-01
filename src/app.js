'use strict'
import { createStore } from 'redux'

// define reducers
const reducer = function(state={books:[]}, action){
  switch(action.type){

    case 'POST_BOOK':
      //let books = state.books.concat(action.payload)
      //return { books }
      return { books: [...state.books, ...action.payload]}  // ... operator requires babel-preset-stage-1
      break

    case 'DELETE_BOOK':
      const deleteBooks = [...state.books]
      const indexToDelete = deleteBooks.findIndex(function(book){
        return book.id == action.payload.id
      })
      return { 
        books: [
          ...deleteBooks.slice(0, indexToDelete), 
          ...deleteBooks.slice(indexToDelete+1)
        ]
      }
      break

    case 'UPDATE_BOOK':
      const updateBooks = [...state.books]
      const indexToUpdate = updateBooks.findIndex(function(book){
        return book.id == action.payload.id
      })
      const newBook = {
        ...updateBooks[indexToUpdate],
        title: action.payload.title
      }
      return {
        books: [
          ...updateBooks.slice(0, indexToUpdate), newBook,
          ...updateBooks.slice(indexToUpdate+1)
        ]
      }

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
      'id': 1,
      'title': 'harry potter and philosopher\' stone',
      'author': 'j. k. rowling',
      'price': 772
    },
    {
      'id': 2,
      'title': 'harry potter and the chamber of secrets',
      'author': 'j. k. rowling',
      'price': 800
    }
  ]
})
store.dispatch({
  type: 'POST_BOOK',
  payload: [
    {
      'id': 3,
      'title': 'harry potter and the prisoner of azakaban',
      'author': 'j. k. rowling',
      'price': 650
    }
  ]
})

store.dispatch({
  type: 'DELETE_BOOK',
  payload: {
    'id': 2
  }
})

store.dispatch({
  type: 'UPDATE_BOOK',
  payload: {
    'id': 1,
    'title': 'harry potter and sorcerer\'s stone'
  }
})
