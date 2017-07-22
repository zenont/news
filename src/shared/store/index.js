import { combineReducers, applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import { createEpicMiddleware, combineEpics } from 'redux-observable'
import { reducer as articleReducer } from './article/reducer'
import { reducer as categoryReducer } from './caregory/reducer'
import { epics as articleEpics } from './article/epics'
import { epics as categoryEpics } from './caregory/epics'

const rootReducer = combineReducers({
	artice: articleReducer,
	category: categoryReducer
})

const rootEpic = combineEpics(
	articleEpics,
	categoryEpics
)
const epicMiddleware = createEpicMiddleware(rootEpic)
const middleware = applyMiddleware(thunk, epicMiddleware)
export default createStore(
	rootReducer,
	middleware
)
