import sc from 'styled-components'
import Button from './Button'
import TextInput from './TextInput'
import Checkbox from './Checkbox'
import Select from './Select'
import React from 'react'

export default function App() {
  const [buttonColor, setButtonColor] = React.useState(null)

  return <AppJSX setButtonColor={setButtonColor} />
}

function AppJSX({ setButtonColor }) {
  return <>
    <StyledApp className="App">
      <div>
        <Checkbox />
        <Button />
      </div>
      <div>
        <Checkbox />
        <Button />
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
