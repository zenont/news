import { combineReducers } from 'redux'
import appReducer from './app'
import articleReducer from './article'

export default combineReducers({
	app: appReducer,
	article: articleReducer
})
