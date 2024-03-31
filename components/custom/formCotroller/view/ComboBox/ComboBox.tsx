type ComboBoxProps = {
  label?: string
  valid?: boolean
  type: 'INPUT' | 'SWITCH' | 'RADIOBUTTON' | 'TEXTEREA' | 'COMBOBOX'
  placeholder?: string
  dataForm?: any | null
}
const ComboBox = (props: ComboBoxProps) => {
  return <div>combo</div>
}

export { ComboBox }
