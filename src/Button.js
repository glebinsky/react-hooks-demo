import sc from 'styled-components'
import React from 'react'

export default function Button(props) {
  const [count, setCount] = React.useState(0)

  function onClick() {
    setCount(count + 1)
  }

  return <>
    <ButtonJSX
      onClick={onClick}
      count={count}
    />
  </>
}

function ButtonJSX({ onClick, count }) {
  return <>
    <StyledButton onClick={onClick}>
      Click count {count}
    </StyledButton>
  </>
}

const StyledButton = sc.button`
  min-width: 60px;
  height: 40px;
  color: black;
  background-color: wheat;
`
