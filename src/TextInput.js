import sc from 'styled-components'

export default function TextInput() {
  return <TextInputJSX />
}

function TextInputJSX() {
  return <>
    <StyledTextInput type="text" />
  </>
}

const StyledTextInput = sc.input`
  background-color: white;
  color: navy;
  height: 40px;
`
