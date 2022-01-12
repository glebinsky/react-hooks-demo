import sc from 'styled-components'
import React from 'react'

export default function Select({ setButtonColor }) {
  const colors = ['aqua', 'tan', 'pink']

  function onChange(event) {
    setButtonColor(event.target.value)
  }

  return <>
    <SelectJSX
      onChange={onChange}
      colors={colors}
      defaultValue="select"
    />
  </>
}

function SelectJSX({ onChange, colors, defaultValue }) {
  return <>
    <StyledSelect onChange={onChange} defaultValue={defaultValue}>
      <StyledOption value="select">Select</StyledOption>
      { colors.map(color =>
        <StyledOption key={color} value={color}>{color}</StyledOption>) }
    </StyledSelect>
  </>
}

const StyledSelect = sc.select`
  background-color: white;
  height: 40px;
`

const StyledOption = sc.option`
`
