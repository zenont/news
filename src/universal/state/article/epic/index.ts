import { combineEpics } from 'redux-observable'
import topHeadlinesEpic from './top-headlines'

export default combineEpics(
	topHeadlinesEpic,
)
