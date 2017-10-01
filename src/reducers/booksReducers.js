'use strict'

export function booksReducers(state={books:[]}, action){
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
      console.log("Updated book is:", newBook)
      return {
        books: [
          ...updateBooks.slice(0, indexToUpdate), newBook,
          ...updateBooks.slice(indexToUpdate+1)
        ]
      }

  }
  return state
}
