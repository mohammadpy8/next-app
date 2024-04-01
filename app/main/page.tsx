'use client'

import { FormView } from '@/components/custom'
import { ApiRegister } from '@/config'
import { dataFormStepper, formData } from './data'

interface requestPutData {
  PostData: any
  data: any | null
  error: any
  isPending: boolean
  isSuccess: boolean
  status: string
}

const Main = () => {
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
      <FormView
        formType="FORM"
        validationData={getData}
        formData={formData}
        formStepperData={null}
      />
      <button onClick={postData.PostData}>send</button>
      <FormView
        formType="FORM-STEPPER"
        validationData={2}
        formData={null}
        formStepperData={dataFormStepper}
      />
    </div>
  )
}

export default Main
