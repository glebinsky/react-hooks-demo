import sc from 'styled-components'

export default function Checkbox() {
  return <CheckboxJSX />
}

function CheckboxJSX() {
  return <>
    <StyledCheckbox type="checkbox" />
  </>
}

const StyledCheckbox = sc.input`
  color: green;
`
