import { FormController } from '@/components/custom'

interface FormDataItem  {
  label?: string
  valid?: boolean
  type: 'INPUT' | 'SWITCH' | 'RADIOBUTTON' | 'TEXTEREA' | 'COMBOBOX' 
  placeholder?: string
  dataForm?: any | null
  customSx: null 
}

type FormViewType = {
  formData: Array<FormDataItem>
  formType: 'FORM'
  validationData: any
}

const FormView = (props: FormViewType) => {
  const { formType, validationData, formData } = props
  switch (formType) {
    case 'FORM':
      return (
        <FormController formData={formData} validationData={validationData} />
      )
    default:
      throw new Error('Invalid Action')
  }
}

export { FormView }
