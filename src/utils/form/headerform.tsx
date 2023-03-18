import styled from 'styled-components'
import { mediaQueries } from '../themes/mediaQueries'


interface FormProps {
    maxWidth?: string,
    fontSize?: string,
    height?: string,
    margin?: string
}


export const Headerform = styled.form<FormProps>`
display: flex;
height: ${({height})=> (height ? height : "2.8rem")}};
max-width: ${({maxWidth})=> (maxWidth ? maxWidth : "auto")}};
border-radius: 40px;
margin: ${({margin})=> (margin? margin : '1rem 0 0.5rem')};
font-size: ${({fontSize})=> (fontSize ? fontSize : "1rem")}};
position: relative;

${mediaQueries.tabport} {
  max-width: 100%;
}


.searchIcon {
position: absolute;
left: 0;
bottom: 0;
top:0;
margin-left: 0.5rem;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
vertical-align: middle;
}

.searchInput {
  width: 30rem;
  padding: 0 1rem 0 2rem;
  border-radius: 0.5rem;
  background-color: #F8F9FA;
  outline: none;
  border: none;

  &::placeholder {
    font-size: 1rem;
    font-weight: 700;
  }

  &:focus {
    outline: none;
    border: gray 2px solid;
  }

  ${mediaQueries.tabport} {
    padding: 0 0.5rem;
  }
}
`