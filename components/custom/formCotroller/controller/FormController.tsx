import {
  ComboBox,
  Input,
  RadioButton,
  Switch,
  TextErea,
} from '@/components/custom'
import { Box } from '@mui/material'

type FormDataItem = {
  label?: string
  valid?: boolean
  type: 'INPUT' | 'SWITCH' | 'RADIOBUTTON' | 'TEXTEREA' | 'COMBOBOX'
  placeholder?: string
  dataForm?: any | null
  customSx: null
}

interface FormControllerProps {
  formData: FormDataItem[] | null
  validationData: any
}

const FormController = (props: FormControllerProps) => {
  const { formData, validationData } = props

  const _TypeFormHandler = (dataForm: FormDataItem, key: number) => {
    switch (dataForm.type) {
      case 'INPUT':
        return <Input {...dataForm} key={key} />
      case 'COMBOBOX':
        return <ComboBox {...dataForm} key={key} />
      case 'RADIOBUTTON':
        return <RadioButton {...dataForm} key={key} />
      case 'SWITCH':
        return <Switch {...dataForm} key={key} />
      case 'TEXTEREA':
        return <TextErea {...dataForm} key={key} />
      default:
        throw new Error('Invalid Action')
    }
  }

  const _FormViewHandler = () => {
    return formData?.map((item: FormDataItem, index) =>
      _TypeFormHandler(item, index),
    )
  }

  return <Box>{_FormViewHandler()}</Box>
}

export { FormController }
