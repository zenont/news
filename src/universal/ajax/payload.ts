export enum PayloadStatuses {
	ok = 'ok',
	error = 'error'
}

export type PayloadType = {
	status: PayloadStatuses
}

export type CodeType = {
	code: string
}

export type MessageType = {
	message: string
}

export type PayloadErrorType = PayloadType & CodeType & MessageType
