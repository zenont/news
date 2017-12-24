export type EverythingRequestType = {
	q?: string,
	language?: string,
	country?: string,
	sources?: string[],
	domains?: string[],
	from?: Date,
	to?: Date,
	page?: number,
	sortBy?: string,
}
