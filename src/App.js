import sc from 'styled-components'
import Button from './Button'
import TextInput from './TextInput'
import Checkbox from './Checkbox'
import Select from './Select'
import React from 'react'

export default function App() {
  const [buttonColor, setButtonColor] = React.useState()
  const [checkList, setCheckList] = React.useState([false, false])

  function updateCheckedCreator(index) {
    const currentIndex = index

    return function(value) {
      const newCheckList = [...checkList]
      newCheckList[currentIndex] = value
      setCheckList(newCheckList)
    }
  }

  return <>
    <AppJSX
      buttonColor={buttonColor}
      setButtonColor={setButtonColor}
      checkList={checkList}
      updateCheckedCreator={updateCheckedCreator}
    />
  </>
}

function AppJSX({ buttonColor, setButtonColor, checkList, updateCheckedCreator }) {
  return <>
    <StyledApp className="App">
      <div className="grid">
        <Checkbox setChecked={updateCheckedCreator(0)} />
        <Button color={checkList[0] ? buttonColor : undefined} />
        <Checkbox setChecked={updateCheckedCreator(1)} />
        <Button color={checkList[1] ? buttonColor : undefined} />
      </div>
      <div className="color">
        <label>Select color:</label>
        <Select setButtonColor={setButtonColor} />
      </div>
    </StyledApp>
  </>
}

const StyledApp = sc.div`
  background-color: #000;
  height: 100vh;
  padding: 20px;
  margin: 0 auto;

  .grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  .color {
    margin: 20px 0 0 20px;

    label {
      color: white;
      margin-right: 10px;
    }
  }

  .grid,
  .color {
    width: 20vw;
  }
`
