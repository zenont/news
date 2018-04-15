import { ClassAttributes } from 'react'
import { RouteComponentProps } from 'react-router-dom'
import { Article, Country } from '../../model'

export interface IListContainerProps extends ClassAttributes<HTMLDivElement> {

}

export interface IListContainerStateProps {
	readonly articles: ReadonlyArray<Article>
	readonly fetched: boolean
	readonly fetching: boolean
	readonly country: Country
}

export interface IListContainerDispatchProps {
	readonly onLoad: (country: Country) => void
	readonly onUnload: () => void
}

export type ListContainerPropsType =
	IListContainerProps &
	IListContainerStateProps &
	IListContainerDispatchProps &
	RouteComponentProps<{}>

export type ListContainerInjectedPropsType =
	IListContainerStateProps &
	IListContainerDispatchProps
