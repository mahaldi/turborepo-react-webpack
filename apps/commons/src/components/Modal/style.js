import styled from 'styled-components'

export const Wrapper = styled.div(({ visible, position, zIndex }) => ({
  minHeight: '100vh',
  width: '100%',
  display: visible ? 'flex' : 'none',
  justifyContent: 'center',
  alignItems: 'center',
  background: 'rgba(0, 0, 0, 0.8)',
  position,
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  overflow: 'hidden',
  zIndex,
	transition: 'all .3s ease-in-out'
}))

export const PopupContainer = styled.div`
  position: relative;
  /* width: calc(100% - 17.2rem); */
  width: ${({ width }) => width};
  /* margin-top: 5.8rem;
  margin-bottom: 5.8rem;
  min-width: 49.6rem;
  min-height: 30rem; */
  box-shadow: 0.4rem 0.4rem 1rem rgba(0, 0, 0, 0.1);
  border-radius: 0.6rem;
  padding: ${({ padding }) => padding};
  display: ${({ display }) => display || 'flex'};
  flex-direction: column;
  align-items: center;
  max-height: ${({ maxHeight }) => maxHeight};
  overflow: ${({ overflow }) => overflow};
	background-color: white;
`
