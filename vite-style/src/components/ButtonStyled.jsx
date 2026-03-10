import styled from "styled-components"

const StyledButton = styled.button`
    background-color: ${(props) => props.secondary ? "yellow" : "orange"};
   color: blue; 
    border: 10px;
    padding: 10px;
`

export default function ButtonStyled({ secondary, text }) {
    return (
        <StyledButton secondary={secondary}>
            {text}
        </StyledButton>
    )
}