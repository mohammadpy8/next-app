'use client'

import { FormView } from '@/components/custom'
import { ApiRegister } from '@/config'

interface FormDataItem {
  label: string
  valid: boolean
  type: string
  customSx: any | null
  placeholder: string
  dataForm: any | null
}

interface requestPutData {
  PostData: any
  data: any | null
  error: any
  isPending: boolean
  isSuccess: boolean
  status: string
}

const Main = () => {
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
    body: 'ddfs',
    userId: 100,
  }

  const getData = ApiRegister('todos', 'GET', {}, false, null, 'all-todos')

  const postData = ApiRegister(
    'todos',
    'POST',
    dataPost,
    true,
    null,
    'post-todos',
  ) as requestPutData

  console.log('post=====>', postData)

  return (
    <div>
      <FormView formType="FORM" validationData={getData} formData={formData} />
      <button onClick={postData.PostData}>send</button>
    </div>
  )
}

export default Main
