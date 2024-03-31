'use client'

import { FormView } from '@/components/export/customExport'
import { ApiRegister } from '@/config'
import { AxiosResponse } from 'axios'
import { useEffect, useState } from 'react'

type ApiConfig =
  | {
      data: any
      status: number
      message: string
      detailsResponse: AxiosResponse<any, any> | null
    }
  | {
      errorMessage: any
      statusError: any
      detailError: any
    }
  | undefined

interface FormDataItem {
  label: string
  valid: boolean
  type: string
  customSx: any | null
  placeholder: string
  dataForm: any | null
}

const formData: FormDataItem[] = [
  {
    label: 'نام و نام خانوادگی',
    valid: true,
    type: 'COMBOBOX',
    customSx: null,
    placeholder: 'نام و نام خانوادگی',
    dataForm: null,
  },
]

const Main = async () => {
  const [data, setData] = useState<any | null>({})

  const formData = [
    {
      label: 'نام و نام خانوادگی',
      valid: true,
      type: 'INPUT',
      customSx: null,
      placeholder: 'نام و نام خانوادگی',
      dataForm: null,
    },
  ]

  //   useEffect(() => {
  //     const getDataa = async () => {
  //       setData(getData)
  //     }
  //     getDataa()
  //   }, [])
  //   console.log('dd===>', data)
  const getData = await ApiRegister(
    'todos',
    'GET',
    {},
    false,
    null,
    () => {},
    // setData,
  )
  console.log('getttt', getData, data)

  return (
    <div>
      <FormView
        formType="FORM"
        validationData={getData}
        formData={formData}
      />
    </div>
  )
}

export default Main
