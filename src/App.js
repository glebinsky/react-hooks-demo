import sc from 'styled-components'
import Button from './Button'
import TextInput from './TextInput'
import Checkbox from './Checkbox'
import Select from './Select'
import React from 'react'

export default function App() {
  const [buttonColor, setButtonColor] = React.useState()

  return <AppJSX buttonColor={buttonColor} setButtonColor={setButtonColor} />
}

function AppJSX({ buttonColor, setButtonColor }) {
  return <>
    <StyledApp className="App">
      <div>
        <Checkbox />
        <Button color={buttonColor} />
      </div>
      <div>
        <Checkbox />
        <Button color={buttonColor} />
      </div>
      <Select setButtonColor={setButtonColor} />
    </StyledApp>
  </>
}

const StyledApp = sc.div`
  background-color: #000;
  height: 100vh;
  padding: 20px;
`
