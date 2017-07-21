import { combineReducers } from 'redux'
import appReducer from './app'
import articleReducer from './news'

export default combineReducers({
	app: appReducer,
	news: articleReducer
})
