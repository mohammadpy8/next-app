import { ApiRegister } from "@/config";

const NewPage = async ({ ...rest }) => {
  console.log("rest===>", rest);
  const { GetRequest } = ApiRegister();

  const data = await GetRequest("posts", null, true);

  return <div>{/* {data.data.map(())} */}</div>;
};

export default NewPage;
