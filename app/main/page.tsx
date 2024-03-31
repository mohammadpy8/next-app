'use client'

import { FormView } from '@/components/export/customExport'
import { ApiRegister } from '@/config'

interface FormDataItem {
  label: string
  valid: boolean
  type: string
  customSx: any | null
  placeholder: string
  dataForm: any | null
}


const Main = async () => {

  const formData: FormDataItem[] = [
    {
      label: 'نام و نام خانوادگی',
      valid: true,
      type: 'INPUT',
      customSx: null,
      placeholder: 'نام و نام خانوادگی',
      dataForm: null,
    },
    {
      label: 'نام و نام خانوادگی',
      valid: true,
      type: 'COMBOBOX',
      customSx: null,
      placeholder: 'نام و نام خانوادگی',
      dataForm: null,
    },
    {
      label: 'نام و نام خانوادگی',
      valid: true,
      type: 'SWITCH',
      customSx: null,
      placeholder: 'نام و نام خانوادگی',
      dataForm: null,
    },
  ]

  const getData = await ApiRegister('todos', 'GET', {}, false, null, () => {})

  return (
    <div>
      <FormView formType="FORM" validationData={getData} formData={formData} />
    </div>
  )
}

export default Main
