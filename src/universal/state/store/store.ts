import thunk from 'redux-thunk'
import { Reducer, Store, applyMiddleware, combineReducers, createStore } from 'redux'
import { combineEpics, createEpicMiddleware } from 'redux-observable'
import articleReducer, { articleEpic } from '../article'

export interface IRootState {

}

const rootReducer: Reducer<IRootState> = combineReducers({
	article: articleReducer
})
const rootEpic = combineEpics(articleEpic)
const epicMiddleware = createEpicMiddleware(rootEpic)
const middleware = applyMiddleware(epicMiddleware, thunk)

export default createStore(rootReducer, middleware)


