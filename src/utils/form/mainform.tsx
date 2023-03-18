import styled from 'styled-components'
import { FontColors } from '../themes/colors'
import { mediaQueries } from '../themes/mediaQueries'


interface FormProps {
    maxWidth?: string,
    fontSize?: string,
    height?: string,
    margin?: string
}


export const Mainform = styled.form<FormProps>`
display: flex;
height: ${({height})=> (height ? height : "2.8rem")}};
max-width: ${({maxWidth})=> (maxWidth ? maxWidth : "55vw")}};
border-radius: 0.5rem;
margin: ${({margin})=> (margin? margin : '1rem 0 0.5rem')};
font-size: ${({fontSize})=> (fontSize ? fontSize : "1rem")}};
position: relative;
background-color: white;
padding: 0.2rem 0.25rem;

${mediaQueries.tabport} {
  max-width: 100%;
}

.select {
  padding: 0 0.25rem;
  color: black;
  border-radius: 0.5rem 0 0 0.5rem;
  flex: 3;
  outline: none;
  border: none;
  border-radius: 0.5rem;
  margin-right: 0.5rem;
  
  option {
    height: auto;
  }
  &:focus {
    outline: none;
    border: 2px solid gray;
  }

  ${mediaQueries.tabport} {
    display: none;
  }
}

.searchInput {
  width: 100%;
  padding: 0 1rem;
  flex: 15;
  border: none;
  outline: none;
  height: auto;
  border-radius: 0.5rem;
  margin-left: 1rem;

  &:focus {
    outline: none;
    border: 2px solid gray;
    margin: 0 0.125rem;
    padding: 0.125rem 1rem;;
  }

  ${mediaQueries.tabport} {
    padding: 0 0.5rem;
  }
}

.searchButton {
  color: ${FontColors.darkTheme};
  background-color: #3498db;
  border: none;
  border-radius: 0.5rem;
  padding: 0 0.25rem;
  margin: 0.125rem 0.25rem;
  font-size: 1rem;
  width: 2.5rem;
  height: auto;
}
`