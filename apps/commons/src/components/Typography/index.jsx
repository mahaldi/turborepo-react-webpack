/* eslint-disable import/prefer-default-export */
import PropTypes from 'prop-types'
import React from 'react'
import * as Types from './style'

export const Typography = ({
  display,
  align,
  letterSpacing,
  lineHeight,
  children,
  color,
  size,
  variant,
  weight,
  elipsis,
  lineClamp,
  capitalize,
  wordBreak,
  margin,
  textDecoration,
  fontStyle,
}) => {
  const Type = Types[variant] || Types.body

  return (
    <Type
      display={display}
      align={align}
      letterSpacing={letterSpacing}
      lineHeight={lineHeight}
      color={color}
      size={size}
      weight={weight}
      elipsis={elipsis}
      lineClamp={lineClamp}
      capitalize={capitalize}
      wordBreak={wordBreak}
      margin={margin}
      textDecoration={textDecoration}
      fontStyle={fontStyle}
    >
      {children}
    </Type>
  )
}

Typography.defaultProps = {
  display: undefined,
  align: 'left',
  color: 'inherit',
  letterSpacing: undefined,
  lineHeight: undefined,
  margin: '0',
  weight: 400,
  variant: 'body',
  size: 'inherit',
  elipsis: false,
  lineClamp: undefined,
  capitalize: false,
  wordBreak: undefined,
  textDecoration: undefined,
  fontStyle: undefined,
}
Typography.propTypes = {
  display: PropTypes.string,
  align: PropTypes.string,
  letterSpacing: PropTypes.string,
  lineHeight: PropTypes.string,
  children: PropTypes.node.isRequired,
  color: PropTypes.string,
  size: PropTypes.string,
  variant: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'h7', 'p', 'label', 'body']),
  weight: PropTypes.oneOf([300, 400, 500,600, 700, 'bold', 'normal']),
  margin: PropTypes.string,
  elipsis: PropTypes.bool,
  lineClamp: PropTypes.number,
  capitalize: PropTypes.bool,
  wordBreak: PropTypes.string,
  textDecoration: PropTypes.string,
  fontStyle: PropTypes.string,
}
