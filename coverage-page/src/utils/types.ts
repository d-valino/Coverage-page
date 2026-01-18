export interface NormalizedData {
	id: string,
	name: string,
	category: string,
	type: string,
	status: string,
	logoURL: string
}

export interface RequestData {
	id: string,
	title: string,
	logo: string,
	status: string,
	type: string
}

export type Category = {
	label: string
	value: string
	total: number
}