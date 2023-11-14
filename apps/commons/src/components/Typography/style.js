import styled, { css } from 'styled-components'

const style = css`
  ${({ display }) => display && `display: ${display};`}
  ${({ align }) => align && `text-align: ${align};`}
  ${({ color, theme }) => color && `color: ${theme[color] || color};`}
  ${({ letterSpacing }) => letterSpacing && `letter-spacing: ${letterSpacing};`}
  ${({ lineHeight }) => lineHeight && `line-height: ${lineHeight};`}
  ${({ size }) => size && `font-size: ${size};`}
  ${({ weight }) => weight && `font-weight: ${weight};`}
  ${({ margin }) => margin && `margin: ${margin};`}
  ${({ capitalize }) => capitalize && `text-transform: capitalize;`}
  ${({ wordBreak }) => wordBreak && `word-break: ${wordBreak}`}
  ${({ textDecoration }) => textDecoration && `text-decoration: ${textDecoration}`}
  ${({ fontStyle }) => fontStyle && `font-style: ${fontStyle}`}
  ${({ elipsis }) => elipsis && `
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  `}
  ${({ lineClamp }) => lineClamp && `
    display: -webkit-box;
    -webkit-line-clamp: ${lineClamp};
    -webkit-box-orient: vertical;
    overflow: hidden;
  `}
`

export const h1 = styled.h1`${style}`
export const h2 = styled.h2`${style}`
export const h3 = styled.h3`${style}`
export const h4 = styled.h4`${style}`
export const h5 = styled.h5`${style}`
export const h6 = styled.h6`${style}`
export const p = styled.p`${style}`
export const label = styled.label`${style}`
export const body = styled.div`${style}`
