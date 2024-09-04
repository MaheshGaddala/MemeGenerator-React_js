// Style your components here
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;

  align-items: flex-start;
  height: 100vh;
`

export const Heading = styled.h1`
  color: #35469c;
`
export const Label = styled.label`
  color: #7e858e;
  font-size: 15px;
  font-family: 'Roboto';
`

export const Generate = styled.button`
  background-color: #0b69ff;
  color: #ffffff;
`
export const MemeContainer = styled.div`
  height: 100vh;
  width: 100vw;
  background-size: cover;
  background-image: url(${props => props.backgroundImage});
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`
export const TextContent = styled.p`
  color: #ffffff;
  font-size: ${props => props.activeFontSizeId}px;
`
export const CustomForm = styled.form``
