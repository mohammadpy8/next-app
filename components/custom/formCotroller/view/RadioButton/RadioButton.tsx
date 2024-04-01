type RadioButtonProps = {
  label?: string
  valid?: boolean
  type: 'INPUT' | 'SWITCH' | 'RADIOBUTTON' | 'TEXTEREA' | 'COMBOBOX'
  placeholder?: string
  dataForm?: any | null
  customSx: null
}
const RadioButton = (props: RadioButtonProps) => {
  return <div>radio</div>
}

export { RadioButton }
