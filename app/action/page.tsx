import { Box } from "@mui/material";

const Action = () => {

    async function createInvoice(formData: FormData) {
        "use server";

        const rawFormData = {
            consumerId : formData.get("consumerId"),
            amount: formData.get("amount"),
            status: formData.get("status"),
        }
    }
  return <Box>
    <form action={createInvoice}></form>
  </Box>;
};

export default Action;
