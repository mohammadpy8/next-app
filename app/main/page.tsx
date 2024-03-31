'use client'

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

const Main = async () => {
    const [data, setData] = useState<any | null>({})
    
    const formData = [{
        lable: "نام و نام خانوادگی",
        valid: true,
        type: "combobox",
        customSx: null,
        placeholder: "نام و نام خانوادگی",

    }]

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
    () => {}
    // setData,
  )
  console.log('getttt', getData, data)

  return <div>main</div>
}

export default Main
