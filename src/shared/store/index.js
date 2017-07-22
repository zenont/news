import { combineReducers, applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import { createEpicMiddleware, combineEpics } from 'redux-observable'
import articleReducer from './article/reducer'
import articleEpics from './article/epics'
import sourceReducer from './source/reducer'
import sourceEpics from './source/epics'

const rootReducer = combineReducers({
	article: articleReducer,
	source: sourceReducer,
})

const rootEpic = combineEpics(
	articleEpics,
	sourceEpics,
)
const epicMiddleware = createEpicMiddleware(rootEpic)
const middleware = applyMiddleware(thunk, epicMiddleware)
export default createStore(
	rootReducer,
	middleware
)
