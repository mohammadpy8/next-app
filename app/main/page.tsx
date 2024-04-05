"use client";

import { FormView, ImageComponent, LoaderComponent } from "@/components/custom";
import { ApiRegister } from "@/config";
import { dataFormStepper, formData } from "./data";
import { cookies } from "next/headers";
import { Box } from "@mui/material";
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

const Main = () => {
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

  const { PostData, data, error, isPending, isSuccess, status } = PostRequest(
    "todos",
    null,
    { name: "" },
    "todo-post",
    true
  );

  console.log({ data, error, isPending, isSuccess, status });

  // const d = await GetRequest("todoss", null, true);

  // console.log("dddd =====>", d);

  return (
    <div>
      <button onClick={() => PostData()}>hhh</button>
      <FormView
        formType="FORM"
        validationData={2}
        formData={formData}
        formStepperData={null}
        textBottomForm={false}
        textOnPage={null}
        childForm={false}
        dataChildForm={null}
        buttonTextForm="ارسال اطلاعات"
      />
      <Box>
        <ImageComponent
          altImage="flower"
          heigthImage={50}
          widthImage={50}
          urlImage="flowers.jpg"
          styleImage={{
            borderRadius: "50px",
          }}
        />
      </Box>
      {/* <button onClick={postData.PostData}>send</button> */}
      {/* <FormView
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
      <Box display="flex" justifyContent="center" alignItems="center">
        <Box bgcolor="#000" width="90%" borderRadius="15px">
          <LoaderComponent
            colorLoader="#fff"
            heigthLoader="60"
            widthLoader="60"
            radiusLoader="9"
            wrapperStyleLoader={{}}
          />
        </Box>
      </Box>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta deserunt
        debitis, dolor quisquam nemo nulla praesentium voluptatum unde officiis
        quo totam. Consequatur molestias odio autem voluptas consectetur,
        voluptatum aliquam exercitationem tempora labore deserunt commodi! Nemo
        omnis ex facere soluta illum tempore consequatur inventore corporis
        beatae, corrupti magni fuga repellendus sequi eveniet nesciunt in
        eligendi tenetur accusamus alias perspiciatis, ratione quis quidem.
        Minus ea tempora enim cupiditate unde recusandae laboriosam
        exercitationem facilis. Exercitationem quasi repellendus aliquid
        inventore voluptates omnis voluptatem aperiam libero, consequuntur
        mollitia qui earum blanditiis sit nisi velit repellat culpa ipsa
        expedita sed iusto accusamus quod. Vel obcaecati optio suscipit odit qui
        accusamus maxime delectus neque asperiores dolor aspernatur voluptatem
        culpa quos accusantium mollitia doloribus, excepturi quas molestias
        porro repudiandae assumenda temporibus possimus nulla aliquam. Maxime
        autem voluptatem vero velit molestiae dolorum nam, blanditiis aperiam
        culpa unde? Officiis deserunt corporis iure dolor quis consequatur
        repudiandae eos cum, sed rerum. Nam doloremque praesentium vitae magni
        ipsa assumenda veniam nihil rerum natus, neque, totam nobis aliquid
        tempora? Modi, dolorem esse? Voluptatum, incidunt. Numquam soluta,
        architecto harum minus illum distinctio molestiae sint deserunt aliquid
        impedit mollitia voluptatem magnam odit. Voluptatum amet veritatis id
        natus quibusdam dolore. Vitae, reprehenderit? Iure minus nostrum, neque
        magni dignissimos officia vel iusto corrupti voluptatibus tenetur.
        Laborum maiores reiciendis voluptatum fugiat eos sint consequatur labore
        sed voluptatibus tempora quae laudantium accusamus ut, reprehenderit cum
        velit, tempore repudiandae impedit quod libero at fuga non! Voluptas
        ipsam est incidunt asperiores perspiciatis! Harum mollitia aliquam
        dolorem, soluta tempore ullam totam quisquam inventore quasi reiciendis
        aperiam magni excepturi facilis quia recusandae voluptatum ipsum nihil
        in amet optio sunt reprehenderit, ab nulla. Unde et vero tempora quis
        vitae eligendi. Id, maxime. Animi expedita tempore voluptate quas
        obcaecati non recusandae autem, aut libero amet eius aspernatur fugit.
        Ut sapiente ducimus facilis ipsum delectus, minus atque reiciendis
        quaerat corporis dignissimos quas totam consequatur! Eaque commodi
        obcaecati ducimus quia esse rem fugiat ratione, ad, quas molestiae in
        quam accusantium atque laboriosam nemo distinctio porro, possimus libero
        deserunt. Aut et nisi repellendus voluptas. Fuga molestias tenetur culpa
        possimus porro, suscipit minus, delectus aut laboriosam atque ab dolores
        officia, deleniti cupiditate voluptatem dolore cumque repellendus quia
        nisi voluptatibus natus dolorum? Incidunt ad magni officia iste possimus
        perferendis! Soluta, explicabo provident vero blanditiis, deserunt quasi
        odio voluptate laudantium nam officiis eligendi. Voluptatum aliquid, rem
        impedit temporibus, explicabo est quam expedita earum, ut omnis eaque
        praesentium accusantium quas? Pariatur modi impedit laborum, accusantium
        repellendus molestias fuga deleniti ipsum? Totam cupiditate eveniet nam
        similique aliquam error aut porro aliquid reiciendis quod, incidunt
        impedit possimus vel numquam repudiandae reprehenderit dolorum
        provident. Cupiditate dolor id nesciunt veniam ducimus recusandae
        similique quidem. Nostrum saepe explicabo consequatur dolor? Dolor sunt
        eveniet nobis eum deserunt sapiente fuga totam adipisci vitae
        perspiciatis maiores ad est ipsam eaque error cumque facilis quos,
        numquam harum veniam recusandae, et magni debitis? Laboriosam tempore,
        impedit, adipisci earum, atque nemo vitae at assumenda amet vero quod
        veniam quis repellat magnam! Et molestias expedita repudiandae
        cupiditate repellat aliquid ratione placeat, quidem sit suscipit.
      </p>
    </div>
  );
};

export default Main;
