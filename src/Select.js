import sc from 'styled-components'
import React from 'react'

export default function Select({ setButtonColor }) {
  const colors = ['aqua', 'tan', 'pink']

  function onChange(event) {
    const newColor = colors[event.target.value]
    setButtonColor(newColor)
  }

  return <>
    <SelectJSX
      onChange={onChange}
      colors={colors}
      defaultValue={colors[0]}
    />
  </>
}

function SelectJSX({ onChange, colors, defaultValue }) {
  return <>
    <StyledSelect onChange={onChange} defaultValue={defaultValue}>
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
