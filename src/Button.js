import sc from 'styled-components'
import React from 'react'

export default function Button({ color }) {
  const [count, setCount] = React.useState(0)

  function onClick() {
    setCount(count + 1)
  }

  return <>
    <ButtonJSX
      onClick={onClick}
      count={count}
      color={color}
    />
  </>
}

function ButtonJSX({ onClick, count, color }) {
  return <>
    <StyledButton onClick={onClick} color={color}>
      Click count {count}
    </StyledButton>
  </>
}

const StyledButton = sc.button`
  min-width: 60px;
  height: 40px;
  color: black;
  background-color: ${props => (props.color || 'white')};
`
