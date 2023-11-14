/* eslint-disable import/prefer-default-export */
import styled, { css } from 'styled-components'

export const SidebarWrapper = styled.div`
	width: 20%;
	background-color: ${({theme}) => theme.black03};
	color: ${({ theme }) => theme.white01};
	padding: 20px;
	position: fixed;
	top: 0;
	left: 0;
	bottom: 0;
	height: 100%;
	z-index: 99;
	${() => css`
		ul {
			list-style: none;
			padding: 0;

			li {
				margin-bottom: 10px;
				cursor: pointer;

				&:hover {
					text-decoration: underline;
				}
			}
		}
	`}
`
