import { FormController, FormStepperController } from '@/components/custom'

interface FormDataItem {
  label?: string
  valid?: boolean
  type: 'INPUT' | 'SWITCH' | 'RADIOBUTTON' | 'TEXTEREA' | 'COMBOBOX'
  placeholder?: string
  dataForm?: any | null
  customSx: null
}

interface FormStteprDataItem {
  page: number,
  label?: string
  valid?: boolean
  type: 'INPUT' | 'SWITCH' | 'RADIOBUTTON' | 'TEXTEREA' | 'COMBOBOX'
  placeholder?: string
  dataForm?: any | null
  customSx: null
}

type FormViewType = {
  formData: Array<FormDataItem> | null
  formStepperData: Array<Array<FormStteprDataItem>> | null
  formType: 'FORM' | 'FORM-STEPPER'
  validationData: any
}

const FormView = (props: FormViewType) => {
  const { formType, validationData, formData, formStepperData } = props
  switch (formType) {
    case 'FORM':
      return (
        <FormController formData={formData} validationData={validationData} />
      )
    case 'FORM-STEPPER':
      return <FormStepperController formStepperData={formStepperData} />
    default:
      throw new Error('Invalid Action')
  }
}

export { FormView }
