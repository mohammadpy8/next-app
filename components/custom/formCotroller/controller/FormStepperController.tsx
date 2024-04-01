import {
  Input,
  ComboBox,
  RadioButton,
  Switch,
  TextErea,
} from '@/components/custom'

interface FormStepprDataItem {
  page: number
  label?: string
  valid?: boolean
  type: 'INPUT' | 'SWITCH' | 'RADIOBUTTON' | 'TEXTEREA' | 'COMBOBOX'
  placeholder?: string
  dataForm?: any | null
  customSx: null
}

type FormStepperControllerProps = {
  formStepperData: Array<Array<FormStepprDataItem>> | null
}

const FormStepperController = (props: FormStepperControllerProps) => {
  console.log("stepper==>", props)
  return <div></div>
}

export { FormStepperController }
