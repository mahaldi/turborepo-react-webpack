/* eslint-disable arrow-body-style */
/* eslint-disable import/prefer-default-export */
import React from 'react'
import PropTypes from 'prop-types'
import { Typography } from '../Typography'
import { Container, StyledCheckbox, Label, ChecboxWrapper } from './style'

export const Checkbox = ({
  id,
  label,
  checked,
  disabled,
  labelColor,
  margin,
  onChange,
  rounded,
  spacing,
  readOnly,
  nowrap,
  width,
  alignItems,
  backgroundColor,
  breakWord,
  greenSuccessTheme,
}) => {

  return (
    <Container margin={margin} width={width} alignItems={alignItems} breakWord={breakWord}>
      <ChecboxWrapper
        spacing={spacing}
        rounded={rounded}
        checked={checked}
        backgroundColor={backgroundColor}
        greenSuccessTheme={greenSuccessTheme}
      >
        <StyledCheckbox
          checked={checked}
          disabled={disabled}
          onChange={e => onChange(e.target.checked)}
          rounded={rounded}
          type="checkbox"
          readOnly={readOnly}
          id={id}
          // eslint-disable-next-line jsx-a11y/tabindex-no-positive
          tabIndex="1"
        />
        <span />
      </ChecboxWrapper>

      {label && (
        <Label htmlFor={id}>
          <Typography
            color={disabled ? 'grey01' : labelColor}
            nowrap={nowrap}
            opacity={disabled ? 0.4 : 1}
            size="14px"
            variant="body"
          >
            {label}
          </Typography>
        </Label>
      )}
    </Container>
  )
}

Checkbox.defaultProps = {
  checked: false,
  disabled: false,
  label: '',
  labelColor: 'grey600',
  margin: '0 5.6rem 0 0',
  rounded: false,
  spacing: '8px',
  readOnly: false,
  onChange: () => {},
  width: 'min-content',
  nowrap: true,
  alignItems: 'center',
  id: null,
  backgroundColor: '',
  breakWord: false,
  greenSuccessTheme: false,
}

Checkbox.propTypes = {
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  label: PropTypes.string,
  labelColor: PropTypes.string,
  margin: PropTypes.string,
  onChange: PropTypes.func,
  rounded: PropTypes.bool,
  spacing: PropTypes.string,
  readOnly: PropTypes.bool,
  width: PropTypes.string,
  nowrap: PropTypes.bool,
  alignItems: PropTypes.string,
  id: PropTypes.string,
  backgroundColor: PropTypes.string,
  breakWord: PropTypes.bool,
  greenSuccessTheme: PropTypes.bool,
}
