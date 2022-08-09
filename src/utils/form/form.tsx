import styled from 'styled-components'
import { FontColors } from '../themes/colors'
import { mediaQueries } from '../themes/mediaQueries'


interface FormProps {
    maxWidth?: string,
    fontSize?: string,
    height?: string,
    margin?: string
}


export const Form = styled.form<FormProps>`
display: flex;
height: ${({height})=> (height ? height : "2.8rem")}};
max-width: ${({maxWidth})=> (maxWidth ? maxWidth : "55vw")}};
border-radius: 40px;
margin: ${({margin})=> (margin? margin : '1rem 0 0.5rem')};
font-size: ${({fontSize})=> (fontSize ? fontSize : "1rem")}}

${mediaQueries.tabport} {
  max-width: 100%;
}

.select {
  padding: 0 1rem;
  color: black;
  border-radius: 5px 0 0 5px;
  flex: 3;
  &:focus {
    outline: none;
  }

  ${mediaQueries.tabport} {
    display: none;
  }
}

.searchInput {
  width: 100%;
  padding: 0 1rem;
  flex: 15;

  &:focus {
    outline: none;
    border: #3498db 1px solid;
  }

  ${mediaQueries.tabport} {
    padding: 0 0.5rem;
  }
}

.searchButton {
  color: ${FontColors.darkTheme};
  background-color: #3498db;
  border: none;
  padding: 0 1rem;
  border-radius: 0 5px 5px 0;
  font-size: 1rem;
  max-width: 4rem;
}
`