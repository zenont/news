import { combineReducers, applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import { createEpicMiddleware, combineEpics } from 'redux-observable'
import { reducer as newsReducer, epics as newsEpics } from './news'

const rootReducer = combineReducers({
	news: newsReducer
})

const rootEpic = combineEpics(
	newsEpics,
)
const epicMiddleware = createEpicMiddleware(rootEpic)
const middleware = applyMiddleware(thunk, epicMiddleware)
export default createStore(rootReducer, middleware)
