import { ClassAttributes } from 'react'
import { LinkProps } from 'react-router-dom'
import { Article } from '../../model'

export interface IListContainerProps extends ClassAttributes<HTMLDivElement> {

}

export interface IListContainerStateProps {
	readonly articles: ReadonlyArray<Article>
	readonly fetched: boolean
	readonly fetching: boolean
}

export interface IListContainerDispatchProps {
	readonly onLoad: () => void
	readonly onUnload: () => void
}

export type ListContainerPropsType =
	IListContainerProps &
	IListContainerStateProps &
	IListContainerDispatchProps &
	LinkProps

export type ListContainerInjectedPropsType =
	IListContainerStateProps &
	IListContainerDispatchProps
