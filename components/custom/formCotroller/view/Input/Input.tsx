type InputProps = {
  label?: string
  valid?: boolean
  type: 'INPUT' | 'SWITCH' | 'RADIOBUTTON' | 'TEXTEREA' | 'COMBOBOX'
  placeholder?: string
  dataForm?: any | null
}
const Input = (props: InputProps) => {
  return <div>input</div>
}

export { Input }
