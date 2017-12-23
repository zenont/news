import { Observable } from 'rxjs/Rx'
import { Action, MiddlewareAPI } from 'redux'
import { ActionsObservable, Epic, combineEpics } from 'redux-observable'
import { IRootState } from '../../store'
import { FacebookActionTypes, IFacebookRejectAuthAction } from '../types'
import { facebookLogin } from '../../../ajax'
import { fulfillFacebookAuth, rejectFacebookAuth } from '../creators'

export const facebookLoginUser: Epic<Action, IRootState> =
	(action$: ActionsObservable<Action>, store: MiddlewareAPI<IRootState>) =>
		action$.ofType(FacebookActionTypes.requestAuth)
			.mergeMap(() =>
				facebookLogin()
					.map(response => fulfillFacebookAuth(response.authResponse.accessToken, response.authResponse.userID))
					.takeUntil(action$.ofType(FacebookActionTypes.cancelAuth))
					.catch(error => Observable.of<IFacebookRejectAuthAction>({
						type: FacebookActionTypes.rejectAuth,
						error
					}))
			)

export default combineEpics(
	facebookLoginUser,
)
