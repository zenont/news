export enum PayloadStatuses {
	ok = 'ok',
	error = 'error'
}

export type StatusType = {
	status: PayloadStatuses
}

export type CodeType = {
	code: string
}

export type MessageType = {
	message: string
}

export type PayloadErrorType = StatusType & CodeType & MessageType
