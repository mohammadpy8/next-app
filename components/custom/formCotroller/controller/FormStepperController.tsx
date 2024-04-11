import type { singlePageDataProps } from '@/components/custom'

type PropsFormView = {
  singlePageData?: singlePageDataProps
  validationForm: any
}

const FormStepperController = ({
  validationForm,
  singlePageData,
  ...restProps
}: PropsFormView) => {
  return <div></div>
}

export { FormStepperController }
