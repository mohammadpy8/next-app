'use client'

import { FormView } from '@/components/export/customExport'
import { ApiRegister } from '@/config'
import { useState } from 'react'

interface FormDataItem {
  label: string
  valid: boolean
  type: string
  customSx: any | null
  placeholder: string
  dataForm: any | null
}

interface requestPutData {
  PutData: any
  data: any | null,
  error: any,
  isPending: boolean,
  isSuccess: boolean,
  status: string,
}

const Main = () => {
  const [data, setData] = useState<any | null>({})

  console.log('dataaa =====>', data)

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

  const dataPost = {
    title: 'mohamm',
    userId: 100,
  }

  const getData = ApiRegister('todosss', 'GET', {}, false, null, 'all-todos')

  const postData = ApiRegister(
    'todos',
    'PUT',
    dataPost,
    true,
    null,
    'post-todos',
  ) as requestPutData

  console.log('post=====>', postData)

  return (
    <div>
      <FormView formType="FORM" validationData={getData} formData={formData} />
      <button onClick={postData.PutData}>send</button>
    </div>
  )
}

export default Main
