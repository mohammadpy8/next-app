import { FormController } from '@/components/export/customExport'

type FormDataItem = {
  label?: string
  valid?: boolean
  type: 'INPUT' | 'SWITCH' | 'RADIOBUTTON' | 'TEXTEREA' | 'COMBOBOX'
  placeholder?: string
  dataForm?: any | null
}

type FormViewType = {
  formData: FormDataItem[]
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
