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
const middleware = applyMiddleware(thunk)
export function configureStore() {
	const store = createStore(
		rootReducer,
		applyMiddleware(epicMiddleware)
	)

	return store
}

const lol = configureStore()
export default 	lol
