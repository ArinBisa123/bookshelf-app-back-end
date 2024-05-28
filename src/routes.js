const {addBookHandler, getAllBooksHandler, getBookByIDHandler, editBookByIDHandler, deleteBookByIDHandler, getBookByNameHandler, getBookByReadingStatus, getBookByReadingProgress } = require("./handler")
const Joi = require("@hapi/joi")
const routes=[
  {
    method: 'POST',
    path: '/books',
    handler:addBookHandler,
  },
  {
    method: 'GET',
    path: '/books',
    handler:getAllBooksHandler,
  },
  {
    method: 'GET',
    path: '/books/{bookId}',
    handler:getBookByIDHandler,
  },
  {
    method:'GET',
    path:'/books/search',
    handler: getBookByNameHandler,
    options:{
      validate:{
        query: Joi.object({
          name: Joi.string().optional(),
        }),
      }
    }
  },
  {
    method:'GET',
    path:'/books/progress',
    handler: getBookByReadingProgress,
    options:{
      validate:{
        query: Joi.object({
          name: Joi.string().optional(),
        }),
      }
    }
  },
  {
    method:'GET',
    path:'/books/status',
    handler: getBookByReadingStatus,
    options:{
      validate:{
        query: Joi.object({
          name: Joi.string().optional(),
        }),
      }
    }
  },
  {
    method: 'PUT',
    path: '/books/{bookId}',
    handler: editBookByIDHandler,
  },
  {
    method: 'DELETE',
    path: '/books/{bookId}',
    handler: deleteBookByIDHandler,
  },
]

module.exports = routes