/* eslint-disable no-nested-ternary */
import styled from 'styled-components'
import Checkmark from '../../assets/icons/Checkmark.svg'
import { colors } from '../../styles/theme'

export const Container = styled.div`
  align-items: ${({ alignItems }) => alignItems};
  display: flex;
  justify-content: flex-start;
  margin: ${({ margin }) => margin};
  width: ${({ width }) => width};
  ${({ breakWord }) => breakWord && 'word-break: break-word'};
`

export const Label = styled.label`
  cursor: pointer;
  user-select: none;
`

export const StyledCheckbox = styled.input`
  width: 100%;
  height: 100%;
  top: 0;
  position: absolute;
  margin: 0;
  opacity: 0;
  font-size: inherit;

  cursor: ${({ readOnly }) => (readOnly ? 'default' : 'pointer')};
  z-index: 3;
  pointer-events: ${({ readOnly }) => (readOnly ? 'none' : 'all')};
  border: none;

  &[type='checkbox']:checked ~ span:after {
    display: block;
  }

  &[type='checkbox']:disabled ~ span {
    background-color: ${colors.grey01};
    border: none;
    cursor: not-allowed;
  }

  &[type='checkbox']:disabled {
    cursor: not-allowed;
  }

  &:focus {
    & + span {
      outline: 1px dotted ${colors.blue02};
      outline-offset: -1px;
      transition: none;
    }
  }
`

export const ChecboxWrapper = styled.div`
  position: relative;
  margin: ${({ spacing }) => `0 ${spacing} 0 0`};
  height: 1.2rem;
  min-width: 1.2rem;
  > span {
    color: ${colors.white01};
    border-radius: ${({ rounded }) => (rounded ? '50%' : '0.3rem')};
    background-color: ${({ backgroundColor }) => colors[backgroundColor]};
    transition: all 0.2s ease;
    width: 100%;
    height: 100%;
    top: 0;
    margin-left: 0;
    position: absolute;
    z-index: 1;
    ${({ greenSuccessTheme, checked, rounded }) =>
      greenSuccessTheme && checked
        ? `background-color: ${colors.success};`
        : checked
        ? `background-color: ${colors.blue01};`
        : `border: 1px solid ${colors.grey01};
        ${rounded && 'transform: scale(0.5);'}
      `}
    }
  > span::after {
    display: none;
    color: ${colors.white01};
    background-image: url(${Checkmark});
    background-repeat: no-repeat;
    background-position: center;
    content: '';
    font-size: 1.7rem;
    font-weight: bold;
    width: 100%;
    height: 100%;
    position: absolute;
  }
`
