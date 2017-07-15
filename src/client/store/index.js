import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from '../reducers'

const middleware = applyMiddleware(thunk)
console.log('reducer!!!!!!>>>>>>>>', rootReducer)
export default createStore(rootReducer, middleware)
