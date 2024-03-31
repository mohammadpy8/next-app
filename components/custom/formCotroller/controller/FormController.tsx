import {
  ComboBox,
  Input,
  RadioButton,
  Switch,
  TextErea,
} from '@/components/export/customExport'
import { Box } from '@mui/material'

type FormDataItem = {
  label?: string
  valid?: boolean
  type: 'INPUT' | 'SWITCH' | 'RADIOBUTTON' | 'TEXTEREA' | 'COMBOBOX'
  placeholder?: string
  dataForm?: any | null
}

interface FormControllerProps {
  formData: FormDataItem[]
  validationData: any
}

const FormController = (props: FormControllerProps) => {
  const { formData, validationData } = props

  const _TypeFormHandler = (dataForm: FormDataItem) => {
    switch (dataForm.type) {
      case 'INPUT':
        return <Input {...dataForm} />
      case 'COMBOBOX':
        return <ComboBox {...dataForm} />
      case 'RADIOBUTTON':
        return <RadioButton {...dataForm} />
      case 'SWITCH':
        return <Switch {...dataForm} />
      case 'TEXTEREA':
        return <TextErea {...dataForm} />
      default:
        throw new Error('Invalid Action')
    }
  }

  const _FormViewHandler = () => {
    return formData.map((item: FormDataItem) => _TypeFormHandler(item))
  }

  console.log('props===>', props)
  return <Box>{_FormViewHandler()}</Box>
}

export { FormController }
