export type PayloadType = {
	status: string
}

export type MessageType = {
	message: string
}

export type ErrorType = PayloadType & MessageType
