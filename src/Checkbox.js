import sc from 'styled-components'

export default function Checkbox({ setChecked }) {
  function onClick(event) {
    setChecked(event.target.checked)
  }

  return <CheckboxJSX onClick={onClick}/>
}

function CheckboxJSX({ onClick }) {
  return <>
    <StyledCheckbox type="checkbox" onClick={onClick}/>
  </>
}

const StyledCheckbox = sc.input`
  color: green;
`
