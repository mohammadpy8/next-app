import { FormView } from "@/components/custom";
import { ApiRegister } from "@/config";
import { dataFormStepper, formData } from "./data";
import { cookies } from "next/headers";
interface requestPutData {
  PostData: any;
  data: any | null;
  error: any;
  isPending: boolean;
  isSuccess: boolean;
  status: string;
}

type requestGetData = {
  data: any;
  all_data: any;
  status: number;
} & {
  error: any;
};

const Main = async () => {
  const dataPost = {
    title: "mohamm",
    body: "ddfs",
    userId: 100,
  };

  const {
    GetRequest,
    PostRequest,
    AxiosMethod: { GET, POST, DELETE, PATCH, PUT },
  } = ApiRegister();

  const d = await GetRequest("todoss", null, true);

  console.log("dddd =====>", d);

  return (
    <div>
      <button>hhh</button>
      {/* <FormView
        formType="FORM"
        validationData={getData}
        formData={formData}
        formStepperData={null}
        textBottomForm={false}
        textOnPage={null}
        childForm={false}
        dataChildForm={null}
        buttonTextForm="ارسال اطلاعات"
      />
      <button onClick={postData.PostData}>send</button>
      <FormView
        formType="FORM-STEPPER"
        validationData={2}
        formData={null}
        formStepperData={dataFormStepper}
        textBottomForm={false}
        textOnPage={null}
        childForm={false}
        dataChildForm={null}
        buttonTextForm="تایید"
      /> */}
    </div>
  );
};

export default Main;
